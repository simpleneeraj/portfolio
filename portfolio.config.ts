// ─────────────────────────────────────────────
//  portfolio.config.ts  ·  Edit everything here
// ─────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  nameItalic: "Name",        // this part renders in italic + accent color
  tagline: "Designer & Developer",
  bio: "I craft digital experiences — from ideas to pixels to code. Currently open to new opportunities and interesting collaborations.",
  status: "Open to opportunities", // set to "" to hide
  avatar: "",                // URL to image, or leave "" to show initials
  avatarInitials: "YN",
};

export const socials: Social[] = [
  { label: "GitHub",    href: "https://github.com/yourusername",          icon: "github"   },
  { label: "LinkedIn",  href: "https://linkedin.com/in/yourusername",     icon: "linkedin" },
  { label: "Twitter",   href: "https://twitter.com/yourusername",         icon: "twitter"  },
  { label: "Email",     href: "mailto:you@example.com",                   icon: "email"    },
];

export const projects: Project[] = [
  {
    tag: "Web App",
    title: "Project One",
    description: "A short description of what this project does and why it matters to the world.",
    href: "https://example.com",
    year: "2024",
  },
  {
    tag: "Design",
    title: "Project Two",
    description: "Another project showcasing your skills and your creative process in action.",
    href: "https://example.com",
    year: "2024",
  },
  {
    tag: "Open Source",
    title: "Project Three",
    description: "An open source tool used by developers worldwide. Contributions welcome.",
    href: "https://github.com",
    year: "2023",
  },
  {
    tag: "Mobile",
    title: "Project Four",
    description: "A mobile experience built with care, attention to detail, and love.",
    href: "https://example.com",
    year: "2023",
  },
];

export const links: Link[] = [
  {
    emoji: "📝",
    title: "Blog",
    subtitle: "Read my writing on design & tech",
    href: "https://example.com/blog",
  },
  {
    emoji: "🎨",
    title: "Dribbble",
    subtitle: "Visual work & design explorations",
    href: "https://dribbble.com",
  },
  {
    emoji: "📄",
    title: "Resume",
    subtitle: "Download my latest CV",
    href: "/resume.pdf",
  },
];

// ─── Types ───────────────────────────────────

export type SocialIcon = "github" | "linkedin" | "twitter" | "email";

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  href: string;
  year?: string;
}

export interface Link {
  emoji: string;
  title: string;
  subtitle: string;
  href: string;
}
