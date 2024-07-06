// import { type IconComponent, Icons } from "@utaka/ui/icons";

import { Github, Linkedin, Twitter } from "lucide-react";

export const siteConfig = {
  name: "Fellipe Utaka",
  url: "https://fellipeutaka.vercel.app",
  description: "Fellipe Utaka's personal website",
  keywords:
    "Fellipe Utaka, Fellipe, Utaka, Software Engineer, Software Developer, Developer, Engineer, Frontend Engineer, Frontend Developer, Frontend, Front-end, Front end, Front, Frontend Development, Frontend Engineering, Frontend Developer",
  links: {
    twitter: "https://twitter.com/fellipeutaka",
    github: "https://github.com/fellipeutaka",
    linkedin: "https://www.linkedin.com/in/fellipeutaka",
    devTo: "https://dev.to/fellipeutaka",
    codepen: "https://codepen.io/fellipeutaka",
    contra:
      "https://contra.com/fellipeutaka?utm_campaign=HireMeOnContra&utm_medium=1c519af6-f220-41f2-9c11-4e491e48e3b2",
  },
  email: "fellipeutaka@gmail.com",
  repositoryName: "website",
};

export const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#experience", label: "Experience" },
  { href: "/about", label: "About" },
  // { href: "/contributions", label: "Contributions" },
  // { href: "/contact", label: "Contact" },
] satisfies {
  href: string;
  label: string;
}[];

export const navZIndex = 9999;

export const socialLinks: {
  label: string;
  icon: IconComponent;
  href: string;
}[] = [
  {
    label: "GitHub",
    icon: Github,
    href: siteConfig.links.github,
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: siteConfig.links.twitter,
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: siteConfig.links.linkedin,
  },
];