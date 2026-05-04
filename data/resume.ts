export type ExperienceEntry = {
  period: string;
  company: string;
  role: string;
  bullets: string[];
};

export type WorkEntry = {
  company: string;
  title: string;
  description: string;
  impact: string;
};

export const profile = {
  name: 'Thomas Zhu',
  location: 'San Francisco Bay Area',
  tagline:
    'Full-stack engineer with over six years of experience architecting microservices on AWS and shipping end-to-end features across web and mobile.',
  about:
    'I lead end-to-end feature delivery across the stack — designing scalable services on AWS, building polished web and mobile interfaces, and partnering closely with Product, Design, and Infrastructure to ship work that moves business outcomes.',
  github: 'https://github.com/mr-thomas-z',
  githubHandle: 'mr-thomas-z'
};

export const experience: ExperienceEntry[] = [
  {
    period: '2025 — Present',
    company: 'Independent',
    role: 'Full-stack Developer',
    bullets: [
      'Building a cross-platform community platform for traders in React Native, with cloud-based authentication and real-time discussion features.'
    ]
  },
  {
    period: '2022 — 2025',
    company: 'EverCharge',
    role: 'Cloud Engineer (Full-stack)',
    bullets: [
      'Owned architectural design and end-to-end delivery of customer-facing dashboard features, driving performance optimizations that improved page-load times and engagement.',
      'Designed an interactive sitemap with a dynamic visual canvas for Avis, enabling real-time charger status monitoring — later adopted as a key selling point with enterprise clients.',
      'Architected a full-stack SMS and email notification system integrating with charger hardware and payment vendors, deployed for both external customers and internal operations.',
      'Rebuilt the company website with full mobile support in four days on short notice ahead of CES, helping attract new enterprise clients at the event.',
      'Set technical direction across Product, Infrastructure, and stakeholder teams to align engineering work with business outcomes.'
    ]
  },
  {
    period: '2019 — 2022',
    company: 'Volta Charging',
    role: 'Senior Mobile Engineer (Full-stack) → Mobile Engineer',
    bullets: [
      'Drove app reliability to 99.86% crash-free sessions and improved store ratings from ~2.1 to ~4.9 stars by partnering with designers and PMs on UX.',
      'Built and maintained backend microservices in PostgreSQL, AWS Lambda, API Gateway, and REST endpoints — expanding from frontend into full-stack work.',
      'Re-architected DevOps by automating all build types through Bitrise, with automated testing on AWS Device Farm and targeted distribution via App Center.',
      'Led a complete app redesign delivered in four days, coordinating across cloud and station teams to ship a check-in feature within a two-week public campaign deadline.',
      'Mentored junior engineers on mobile best practices, code-review standards, and testing strategy.'
    ]
  }
];

export const selectedWork: WorkEntry[] = [
  {
    company: 'EverCharge',
    title: 'Avis Interactive Sitemap',
    description:
      'A customizable sitemap with an interactive visual canvas for real-time charger status monitoring across fleet sites.',
    impact:
      'Adopted as a key selling point that attracted additional enterprise clients.'
  },
  {
    company: 'EverCharge',
    title: 'Notification Platform',
    description:
      'Full-stack SMS and email notification system integrating with charger hardware and payment vendors.',
    impact: 'Deployed for both external customers and internal operations.'
  },
  {
    company: 'EverCharge',
    title: 'CES Website Rebuild',
    description:
      'Rebuilt the company website with full mobile support in four days ahead of CES on short notice.',
    impact: 'Helped land new enterprise clients at the event.'
  },
  {
    company: 'Volta Charging',
    title: 'Mobile Reliability Turnaround',
    description:
      'Led reliability and UX work across the consumer mobile app in partnership with design and product.',
    impact:
      'Drove crash-free sessions to 99.86% and store rating from ~2.1 → ~4.9.'
  }
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: 'Languages & Frontend',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'SQL',
      'React',
      'React Native',
      'HTML',
      'CSS'
    ]
  },
  {
    label: 'Backend & DevOps',
    items: [
      'REST',
      'Microservices',
      'PostgreSQL',
      'DynamoDB',
      'Docker',
      'GitHub Actions'
    ]
  },
  {
    label: 'AWS',
    items: [
      'Lambda',
      'API Gateway',
      'S3',
      'RDS',
      'EC2',
      'DynamoDB',
      'SQS',
      'SNS',
      'SES',
      'Cognito',
      'Step Functions',
      'KMS',
      'CloudWatch',
      'CloudFormation',
      'IAM',
      'Amplify'
    ]
  }
];

export const education = [
  {
    period: '2026 — Present',
    school: 'AWS AI & ML Scholars Program',
    detail: 'AI Programmer Track'
  },
  {
    period: '',
    school: 'University of California, Berkeley',
    detail: 'B.A. Business Administration & B.A. Economics'
  }
];
