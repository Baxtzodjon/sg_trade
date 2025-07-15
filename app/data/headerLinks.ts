export interface HeaderLink {
  href: string;
  icon?: string;
  label: string;
  color?: string;
}

export const navLinks: HeaderLink[] = [
  { href: "/import", icon: "/icons/catalog.png", label: "Import/Export" },
  { href: "/about", icon: "/icons/about_us.png", label: "About Us" },
  { href: "/news", icon: "/icons/news.png", label: "News" },
  { href: "/contact", icon: "/icons/contacts.png", label: "Contacts" },
  { href: "/catalog", icon: "/icons/imp_exp.png", label: "Catalog" },
];

export const mobileNavLinks: HeaderLink[] = [
  { href: "/contact", icon: "/icons/contacts.png", label: "Contacts", color: "#04C1C1" },
  { href: "/about", icon: "/icons/about_us.png", label: "About Us", color: "#04C1C1" },
  { href: "/import", icon: "/icons/imp_exp.png", label: "Import/Export", color: "#04C1C1" },
  { href: "/news", icon: "/icons/news.png", label: "News", color: "#04C1C1" },
];

export const categoryLinks: HeaderLink[] = [
  { href: "/catalog", icon: "/icons/catalog.png", label: "Catalog" },
  { href: "/beverages", label: "Beverages" },
  { href: "/confectionary", label: "Confectionary" },
  { href: "/alhocol", label: "Alcohol" },
];