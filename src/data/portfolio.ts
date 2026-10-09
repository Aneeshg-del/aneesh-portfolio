/**
 * ANEESH — THE SERIES
 * Portfolio content based on Aneesh's supplied resume.
 * Case studies summarise professional work, not standalone products.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const profile = {
  fullName: 'Aneesh Ganja',
  displayName: 'Aneesh Ganja',
  firstName: 'ANEESH',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN ANEESH GANJA ORIGINAL',
  role: 'Program Lead — AI Operations',
  tagline: [
    'Program Delivery',
    'AI Operations',
    'Process Transformation',
  ],
  intro:
    'I build operating models, solve delivery bottlenecks, and lead AI-enabled process transformation. My work connects people, governance, and automation to make complex cross-border operations run better.',
  location: 'Hyderabad, India',
  email: 'aneesh.ganja@outlook.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/aneeshganja/',
    github: 'https://github.com/Aneeshg-del',
  },
  resumePdf: '/assets/Aneesh_Ganja_Resume.pdf',
  portrait: {
    src: '/assets/aneesh-portrait.jpeg',
    srcSet: '/assets/aneesh-portrait.jpeg 1254w',
    alt: 'Aneesh Ganja wearing a navy blazer',
  },
  interests: [
    'Operating Model Design',
    'AI-Enabled Transformation',
    'Management Consulting',
  ],
};

export const education = [
  {
    school: 'Fanshawe College',
    place: 'London, Ontario, Canada',
    degree: 'Post-Graduate Certificate — Business Management',
    period: 'December 2023',
    score: '',
  },
  {
    school: 'Kakatiya University',
    place: 'Hyderabad, India',
    degree: 'Bachelor of Business Administration (BBA)',
    period: 'May 2021',
    score: '',
  },
];

export const experience = [
  {
    company: 'Uber AI Solutions',
    role: 'Program Lead — AI Operations',
    place: 'Hyderabad, India · Engaged via vendor delivery partner',
    period: 'September 2025 – Present',
    points: [
      'Designed the operating model for a new business line: nine control gates, 40+ controls, named owners, and documented decision rules.',
      'Scaled delivery from 31 to 165 active specialists across 30 concurrent workstreams.',
      'Used stage-level analysis to isolate seven days of an 11-day delivery cycle as client-side scheduling, informing a joint SLA redesign.',
      'Led LLM-in-the-loop process transformation using Google Apps Script and a hosted Claude API, contributing to a 70% reduction in cost of operations.',
      'Authored a current-state assessment and transformation roadmap for the data science organisation.',
      'Served as the final quality gate for a six-person delivery pod before output reached the program manager or client.',
      'Rebuilt a mismatched workstream specification to address cost-to-serve and fill rate.',
      'Benchmarked automated evaluation scores against human-selected outcomes before adoption.',
    ],
  },
  {
    company: 'Meedad IMC',
    role: 'Operations & Delivery Lead',
    place: 'Remote · Kuwait',
    period: 'May 2024 – September 2025',
    points: [
      'Led resource and capacity operations for enterprise clients across North America, Australia, and the Middle East.',
      'Delivered 40+ strategic placements and contract deployments within six months.',
      'Rebuilt the cross-continental delivery pipeline with business unit heads, reducing turnaround time by 15 days.',
      'Standardised cross-border compliance documentation, reducing documentation error rates by 20%.',
    ],
  },
  {
    company: 'Vialto Partners',
    role: 'Engagement Support Specialist — Transitions & Compliance',
    place: 'Toronto, Ontario, Canada',
    period: 'January 2024 – May 2024',
    points: [
      'Managed global transition tracking and international compliance configuration for 50+ corporate assignees across North America.',
      'Automated tracking of cross-border documentation and regulatory checkpoints, sustaining 100% audit accuracy.',
      'Served as the primary contact for priority enterprise accounts, raising engagement satisfaction by 20%.',
    ],
  },
  {
    company: 'LeafFilter',
    role: 'Field Operations Representative',
    place: 'London, Ontario, Canada · Alongside postgraduate study',
    period: 'May 2023 – December 2023',
    points: [
      'Built real-time pipeline tracking integrated with internal CRM, improving workflow data accuracy by 20%.',
      'Conducted stakeholder consultations and account reconciliation.',
    ],
  },
  {
    company: 'ANSR',
    role: 'Process Integration Analyst — GCC Build & Operations',
    place: 'Hyderabad, India',
    period: 'August 2022 – April 2023',
    points: [
      'Supported Global Capability Centre establishment for consulting and technology enterprises entering India.',
      'Managed onboarding and process integration for 100+ roles annually, reducing cycle time by 25%.',
    ],
  },
  {
    company: 'Global Visas Ltd',
    role: 'Operations & Compliance Manager',
    place: 'Hyderabad, India',
    period: 'June 2021 – July 2022',
    points: [
      'Managed international compliance, cross-border payroll setup, and transition frameworks for 70+ overseas assignees.',
      'Restructured compliance data controls, reducing workflow latency by 40%.',
    ],
  },
];

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'operating-model',
    title: 'Building the Operating Model',
    year: '2025–2026',
    genre: 'Case Study · Governance · Program Delivery',
    logline:
      'Turning a new business line into a defined delivery system with controls, ownership, and decision rules.',
    stack: [
      'Operating-model design',
      'Control frameworks',
      'Requirements management',
      'Capacity planning',
    ],
    build: [
      'Designed an operating model from zero, with nine control gates and more than 40 controls.',
      'Assigned owners and documented decision rules at each stage. The framework became the canonical programme specification for leadership, data science, and client stakeholders.',
      'Supported delivery growth from 31 to 165 active specialists across 30 concurrent workstreams.',
    ],
    features: [
      'Named ownership at every control gate',
      'Documented decision rules',
      '54-line requirements register',
      'Three-tier commercial banding',
      'Workstream-level fulfilment targets',
    ],
    metrics: [
      { value: '9', label: 'control gates' },
      { value: '40+', label: 'documented controls' },
      { value: '31 → 165', label: 'active specialists' },
      { value: '30', label: 'concurrent workstreams' },
    ],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'delivery-diagnostics',
    title: 'Finding the Real Bottleneck',
    year: '2025–2026',
    genre: 'Case Study · Analysis · SLA Design',
    logline:
      'Using stage-level evidence to turn a delivery escalation into a shared process redesign.',
    stack: [
      'Funnel instrumentation',
      'Root-cause analysis',
      'Cycle-time analysis',
      'Stakeholder management',
    ],
    build: [
      'Investigated an 11-day cycle time that had been attributed to delivery underperformance.',
      'Stage-level analysis isolated seven days as client-side scheduling, reframing the escalation around the complete process.',
      'Used the findings to support a joint two-sided SLA redesign and benchmarked the automation needed for a sub-24-hour target.',
    ],
    features: [
      'Stage-by-stage cycle-time attribution',
      'Clear separation of delivery dependencies',
      'Evidence-led escalation handling',
      'Joint SLA redesign',
      'Automation requirements for the target SLA',
    ],
    metrics: [
      { value: '11 days', label: 'observed cycle time' },
      { value: '7 days', label: 'attributed to client scheduling' },
      { value: '<24 hours', label: 'client SLA target, not achieved result' },
    ],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'ai-transformation',
    title: 'Automation With Oversight',
    year: '2025–2026',
    genre: 'Case Study · AI Operations · Transformation',
    logline:
      'Leading LLM-enabled workflow changes while retaining human review and decision controls.',
    stack: [
      'Google Apps Script',
      'Claude API',
      'Structured JSON',
      'Human-in-the-loop design',
    ],
    build: [
      'Led the replacement of manual review, requirement matching, and integrity validation with LLM-in-the-loop pipelines.',
      'The transformation contributed to a 70% reduction in cost of operations.',
      'Benchmarked automated evaluation scores against human-selected outcomes, established confidence bands and a manual-review zone, and identified false negatives before adoption.',
      'Authored a transformation roadmap with nine instrumentation gaps and a nine-priority platform build brief for the data science organisation.',
    ],
    features: [
      'LLM-assisted review and requirement matching',
      'Integrity validation',
      'Confidence bands and manual-review routing',
      'False-negative analysis',
      'Risk-sequenced transformation roadmap',
    ],
    metrics: [
      { value: '70%', label: 'reduction in cost of operations' },
      { value: '9', label: 'instrumentation gaps assessed' },
      { value: '9', label: 'platform build priorities' },
    ],
    palette: violet,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

// Professional outcomes, not awards or certifications.
export const achievements: Achievement[] = [
  {
    id: 'delivery-scale',
    title: '31 to 165 Specialists',
    org: 'Uber AI Solutions',
    detail:
      'Scaled active specialist delivery across 30 concurrent workstreams.',
    laurel: 'Delivery Scale',
  },
  {
    id: 'operational-efficiency',
    title: '70% Lower Operating Cost',
    org: 'Uber AI Solutions',
    detail:
      'Led AI-enabled process transformation that contributed to the reduction.',
    laurel: 'Process Transformation',
  },
  {
    id: 'cross-border-delivery',
    title: '40+ Deployments',
    org: 'Meedad IMC',
    detail:
      'Delivered strategic placements and contract deployments within six months.',
    laurel: 'Cross-Border Delivery',
  },
  {
    id: 'compliance-quality',
    title: '100% Audit Accuracy',
    org: 'Vialto Partners',
    detail:
      'Sustained audit accuracy through automated documentation and checkpoint tracking.',
    laurel: 'Compliance Quality',
  },
  {
    id: 'onboarding-improvement',
    title: '25% Faster Cycle Time',
    org: 'ANSR',
    detail:
      'Managed onboarding and process integration for more than 100 roles annually.',
    laurel: 'Process Integration',
  },
];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

// No certifications were listed in the supplied resume.
export const certifications: Certification[] = [];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'program-delivery',
    title: 'Program & Delivery',
    subtitle: 'From operating model to execution',
    skills: [
      { name: 'Operating-model design', mono: 'OM' },
      { name: 'Program delivery', mono: 'PD' },
      { name: 'Capacity planning', mono: 'CP' },
      { name: 'Risk & dependencies', mono: 'RD' },
      { name: 'Stakeholder management', mono: 'SM' },
    ],
  },
  {
    id: 'ai-operations',
    title: 'AI-Enabled Operations',
    subtitle: 'Automation with human oversight',
    skills: [
      { name: 'LLM workflow automation', mono: 'AI' },
      { name: 'Human-in-the-loop design', mono: 'HI' },
      { name: 'Prompt engineering', mono: 'PE' },
      { name: 'Decision thresholds', mono: 'DT' },
      { name: 'Integrity validation', mono: 'IV' },
    ],
  },
  {
    id: 'analysis',
    title: 'Analysis & Instrumentation',
    subtitle: 'Evidence before escalation',
    skills: [
      { name: 'Root-cause analysis', mono: 'RC' },
      { name: 'Cycle-time instrumentation', mono: 'CT' },
      { name: 'SLA design', mono: 'SL' },
      { name: 'Requirements engineering', mono: 'RE' },
      { name: 'Cost-to-serve analysis', mono: 'CS' },
    ],
  },
  {
    id: 'governance',
    title: 'Governance & Compliance',
    subtitle: 'Clear controls and accountable decisions',
    skills: [
      { name: 'Control framework design', mono: 'CF' },
      { name: 'Audit-ready evidence', mono: 'AU' },
      { name: 'Cross-border compliance', mono: 'CC' },
      { name: 'Data quality controls', mono: 'DQ' },
      { name: 'Work-eligibility governance', mono: 'WG' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Practical tools behind the work',
    skills: [
      { name: 'Google Apps Script', mono: 'GS' },
      { name: 'Claude API', mono: 'CA' },
      { name: 'Google Workspace APIs', mono: 'GW' },
      { name: 'Excel / Google Sheets', mono: 'XL' },
      { name: 'Structured JSON', mono: 'JS' },
      { name: 'Jira', mono: 'Ji' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Operating-model design': [
    'Designed the nine-gate operating model at Uber AI Solutions.',
  ],
  'Program delivery': [
    'Scaled active delivery from 31 to 165 specialists across 30 workstreams.',
  ],
  'Capacity planning': [
    'Led resource and capacity operations at Meedad IMC.',
  ],
  'Risk & dependencies': [
    'Sequenced transformation gaps by severity and commercial risk.',
  ],
  'Stakeholder management': [
    'Worked across programme, client, leadership, and data science stakeholders.',
  ],
  'LLM workflow automation': [
    'Led LLM-assisted review, matching, and integrity-validation workflows.',
  ],
  'Human-in-the-loop design': [
    'Established a manual-review zone during evaluation-tool validation.',
  ],
  'Prompt engineering': [
    'Listed in the resume with anti-fabrication guardrails.',
  ],
  'Decision thresholds': [
    'Established confidence bands for automated evaluation.',
  ],
  'Integrity validation': [
    'Included integrity validation in the automation programme.',
  ],
  'Root-cause analysis': [
    'Isolated seven days of an 11-day cycle as client-side scheduling.',
  ],
  'Cycle-time instrumentation': [
    'Used funnel instrumentation to attribute delivery latency.',
  ],
  'SLA design': [
    'Supported a joint two-sided SLA redesign.',
  ],
  'Requirements engineering': [
    'Managed a 54-line requirements register and rebuilt a mismatched specification.',
  ],
  'Cost-to-serve analysis': [
    'Reassessed seniority requirements against the actual work.',
  ],
  'Control framework design': [
    'Defined nine control gates and more than 40 controls.',
  ],
  'Audit-ready evidence': [
    'Sustained 100% audit accuracy at Vialto Partners.',
  ],
  'Cross-border compliance': [
    'Managed international compliance and assignee transition frameworks.',
  ],
  'Data quality controls': [
    'Restructured compliance controls at Global Visas Ltd.',
  ],
  'Work-eligibility governance': [
    'Listed in the resume alongside background verification and contractor classification.',
  ],
  'Google Apps Script': [
    'Used in LLM-in-the-loop operational pipelines.',
  ],
  'Claude API': [
    'Hosted Claude API supported the automation programme.',
  ],
  'Google Workspace APIs': [
    'Listed among AI-enabled operations capabilities.',
  ],
  'Excel / Google Sheets': [
    'Advanced modelling, delivery telemetry, and reporting.',
  ],
  'Structured JSON': [
    'Listed among workflow automation capabilities.',
  ],
  Jira: [
    'Listed among governance and operational tools.',
  ],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2021–2023',
    synopsis:
      'Business education, international compliance, and process integration in India.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Business, From the Ground Up',
        description:
          'Completed a Bachelor of Business Administration at Kakatiya University.',
        tags: ['Business Administration', 'Education'],
        runtime: 'May 2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Across Borders',
        description:
          'Managed compliance, payroll setup, and transition frameworks for 70+ overseas assignees at Global Visas Ltd.',
        tags: ['Compliance', 'International Operations'],
        runtime: 'Jun 2021 – Jul 2022',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'Building the India Operation',
        description:
          'Supported GCC establishment and onboarding integration at ANSR, reducing cycle time by 25%.',
        tags: ['GCC Operations', 'Process Integration'],
        runtime: 'Aug 2022 – Apr 2023',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'The Canada Chapter',
    period: '2023–2024',
    synopsis:
      'Postgraduate business study alongside field operations and enterprise engagement work.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'A Wider Perspective',
        description:
          'Completed a postgraduate certificate in Business Management at Fanshawe College in London, Ontario.',
        tags: ['Business Management', 'Canada'],
        runtime: 'December 2023',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Closer to the Customer',
        description:
          'Worked in field operations at LeafFilter alongside postgraduate study, improving CRM workflow data accuracy.',
        tags: ['CRM', 'Field Operations'],
        runtime: 'May – Dec 2023',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'Transitions That Hold Together',
        description:
          'Managed transition tracking and compliance configuration for corporate assignees at Vialto Partners.',
        tags: ['Global Mobility', 'Enterprise Engagement'],
        runtime: 'Jan – May 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Delivery Across Time Zones',
    period: '2024–2025',
    synopsis:
      'Leading resource and capacity operations for clients across multiple regions.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Connecting the Delivery Pipeline',
        description:
          'Led operations at Meedad IMC for enterprise clients across North America, Australia, and the Middle East.',
        tags: ['Capacity Planning', 'Global Delivery'],
        runtime: 'May 2024 – Sep 2025',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'Making the Process Move',
        description:
          'Delivered 40+ placements and deployments within six months and helped reduce pipeline turnaround by 15 days.',
        tags: ['Delivery Improvement', 'Stakeholder Coordination'],
        runtime: 'Meedad IMC',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'The AI Operations Chapter',
    period: '2025–Present',
    synopsis:
      'Building operating models, diagnosing bottlenecks, and leading process transformation at Uber AI Solutions.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Build the System',
        description:
          'Designed a nine-gate control framework with named owners and documented decision rules.',
        tags: ['Operating Models', 'Governance'],
        runtime: 'Sep 2025 – Present',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Follow the Evidence',
        description:
          'Used stage-level cycle-time analysis to reframe a delivery escalation and inform a joint SLA redesign.',
        tags: ['Root-Cause Analysis', 'SLA Design'],
        runtime: 'Uber AI Solutions',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Automate With Judgment',
        description:
          'Led LLM-in-the-loop transformation and validated automated evaluation against human-selected outcomes.',
        tags: ['AI Operations', 'Human Oversight'],
        runtime: 'Uber AI Solutions',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Chapter',
    period: 'Looking ahead',
    synopsis:
      'Building on delivery experience toward broader transformation and consulting work.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'From Operations to Transformation',
        description:
          'Interested in opportunities connecting program leadership, operating-model design, AI-enabled transformation, and management consulting.',
        tags: ['Program Leadership', 'Transformation', 'Consulting'],
        runtime: 'Career direction',
        palette: jade,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Current role',
    title: 'Program Lead',
    detail: 'AI Operations · Uber AI Solutions',
    palette: crimson,
  },
  {
    label: 'Operating model',
    title: '9 Control Gates',
    detail: '40+ controls with named owners',
    palette: violet,
  },
  {
    label: 'Delivery scale',
    title: '31 → 165',
    detail: 'Active specialists across 30 workstreams',
    palette: ocean,
  },
  {
    label: 'Process transformation',
    title: '70% Lower Cost',
    detail: 'Contribution through AI-enabled workflow changes',
    palette: jade,
  },
  {
    label: 'Root-cause analysis',
    title: 'Find the Bottleneck',
    detail: 'Stage-level evidence informed a joint SLA redesign',
    palette: amber,
  },
  {
    label: 'Cross-border delivery',
    title: '40+ Deployments',
    detail: 'Placements and contracts within six months',
    palette: ocean,
  },
  {
    label: 'Compliance quality',
    title: '100% Audit Accuracy',
    detail: 'Documentation and checkpoint tracking at Vialto',
    palette: jade,
  },
  {
    label: 'Process integration',
    title: '25% Faster',
    detail: 'Onboarding cycle time at ANSR',
    palette: crimson,
  },
  {
    label: 'Education',
    title: 'Business Management',
    detail: 'Postgraduate certificate · Fanshawe College',
    palette: amber,
  },
  {
    label: 'Career direction',
    title: 'Transformation',
    detail: 'Program leadership and management consulting',
    palette: violet,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Introducing',
    title: 'Aneesh Ganja',
    lines: [
      'Program Lead — AI Operations',
      'Based in Hyderabad, with experience across India and Canada.',
    ],
    chips: ['Program Delivery', 'AI Operations', 'Transformation'],
  },
  {
    kicker: 'The work',
    title: 'Build the Operating Model',
    lines: [
      'Nine control gates. More than 40 controls.',
      'Clear owners and decision rules at every stage.',
    ],
    chips: ['Governance', 'Operating Models'],
  },
  {
    kicker: 'The scale',
    title: 'Make Delivery Work',
    lines: [
      'Scaled from 31 to 165 active specialists.',
      'Coordinated delivery across 30 concurrent workstreams.',
    ],
  },
  {
    kicker: 'The approach',
    title: 'Follow the Evidence',
    lines: [
      'Diagnose where time is actually spent.',
      'Use stage-level evidence to redesign the process.',
    ],
    chips: ['Root-Cause Analysis', 'SLA Design'],
  },
  {
    kicker: 'The transformation',
    title: 'Automate With Oversight',
    lines: [
      'Led LLM-enabled review, matching, and validation workflows.',
      'Contributed to a 70% reduction in operating cost.',
      'Validated automated evaluation before adoption.',
    ],
    chips: ['Apps Script', 'Claude API', 'Human Review'],
  },
  {
    kicker: 'The foundation',
    title: 'Business Across Borders',
    lines: [
      'Experience in delivery, compliance, and enterprise engagement.',
      'Postgraduate Business Management — Fanshawe College.',
      'BBA — Kakatiya University.',
    ],
  },
  {
    kicker: 'The next chapter',
    title: 'Broader Transformation',
    lines: [
      'Bringing delivery experience to larger operational problems.',
      'A career direction in program leadership and management consulting.',
    ],
  },
];

/**
 * Keep the existing internal IDs because other template files use them.
 * The visible names and descriptions below are personalised.
 */
export type ProfileId =
  | 'sushmita'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Aneesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: [
      'about', 'journey', 'originals',
      'picks', 'skills', 'moments', 'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience, and capabilities first',
    color: '#4cc9ff',
    order: [
      'story', 'originals', 'skills',
      'moments', 'about', 'journey', 'picks',
    ],
  },
  {
    id: 'developer',
    name: 'Collaborator',
    blurb: 'Case studies, methods, and tools first',
    color: '#46e3a8',
    order: [
      'originals', 'skills', 'moments',
      'journey', 'about', 'picks', 'story',
    ],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'The career story and highlights first',
    color: '#ffb547',
    order: [
      'journey', 'picks', 'about',
      'originals', 'moments', 'skills', 'story',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot · People, processes, and delivery',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons · ${seasons.reduce(
      (total, season) => total + season.episodes.length,
      0,
    )} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'My Work',
    card: 'Selected Case Studies',
    meta: `${projects.length} Stories · Professional work`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Career Highlights',
    meta: '10 highlights from the story',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Capabilities',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Impact',
    card: 'Selected Outcomes',
    meta: `${achievements.length} Professional outcomes`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume · View and download',
    palette: violet,
  },
};
