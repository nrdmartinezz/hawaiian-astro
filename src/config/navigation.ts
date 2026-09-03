/**
 * One nav tree, rendered two ways. `Header` reads it for the simple desktop
 * nav today; `MegaMenu` and `MobileNav` read the same tree in Phase 4, so the
 * upgrade is additive rather than a rewrite.
 */

import { locations } from './locations';
import { treatmentNav } from './treatments';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** astro-icon name, e.g. 'lucide:wrench'. */
  icon?: string;
}

export interface MegaColumn {
  heading?: string;
  links: NavLink[];
}

export interface MegaPanel {
  kind: 'mega';
  columns: MegaColumn[];
  featured?: {
    title: string;
    body: string;
    href: string;
    cta: string;
  };
}

export interface LinkListPanel {
  kind: 'links';
  links: NavLink[];
}

export interface NavItem {
  label: string;
  /** Present when the top-level item is itself a destination. */
  href?: string;
  panel?: MegaPanel | LinkListPanel;
}

export interface NavigationConfig {
  primary: NavItem[];
  /** Right-hand call to action in the header. */
  cta?: { label: string; href: string };
  footer: { heading: string; links: NavLink[] }[];
  legal: NavLink[];
}

const ageTreatments = treatmentNav.filter((link) =>
  ['early-treatment', 'adult-treatment'].some((slug) => link.href.includes(slug)),
);
const applianceTreatments = treatmentNav.filter(
  (link) => !['early-treatment', 'adult-treatment'].some((slug) => link.href.includes(slug)),
);

/**
 * One nav tree, rendered two ways. `Header` reads it for the simple desktop
 * nav today; `MegaMenu` and `MobileNav` read the same tree in Phase 4, so the
 * upgrade is additive rather than a rewrite.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** astro-icon name, e.g. 'lucide:wrench'. */
  icon?: string;
}

export interface MegaColumn {
  heading?: string;
  links: NavLink[];
}

export interface MegaPanel {
  kind: 'mega';
  columns: MegaColumn[];
  featured?: {
    title: string;
    body: string;
    href: string;
    cta: string;
  };
}

export interface LinkListPanel {
  kind: 'links';
  links: NavLink[];
}

export interface NavItem {
  label: string;
  /** Present when the top-level item is itself a destination. */
  href?: string;
  panel?: MegaPanel | LinkListPanel;
}

export interface NavigationConfig {
  primary: NavItem[];
  /** Right-hand call to action in the header. */
  cta?: { label: string; href: string };
  footer: { heading: string; links: NavLink[] }[];
  legal: NavLink[];
}

export const navigation: NavigationConfig = {
  primary: [
    {
      label: 'Treatments',
      href: '/treatments/',
      panel: {
        kind: 'mega',
        columns: [
          { heading: 'For every age', links: ageTreatments },
          { heading: 'Appliances', links: applianceTreatments },
        ],
        featured: {
          title: 'Not sure where to start?',
          body: 'Schedule a complimentary consultation and we will walk you through the options.',
          href: '/appointment/',
          cta: 'Request an appointment',
        },
      },
    },
    {
      label: 'About',
      href: '/about/',
      panel: {
        kind: 'links',
        links: [
          { label: 'Our Story', href: '/about/' },
          { label: 'Why Choose Us', href: '/about/why-choose-us/' },
          { label: 'Meet the Doctors', href: '/about/doctors/' },
          { label: 'Meet the Staff', href: '/about/staff/' },
          { label: 'Financial Information', href: '/about/financial/' },
        ],
      },
    },
    {
      label: 'Patients',
      panel: {
        kind: 'links',
        links: [
          { label: 'Your First Visit', href: '/patients/first-visit/' },
          { label: 'FAQ', href: '/patients/faq/' },
          { label: 'Common Problems', href: '/patients/common-problems/' },
          { label: 'Registration Forms', href: '/patients/registration/' },
          { label: 'Virtual Consultation', href: '/virtual-consultation/' },
          { label: 'Refer a Patient', href: '/referrals/' },
        ],
      },
    },
    {
      label: 'Locations',
      href: '/locations/',
      panel: {
        kind: 'links',
        links: locations.map((office) => ({
          label: office.name,
          href: `/locations/${office.slug}/`,
        })),
      },
    },
    { label: 'Contact', href: '/contact/' },
  ],

  cta: { label: 'Request Appointment', href: '/appointment/' },

  footer: [
    {
      heading: 'Treatments',
      links: treatmentNav.map(({ label, href }) => ({ label, href })),
    },
    {
      heading: 'Offices',
      links: locations.map((office) => ({
        label: office.name,
        href: `/locations/${office.slug}/`,
      })),
    },
    {
      heading: 'Patients',
      links: [
        { label: 'Your First Visit', href: '/patients/first-visit/' },
        { label: 'Request Appointment', href: '/appointment/' },
        { label: 'Virtual Consultation', href: '/virtual-consultation/' },
        { label: 'FAQ', href: '/patients/faq/' },
        { label: 'Contact', href: '/contact/' },
      ],
    },
  ],

  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Policies', href: '/policies/' },
  ],
};
