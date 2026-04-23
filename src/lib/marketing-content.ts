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
    slug: 'custom-software-vs-off-the-shelf-tools',
    title: 'Custom Software vs Off-the-Shelf Tools',
    category: 'Strategy',
    summary:
      'How growing businesses can evaluate when to keep using generic tools and when custom software becomes the better investment.',
    excerpt:
      'Off-the-shelf tools are fast to adopt, but they can create friction as a business scales. This guide explains when custom software starts making more sense.',
    publishedAt: '2026-04-15',
    sections: [
      {
        heading: 'Where off-the-shelf tools work well',
        body:
          'Generic software is often the right choice when a business is early, the process is standard, and the team needs speed over customization.',
      },
      {
        heading: 'Where custom software starts winning',
        body:
          'Once operations become process-heavy, multi-step, or unique to the business model, custom software can reduce friction and create stronger visibility.',
      },
      {
        heading: 'How to decide',
        body:
          'The decision should be based on operational pain, growth constraints, and the long-term cost of keeping teams inside tools that no longer fit.',
      },
    ],
    seoTitle: 'Custom Software vs Off-the-Shelf Tools',
    seoDescription:
      'Learn when growing businesses should move from generic software tools to custom software solutions.',
  },
  {
    slug: 'how-workflow-automation-reduces-operational-friction',
    title: 'How Workflow Automation Reduces Operational Friction',
    category: 'Automation',
    summary:
      'A practical look at how automation improves speed, consistency, and team capacity across daily business operations.',
    excerpt:
      'Operational friction often hides inside repetitive tasks and disconnected handoffs. Workflow automation helps remove that drag.',
    publishedAt: '2026-04-15',
    sections: [
      {
        heading: 'Why friction grows over time',
        body:
          'As teams expand and tools multiply, manual processes become harder to manage. That creates more follow-up work, more delays, and more errors.',
      },
      {
        heading: 'What automation should target first',
        body:
          'The best automation targets repetitive coordination, status updates, routing, reconciliation, and reporting tasks that waste team time.',
      },
      {
        heading: 'What businesses gain',
        body:
          'The main value is not just speed. It is cleaner operations, better consistency, and more capacity for higher-value work.',
      },
    ],
    seoTitle: 'How Workflow Automation Reduces Operational Friction',
    seoDescription:
      'See how workflow automation helps businesses reduce manual work, improve consistency, and scale operations.',
  },
  {
    slug: 'what-a-discovery-sprint-should-actually-produce',
    title: 'What a Discovery Sprint Should Actually Produce',
    category: 'Delivery',
    summary:
      'A discovery sprint should reduce delivery risk, clarify scope, and help teams make better product and architecture decisions before development starts.',
    excerpt:
      'If discovery ends with vague notes and no decisions, it did not do its job. Here is what a strong discovery sprint should actually produce.',
    publishedAt: '2026-04-15',
    sections: [
      {
        heading: 'Clarity before commitment',
        body:
          'The main purpose of discovery is to align goals, constraints, user needs, and delivery assumptions before a project moves into build mode.',
      },
      {
        heading: 'Outputs that matter',
        body:
          'Good discovery should produce a scoped roadmap, clear priorities, user flow direction, technical assumptions, and visible risks.',
      },
      {
        heading: 'Why it protects budget',
        body:
          'Without structured discovery, teams tend to discover misalignment too late, after time and money have already been committed.',
      },
    ],
    seoTitle: 'What a Discovery Sprint Should Produce',
    seoDescription:
      'Understand the real outputs of a strong discovery sprint and how it reduces software project risk.',
  },
  {
    slug: 'signs-your-legacy-system-is-blocking-growth',
    title: 'Signs Your Legacy System Is Blocking Growth',
    category: 'Modernization',
    summary:
      'Legacy systems often create hidden operational and technical costs long before a business decides to replace them.',
    excerpt:
      'A legacy system does not need to crash to become a problem. Often it simply slows down growth, visibility, and change.',
    publishedAt: '2026-04-15',
    sections: [
      {
        heading: 'Operational warning signs',
        body:
          'If teams rely on workarounds, duplicate data entry, or manual reporting because a system cannot adapt, the platform is already creating hidden cost.',
      },
      {
        heading: 'Technical warning signs',
        body:
          'Fragile integrations, slow change cycles, and poor maintainability are strong indicators that modernization should be evaluated.',
      },
      {
        heading: 'How to approach modernization',
        body:
          'Modernization should be driven by business constraints, not just technical frustration. A staged roadmap is often safer than a total reset.',
      },
    ],
    seoTitle: 'Signs Your Legacy System Is Blocking Growth',
    seoDescription:
      'Learn the operational and technical signs that a legacy system is limiting business growth.',
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
