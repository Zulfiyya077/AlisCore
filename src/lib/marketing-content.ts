export interface ServicePageContent {
  slug: string;
  title: string;
  summary: string;
  hero: string;
  problem: string;
  solution: string;
  deliverables: string[];
  idealFor: string[];
  outcomes: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface CaseStudyContent {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  timeline: string;
  seoTitle: string;
  seoDescription: string;
}

export interface IndustryPageContent {
  slug: string;
  title: string;
  summary: string;
  hero: string;
  challenges: string[];
  solutions: string[];
  whyAlisCore: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface BlogPostContent {
  slug: string;
  title: string;
  category: string;
  targetKeyword: string;
  supportingKeywords: string[];
  relatedServiceSlugs: string[];
  summary: string;
  excerpt: string;
  publishedAt: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  seoTitle: string;
  seoDescription: string;
}

export const servicePages: ServicePageContent[] = [
  {
    slug: 'network-setup-management',
    title: 'Network Setup and Management',
    summary:
      'Design, deploy, and maintain secure office and multi-site networks with clear documentation and monitoring.',
    hero:
      'Build a stable network foundation that supports daily operations without recurring outages and guesswork.',
    problem:
      'Many SMB environments grow without standards. That leads to weak Wi-Fi coverage, unstable VLAN segmentation, and recurring incidents.',
    solution:
      'AlisCore designs and manages network infrastructure with clear standards across routers, firewalls, switches, and wireless.',
    deliverables: [
      'Network discovery, topology map, and baseline audit',
      'Switching, routing, VLAN, and firewall policy setup',
      'Wi-Fi design and optimization for office coverage',
      'Ongoing monitoring, patching, and change control',
    ],
    idealFor: [
      'SMBs with unstable office or branch connectivity',
      'Teams opening a new site or redesigning infrastructure',
      'Companies that need reliable day-to-day uptime',
    ],
    outcomes: [
      'Fewer outages and escalation incidents',
      'Better performance and clearer network ownership',
      'A scalable, standards-based network architecture',
    ],
    seoTitle: 'Managed Network Setup and Administration Services',
    seoDescription:
      'Design and manage stable SMB network infrastructure with routing, switching, firewall policy, and proactive monitoring.',
  },
  {
    slug: 'it-support-helpdesk',
    title: 'IT Support and Helpdesk',
    summary:
      'Day-to-day user support with structured ticketing, remote troubleshooting, and escalation management.',
    hero:
      'Reduce business interruption with predictable support response and clear issue ownership.',
    problem:
      'Without structured helpdesk workflows, small issues grow into repeated downtime and employee frustration.',
    solution:
      'We run a practical support model with triage, SLA-driven response, and resolution documentation.',
    deliverables: [
      'Helpdesk ticket intake, triage, and prioritization',
      'Remote support for endpoint, user, and access issues',
      'Onboarding/offboarding IT checklists',
      'Monthly support trend and root-cause reporting',
    ],
    idealFor: [
      'SMBs without internal IT support staff',
      'Operations teams needing reliable user support',
      'Businesses that need response accountability',
    ],
    outcomes: [
      'Faster issue resolution and less user downtime',
      'Higher productivity across non-technical teams',
      'Clear support metrics for leadership',
    ],
    seoTitle: 'Managed IT Helpdesk and Support Services',
    seoDescription:
      'Get practical helpdesk support with ticketing, user issue triage, and ongoing IT operations support for SMB teams.',
  },
  {
    slug: 'cybersecurity-hardening',
    title: 'Cybersecurity and Hardening',
    summary:
      'Security baseline hardening across endpoints, identities, firewalls, and email infrastructure.',
    hero:
      'Reduce cyber risk with practical controls that fit SMB operations and budgets.',
    problem:
      'Most SMB environments have inconsistent MFA, weak access policies, and outdated firewall or endpoint controls.',
    solution:
      'We implement layered security controls and routine reviews to reduce breach exposure and improve audit readiness.',
    deliverables: [
      'MFA and identity policy hardening',
      'Endpoint protection and patch compliance standards',
      'Firewall rule review and segmentation improvements',
      'Email security configuration (SPF, DKIM, DMARC)',
    ],
    idealFor: [
      'Businesses handling sensitive customer data',
      'Teams facing cyber insurance or compliance pressure',
      'SMBs with growing remote access requirements',
    ],
    outcomes: [
      'Lower exposure to common attack vectors',
      'Stronger policy control and visibility',
      'More confidence in external audits and assessments',
    ],
    seoTitle: 'SMB Cybersecurity Hardening and Managed Protection',
    seoDescription:
      'Implement practical cybersecurity controls across identity, endpoint, firewall, and email infrastructure.',
  },
  {
    slug: 'server-system-administration',
    title: 'Server and System Administration',
    summary:
      'Reliable administration of Windows/Linux servers, directory services, and core business systems.',
    hero:
      'Keep core systems stable, patched, and recoverable with disciplined administration.',
    problem:
      'Unmaintained servers and inconsistent system standards create outages, access issues, and data integrity risk.',
    solution:
      'We manage critical systems lifecycle, patch cadence, access controls, and performance checks as a routine service.',
    deliverables: [
      'Server patching and lifecycle management',
      'Active Directory / identity administration',
      'Performance, disk, and service monitoring',
      'Operational runbooks and recovery procedures',
    ],
    idealFor: [
      'SMBs with hybrid on-prem and cloud systems',
      'Teams running business-critical internal servers',
      'Companies needing predictable server maintenance',
    ],
    outcomes: [
      'Improved stability and fewer unplanned outages',
      'Cleaner system ownership and controls',
      'Reduced operational risk from neglected infrastructure',
    ],
    seoTitle: 'Managed Server and System Administration Services',
    seoDescription:
      'Keep business-critical servers and core systems stable with proactive administration and monitoring.',
  },
  {
    slug: 'cloud-solutions-m365-google-workspace',
    title: 'Cloud Solutions (M365 and Google Workspace)',
    summary:
      'Cloud productivity environment setup, migration, governance, and ongoing admin support.',
    hero:
      'Roll out cloud workplace tools with secure access, clean structure, and user adoption support.',
    problem:
      'Cloud suites are often deployed without structure, causing permission chaos, security gaps, and admin overhead.',
    solution:
      'We implement practical tenant governance for Microsoft 365 and Google Workspace based on real team workflows.',
    deliverables: [
      'Tenant setup and baseline hardening',
      'Mailbox and data migration support',
      'License and identity governance',
      'Teams/SharePoint/Drive structure standards',
    ],
    idealFor: [
      'SMBs moving from local systems to cloud productivity',
      'Teams with inconsistent user/access governance',
      'Companies needing cleaner cloud administration',
    ],
    outcomes: [
      'Safer and cleaner cloud collaboration',
      'Lower admin complexity and access risk',
      'Better productivity tooling adoption',
    ],
    seoTitle: 'Microsoft 365 and Google Workspace IT Services',
    seoDescription:
      'Deploy and manage Microsoft 365 and Google Workspace with strong governance, migration support, and secure access.',
  },
  {
    slug: 'backup-disaster-recovery-vpn',
    title: 'Backup, Disaster Recovery, and VPN Access',
    summary:
      'Protect business continuity with verified backups, DR planning, and secure remote access architecture.',
    hero:
      'Ensure business continuity with tested recovery workflows and secure access to internal systems.',
    problem:
      'Backups often exist but are not tested, and remote access is deployed without consistent security policy.',
    solution:
      'We design, monitor, and test backup/DR workflows while implementing secure VPN and remote access controls.',
    deliverables: [
      'Backup policy and retention architecture',
      'Restore testing and disaster recovery playbooks',
      'Site-to-site and user VPN design',
      'MFA-backed remote access controls and auditing',
    ],
    idealFor: [
      'SMBs with uptime-sensitive operations',
      'Teams with hybrid or remote workforce requirements',
      'Businesses that need recovery confidence before incidents happen',
    ],
    outcomes: [
      'Reduced data-loss and downtime risk',
      'Clearer recovery accountability and process',
      'Secure, dependable remote access for teams',
    ],
    seoTitle: 'Managed Backup, Disaster Recovery, and VPN Services',
    seoDescription:
      'Strengthen business continuity with managed backups, tested disaster recovery, and secure remote VPN access.',
  },
];

export const caseStudies: CaseStudyContent[] = [
  {
    slug: 'healthcare-operations-portal',
    title: 'Healthcare Operations Portal',
    industry: 'Healthcare',
    summary:
      'A unified internal platform for managing intake workflows, follow-up coordination, and operational visibility.',
    challenge:
      'The client had disconnected administrative workflows, slow handoffs between teams, and limited visibility into response times across daily operations.',
    solution:
      'AlisCore designed a centralized operations portal that brought intake, follow-up, status tracking, and role-based visibility into one system.',
    results: [
      'Reduced admin friction across daily workflows',
      'Improved team coordination and task ownership',
      'Created a scalable base for future process automation',
    ],
    services: ['Custom Software Development', 'Workflow Automation', 'UX/UI Design'],
    timeline: '10 weeks',
    seoTitle: 'Healthcare Operations Portal Case Study',
    seoDescription:
      'See how AlisCore approached healthcare operations modernization with a custom portal for workflow visibility and efficiency.',
  },
  {
    slug: 'ecommerce-operations-automation',
    title: 'E-commerce Operations Automation',
    industry: 'E-commerce',
    summary:
      'An operations layer that improved order visibility, reduced reconciliation work, and connected reporting workflows.',
    challenge:
      'The business was managing orders, inventory-related updates, and reporting across too many disconnected tools, which created delays and manual reconciliation work.',
    solution:
      'We designed an automation-first operations layer that streamlined internal reporting and reduced friction across key operational handoffs.',
    results: [
      'Lower manual reconciliation time',
      'Cleaner operational visibility across teams',
      'Better support for scale without extra administrative burden',
    ],
    services: ['Workflow Automation', 'Web Application Development'],
    timeline: '8 weeks',
    seoTitle: 'E-commerce Operations Automation Case Study',
    seoDescription:
      'Explore how AlisCore approached automation and visibility challenges for an e-commerce operations workflow.',
  },
  {
    slug: 'startup-mvp-launch-platform',
    title: 'Startup MVP Launch Platform',
    industry: 'Startup / SaaS',
    summary:
      'A lean MVP platform designed to validate demand quickly while preserving room for future growth.',
    challenge:
      'The startup needed to move quickly without building a fragile product that would require a full rebuild after launch.',
    solution:
      'AlisCore defined the MVP scope, focused on the highest-value features, and built a scalable application foundation to support future iteration.',
    results: [
      'Faster path to market validation',
      'Cleaner product scope and stakeholder alignment',
      'A stronger architecture for post-launch iteration',
    ],
    services: ['Discovery and Product Strategy', 'Web Application Development', 'UX/UI Design'],
    timeline: '12 weeks',
    seoTitle: 'Startup MVP Launch Platform Case Study',
    seoDescription:
      'Learn how AlisCore approached MVP strategy and delivery for a startup launching a new digital product.',
  },
];

export const industryPages: IndustryPageContent[] = [
  {
    slug: 'healthcare-it-solutions',
    title: 'Healthcare IT Solutions',
    summary:
      'Digital systems and workflow improvements for healthcare teams that need better coordination, visibility, and operational efficiency.',
    hero:
      'Healthcare organizations often need more than software. They need clearer workflows, faster coordination, and systems that reduce administrative drag.',
    challenges: [
      'Disconnected intake, follow-up, and coordination workflows',
      'High administrative overhead across day-to-day operations',
      'Limited visibility into team handoffs and response times',
    ],
    solutions: [
      'Centralized operations portals and internal workflow systems',
      'Automation for repetitive admin and status-tracking tasks',
      'Scalable digital experiences designed around operational clarity',
    ],
    whyAlisCore: [
      'Business-first planning before technical delivery',
      'A strong fit for process-heavy, coordination-heavy teams',
      'Clean architecture that supports future iteration and growth',
    ],
    seoTitle: 'Healthcare IT Solutions and Software Development',
    seoDescription:
      'AlisCore helps healthcare organizations improve workflows, reduce admin overhead, and modernize digital operations.',
  },
  {
    slug: 'ecommerce-technology-solutions',
    title: 'E-commerce Technology Solutions',
    summary:
      'Operational systems, automation, and integration layers for e-commerce businesses that need cleaner execution behind the storefront.',
    hero:
      'E-commerce growth creates backend complexity fast. Strong operations require better systems, cleaner reporting, and fewer manual reconciliations.',
    challenges: [
      'Disconnected tools across orders, inventory, and reporting',
      'Manual reconciliation and operational bottlenecks',
      'Limited visibility across customer and fulfillment workflows',
    ],
    solutions: [
      'Automation and integration for operational processes',
      'Custom dashboards and reporting layers',
      'Web applications that support internal and customer-facing needs',
    ],
    whyAlisCore: [
      'Focus on operational ROI, not just storefront features',
      'Clearer systems for scale without adding unnecessary overhead',
      'Delivery shaped around speed, maintainability, and visibility',
    ],
    seoTitle: 'E-commerce Technology Solutions and Automation',
    seoDescription:
      'Improve e-commerce operations with workflow automation, integrations, and scalable digital systems from AlisCore.',
  },
  {
    slug: 'startup-mvp-development',
    title: 'Startup MVP Development',
    summary:
      'Discovery, UX, and product delivery support for startups that need to move quickly without creating unnecessary rework.',
    hero:
      'Startups need speed, but they also need product clarity. The right MVP is lean, focused, and built on a maintainable foundation.',
    challenges: [
      'Unclear scope and shifting product priorities',
      'Pressure to launch quickly with limited resources',
      'Risk of technical shortcuts creating expensive rework later',
    ],
    solutions: [
      'Discovery and product strategy before build starts',
      'Focused MVP scoping and feature prioritization',
      'Scalable web application delivery with clear UX direction',
    ],
    whyAlisCore: [
      'Senior-led planning and execution for early-stage teams',
      'A practical balance between launch speed and long-term maintainability',
      'Product thinking combined with software delivery discipline',
    ],
    seoTitle: 'Startup MVP Development Services',
    seoDescription:
      'Launch faster with startup MVP development, discovery, and product strategy services from AlisCore.',
  },
];

export const blogPosts: BlogPostContent[] = [
  {
    slug: 'how-to-design-a-reliable-smb-network',
    title: 'How to Design a Reliable SMB Network',
    category: 'Network Operations',
    targetKeyword: 'smb network setup',
    supportingKeywords: [
      'network administration services',
      'office network design',
      'managed network monitoring',
    ],
    relatedServiceSlugs: [
      'network-setup-management',
      'server-system-administration',
      'cybersecurity-hardening',
    ],
    summary:
      'A practical framework for building office and branch networks that stay stable under real operational load.',
    excerpt:
      'Most small business outages are design issues, not hardware issues. Here is how to avoid them before they become recurring incidents.',
    publishedAt: '2026-04-15',
    sections: [
      {
        heading: 'Start with topology and traffic reality',
        body:
          'Document WAN, LAN, VLAN, and critical business traffic first. Without this baseline, scaling decisions become guesswork.',
      },
      {
        heading: 'Segment early, not after incidents',
        body:
          'Separate user devices, guest traffic, servers, and management networks early. Basic segmentation reduces blast radius and troubleshooting time.',
      },
      {
        heading: 'Treat monitoring as part of deployment',
        body:
          'A network without alerting and log visibility is not production-ready. Monitoring should launch on day one, not after first downtime.',
      },
    ],
    seoTitle: 'How to Design a Reliable SMB Network',
    seoDescription:
      'Learn practical network design steps for SMB environments to reduce outages and improve operational reliability.',
  },
  {
    slug: 'what-an-it-helpdesk-needs-to-run-well',
    title: 'What an IT Helpdesk Needs to Run Well',
    category: 'IT Support',
    targetKeyword: 'managed it helpdesk',
    supportingKeywords: [
      'it support for smb',
      'helpdesk triage process',
      'it escalation model',
    ],
    relatedServiceSlugs: [
      'it-support-helpdesk',
      'server-system-administration',
      'cloud-solutions-m365-google-workspace',
    ],
    summary:
      'Helpdesk quality depends on process discipline more than tool count. These are the standards that actually matter.',
    excerpt:
      'If support depends on one person memory, service quality will break under load. Use this model to create a dependable support operation.',
    publishedAt: '2026-04-15',
    sections: [
      {
        heading: 'Ticket triage must be predictable',
        body:
          'Define incident categories, priorities, and expected response windows. Clear triage rules remove daily chaos from support operations.',
      },
      {
        heading: 'Escalation paths should be explicit',
        body:
          'Document who owns endpoint issues, identity access, network incidents, and vendor tickets. Escalation clarity reduces MTTR.',
      },
      {
        heading: 'Use monthly support reporting',
        body:
          'Track recurring ticket themes, response times, and unresolved categories. Reporting turns support from reactive work into continuous improvement.',
      },
    ],
    seoTitle: 'What an IT Helpdesk Needs to Run Well',
    seoDescription:
      'Build a practical IT helpdesk model with triage standards, escalation ownership, and reporting that improves service quality.',
  },
  {
    slug: 'cybersecurity-baseline-for-growing-businesses',
    title: 'Cybersecurity Baseline for Growing Businesses',
    category: 'Cybersecurity',
    targetKeyword: 'smb cybersecurity baseline',
    supportingKeywords: [
      'mfa policy for small business',
      'firewall hardening checklist',
      'endpoint security standards',
    ],
    relatedServiceSlugs: [
      'cybersecurity-hardening',
      'network-setup-management',
      'backup-disaster-recovery-vpn',
    ],
    summary:
      'Security maturity starts with repeatable controls, not expensive tooling. This baseline covers what SMB teams should implement first.',
    excerpt:
      'Most incidents exploit basic gaps: weak identity controls, missing patching standards, and poor email hygiene.',
    publishedAt: '2026-04-15',
    sections: [
      {
        heading: 'Identity is your first perimeter',
        body:
          'Enforce MFA, review privileged accounts, and standardize access lifecycle processes. Identity controls reduce risk faster than most tooling upgrades.',
      },
      {
        heading: 'Patch and endpoint hygiene are non-negotiable',
        body:
          'Define patch windows, endpoint security baseline, and exception handling. Consistency matters more than occasional deep cleanups.',
      },
      {
        heading: 'Email and firewall policy need routine review',
        body:
          'SPF, DKIM, DMARC, and firewall rules should be reviewed on cadence. Most avoidable exposure lives in stale policy.',
      },
    ],
    seoTitle: 'Cybersecurity Baseline for Growing Businesses',
    seoDescription:
      'Implement practical SMB cybersecurity controls across identity, endpoint, email, and firewall policy.',
  },
  {
    slug: 'backup-and-disaster-recovery-checklist-for-smbs',
    title: 'Backup and Disaster Recovery Checklist for SMBs',
    category: 'Business Continuity',
    targetKeyword: 'backup disaster recovery smb',
    supportingKeywords: [
      'rto rpo planning',
      'backup restore testing',
      'business continuity it',
    ],
    relatedServiceSlugs: [
      'backup-disaster-recovery-vpn',
      'server-system-administration',
      'cloud-solutions-m365-google-workspace',
    ],
    summary:
      'Backups are only useful when restore workflows are tested. Use this checklist to validate readiness before an incident.',
    excerpt:
      'Many teams discover backup gaps only during downtime. A tested DR process is what separates recovery from prolonged outage.',
    publishedAt: '2026-04-15',
    sections: [
      {
        heading: 'Define clear RTO and RPO targets',
        body:
          'Recovery targets should be documented per system. Without RTO/RPO alignment, backup tooling cannot be validated against business expectations.',
      },
      {
        heading: 'Test restore procedures on schedule',
        body:
          'Run restore drills quarterly and verify data integrity. Successful backup jobs do not guarantee successful recovery.',
      },
      {
        heading: 'Secure remote access for incident mode',
        body:
          'During outages, teams rely on remote access. Ensure VPN and admin pathways are hardened and tested as part of DR readiness.',
      },
    ],
    seoTitle: 'Backup and Disaster Recovery Checklist for SMBs',
    seoDescription:
      'Use this practical SMB backup and disaster recovery checklist to improve restore confidence and operational resilience.',
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
