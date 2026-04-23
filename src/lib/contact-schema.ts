import { z } from 'zod';

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(150),
  phone: z.string().trim().max(50).optional().default(''),
  company: z.string().trim().max(120).optional().default(''),
  message: z.string().trim().min(10).max(5000),
  sourcePath: z.string().trim().max(200).optional().default('/'),
  website: z.string().trim().max(200).optional().default(''),
  turnstileToken: z.string().trim().max(4000).optional().default(''),
  utmSource: z.string().trim().max(120).optional().default(''),
  utmMedium: z.string().trim().max(120).optional().default(''),
  utmCampaign: z.string().trim().max(120).optional().default(''),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
