import type { Metadata } from 'next';
import { Social, Project, Link } from './app/types';
import DribbbleIconIcon from '@iconify-react/logos/dribbble-icon';
import DailydevIconIcon from '@iconify-react/logos/dailydev-icon';
import GithubIcon from '@iconify-react/logos/github-icon';
import LinkedinIcon from '@iconify-react/logos/linkedin-icon';
import XIcon from '@iconify-react/logos/x';

export const metadata: Metadata = {
  title: {
    default: 'Neeraj — SaaS Founder & Software Engineer',
    template: '%s | Neeraj',
  },

  description:
    'Portfolio of Neeraj — building modern SaaS products, AI-powered tools, and scalable digital experiences for developers and startups.',

  keywords: [
    'Neeraj',
    'Software Engineer',
    'SaaS Founder',
    'Full Stack Developer',
    'AI Engineer',
    'Next.js Developer',
    'TypeScript',
    'React',
    'Developer Portfolio',
    'Web Development',
    'Startup Builder',
  ],

  authors: [{ name: 'Neeraj' }],
  creator: 'Neeraj',
  publisher: 'Neeraj',

  metadataBase: new URL('https://author.cutecode.app'),

  robots: {
    index: true,
    follow: true,
  },
};

export const meta = {
  title: 'Neeraj — SaaS Founder & Software Engineer',
  description:
    'Building AI-powered SaaS products, developer tools, and scalable digital experiences.',
};
export const profile = {
  name: 'I am',
  nameItalic: 'Neeraj',
  tagline: 'SaaS Founder • Software Engineer • AI Builder',
  bio: 'Building modern AI-powered products and scalable digital experiences. Passionate about SaaS, automation, and turning ideas into impactful products.',
  status: 'Open to opportunities',
  avatar: null,
  avatarInitials: 'N',
  copyright: 'Built with love by Neeraj',
};

export const socials: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/simpleneeraj',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/simpleneeraj',
    icon: LinkedinIcon,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/iamsimpleneeraj',
    icon: XIcon,
  },
  // { label: 'Email', href: 'mailto:you@example.com', icon: 'email' },
];

export const projects: Project[] = [
  {
    tag: 'Web App',
    title: 'CuteCode',
    description:
      'Turn your code snippets into beautiful, shareable visuals for social media, documentation, blogs, and presentations.',
    href: 'https://www.cutecode.app',
    year: '2026',
  },
  // {
  //   tag: 'Design',
  //   title: 'Project Two',
  //   description:
  //     'Another project showcasing your skills and your creative process in action.',
  //   href: 'https://example.com',
  //   year: '2024',
  // },
  // {
  //   tag: 'Open Source',
  //   title: 'Project Three',
  //   description:
  //     'An open source tool used by developers worldwide. Contributions welcome.',
  //   href: 'https://github.com',
  //   year: '2023',
  // },
  // {
  //   tag: 'Mobile',
  //   title: 'Project Four',
  //   description:
  //     'A mobile experience built with care, attention to detail, and love.',
  //   href: 'https://example.com',
  //   year: '2023',
  // },
];

export const links: Link[] = [
  {
    icon: DailydevIconIcon,
    title: 'Blog',
    subtitle: 'Read my writing on design & tech',
    href: 'https://app.daily.dev/simpleneeraj',
  },
  {
    icon: DribbbleIconIcon,
    title: 'Dribbble',
    subtitle: 'Visual work & design explorations',
    href: 'https://dribbble.com/simpleneeraj',
  },
  // {
  //   emoji: '📄',
  //   title: 'Resume',
  //   subtitle: 'Download my latest CV',
  //   href: '/resume.pdf',
  // },
];
