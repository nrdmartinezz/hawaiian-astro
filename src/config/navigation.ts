/**
 * One nav tree, rendered two ways. `Header` reads it for the simple desktop
 * nav today; `MegaMenu` and `MobileNav` read the same tree in Phase 4, so the
 * upgrade is additive rather than a rewrite.
 */

import { invisalignAudiences, invisalignPath } from './invisalign';
import { locations } from './locations';
import { patientFormLinks, patientForms } from './patientForms';
import { treatments } from './treatments';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** astro-icon name, e.g. 'lucide:wrench'. */
  icon?: string;
  /** Suggested filename when the link downloads a file. */
  download?: string;
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

/** Short enough to stay on one line beside the icon in a mega column. */
const treatmentNavDescriptions: Record<string, string> = {
  'early-treatment': 'First visit by age 7.',
  'adult-treatment': 'Braces or clear aligners.',
  airway: 'Jaws and breathing.',
  braces: 'A door, not elastic ties.',
  emergency: 'When to call the office.',
  retainers: 'Keep the new smile.',
  'teeth-whitening': 'In-office and take-home.',
};

const treatmentLinks: NavLink[] = treatments.map((treatment) => ({
  label: treatment.title,
  href: `/treatments/${treatment.slug}/`,
  description: treatmentNavDescriptions[treatment.slug] ?? treatment.summary,
  icon: treatment.icon,
}));

const ageTreatments = treatmentLinks.filter((link) =>
  ['early-treatment', 'adult-treatment', 'airway'].some((slug) => link.href.includes(slug)),
);
const applianceTreatments = treatmentLinks.filter(
  (link) =>
    !['early-treatment', 'adult-treatment', 'airway', 'invisalign'].some((slug) =>
      link.href.includes(slug),
    ),
);

const invisalignLinks: NavLink[] = [
  {
    label: 'Invisalign',
    href: invisalignPath(),
    description: 'How clear aligners work.',
    icon: 'lucide:sparkles',
  },
  ...invisalignAudiences.map((audience) => ({
    label: audience.title,
    href: invisalignPath(audience.slug),
    description:
      audience.slug === 'adult'
        ? 'Fits work and photos.'
        : audience.slug === 'teen'
          ? 'Hard to see at school.'
          : 'Ages 6 to 10.',
    icon: audience.icon,
  })),
];

const officeLinks: NavLink[] = locations.map((location) => ({
  label: location.shortName,
  href: `/locations/${location.slug}/`,
}));

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
          { heading: 'Invisalign', links: invisalignLinks },
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
      label: 'Locations',
      href: '/locations/',
      panel: {
        kind: 'links',
        links: officeLinks,
      },
    },
    {
      label: 'About',
      href: '/about/',
      panel: {
        kind: 'links',
        links: [
          { label: 'Our Story', href: '/about/' },
          { label: 'Why Choose Us', href: '/why-choose-us/' },
          { label: 'Meet the Doctors', href: '/about/doctors/' },
          { label: 'Meet the Staff', href: '/about/staff/' },
          { label: 'Financial Information', href: '/about/financial/' },
        ],
      },
    },
    {
      label: 'Patients',
      href: '/patients/',
      panel: {
        kind: 'mega',
        columns: [
          {
            heading: 'For patients',
            links: [
              {
                label: 'Your First Visit',
                href: '/patients/first-visit/',
                description: 'What to expect.',
                icon: 'lucide:calendar-check',
              },
              {
                label: 'Registration Forms',
                href: '/patients/forms/',
                description: 'Complete before you arrive.',
                icon: 'lucide:clipboard-pen',
              },
              {
                label: 'Referrals',
                href: '/patients/referrals/',
                description: 'Send a neighbor our way.',
                icon: 'lucide:heart-handshake',
              },
              {
                label: 'FAQ',
                href: '/faq/',
                description: 'Treatment, visits, and cost.',
                icon: 'lucide:circle-help',
              },
              {
                label: 'Blog',
                href: '/blog/',
                description: 'Braces and aligner tips.',
                icon: 'lucide:newspaper',
              },
            ],
          },
          { heading: 'New-patient forms', links: patientFormLinks() },
        ],
        featured: {
          title: 'Complete them before you arrive',
          body: 'Email the matching PDF before your appointment.',
          href: '/patients/forms/',
          cta: 'Registration forms',
        },
      },
    },
    { label: 'Contact', href: '/contact/' },
  ],

  cta: { label: 'Book Now', href: '/appointment/' },

  footer: [
    {
      heading: 'Navigation',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Treatments', href: '/treatments/' },
        { label: 'Invisalign®', href: '/treatments/invisalign/' },
        { label: 'Why Choose Us', href: '/why-choose-us/' },
        { label: 'About', href: '/about/' },
        { label: 'Blog', href: '/blog/' },
        { label: 'Contact Us', href: '/contact/' },
      ],
    },
    {
      heading: 'For Patients',
      links: [
        { label: 'Book Appointment', href: '/appointment/' },
        { label: 'Virtual Consultation', href: '/appointment/' },
        { label: 'Registration Forms', href: '/patients/forms/' },
        ...patientForms.map((form) => ({
          label: form.ctaLabel,
          href: form.href,
          download: form.download,
        })),
        { label: 'FAQ', href: '/faq/' },
        { label: 'Referrals', href: '/patients/referrals/' },
        { label: 'Privacy Policy', href: '/privacy/' },
      ],
    },
  ],

  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Policies', href: '/policies/' },
  ],
};
