export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  sourcePath: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  submittedAt: string;
};

async function postWebhook(lead: LeadPayload) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;

  const secret = process.env.LEAD_WEBHOOK_SECRET;
  const headers: Record<string, string> = {
    'content-type': 'application/json',
  };
  if (secret) {
    headers.authorization = `Bearer ${secret}`;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ type: 'alis_core_lead', lead }),
  });

  if (!response.ok) {
    console.error('[lead-sink] webhook failed', response.status, await response.text().catch(() => ''));
  }
}

async function insertSupabase(lead: LeadPayload) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const table = process.env.SUPABASE_LEADS_TABLE || 'leads';

  if (!supabaseUrl || !serviceKey) {
    return;
  }

  const response = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: serviceKey,
      authorization: `Bearer ${serviceKey}`,
      'content-type': 'application/json',
      prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name: lead.name,
      email: lead.email,
      phone: lead.phone || null,
      company: lead.company || null,
      message: lead.message,
      source_path: lead.sourcePath,
      utm_source: lead.utmSource || null,
      utm_medium: lead.utmMedium || null,
      utm_campaign: lead.utmCampaign || null,
    }),
  });

  if (!response.ok) {
    console.error('[lead-sink] supabase insert failed', response.status, await response.text().catch(() => ''));
  }
}

export async function sinkLead(lead: LeadPayload) {
  await Promise.allSettled([postWebhook(lead), insertSupabase(lead)]);
}
