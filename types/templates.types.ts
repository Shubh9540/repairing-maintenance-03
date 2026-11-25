export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: LinkItem[];
  contactButton: LinkItem;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroData {
  eyebrow: string;
  titleStart: string;
  titleLine1?: string;
  titleLine2?: string;
  titleAccent: string;
  titleEnd?: string;
  description: string;
  primaryButton?: LinkItem;
  secondaryButton?: LinkItem;
  backgroundImage: string;
  imageAlt?: string;
  experienceHighlight?: string;
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutImageItem {
  src: string;
  alt: string;
}

export interface AboutUsData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  description: string;
  circuitImage: AboutImageItem;
  technicianImage: AboutImageItem;
  screenImage: AboutImageItem;
  missionCard: {
    label: string;
    quote: string;
  };
}

export interface AboutUsProps {
  data?: AboutUsData;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  url: string;
}

export interface ServicesData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  services: ServiceItem[];
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  imageAlt: string;
}

export interface TestimonialsData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface ContactData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  subtitle: string;
  callLabel: string;
  phones: string[];
  emailLabel: string;
  emails: string[];
  formTitle: string;
  nameLabel: string;
  phoneLabel: string;
  emailFieldLabel: string;
  dateLabel: string;
  deviceTypeLabel: string;
  deviceOptions: string[];
  serviceTypeLabel: string;
  serviceOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  successMessage: string;
}

export interface ContactProps {
  data?: ContactData;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  icon: 'technician' | 'clock' | 'shield';
  image: string;
  imageAlt: string;
}

export interface WhyChooseUsData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd?: string;
  subtitle: string;
  items: WhyChooseUsItem[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface SocialLink extends LinkItem {
  icon: string;
  ariaLabel: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  description: string;
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  usefulLinksTitle: string;
  usefulLinks: LinkItem[];
  contactTitle: string;
  address: string;
  phone: string;
  email: string;
  copyrightText: string;
  socialLinks: SocialLink[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface SiteTheme {
  fontFamily: string;
}

export interface RepairingSections {
  Header: { variants: { RepairingHeader2: HeaderData } };
  Hero: { variants: { RepairingHero2: HeroData } };
  AboutUs: { variants: { RepairingAboutUs2: AboutUsData } };
  Services: { variants: { RepairingServices2: ServicesData } };
  WhyChooseUs: { variants: { RepairingWhyChooseUs2: WhyChooseUsData } };
  Testimonials: { variants: { RepairingTestimonials2: TestimonialsData } };
  Contact: { variants: { RepairingContact2: ContactData } };
}

export interface PageComponentItem {
  key: string;
  component: string;
}

export interface RepairingTemplateData {
  common: {
    theme: SiteTheme;
    Footer: FooterData;
  };
  categories: {
    Repairing: {
      sections: RepairingSections;
    };
  };
  pages: {
    home: {
      components: PageComponentItem[];
    };
  };
}
