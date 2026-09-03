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
    { label: 'Home', href: '/' },
    {
      label: 'Treatments',
      href: '/treatments/',
      panel: {
        kind: 'mega',
        columns: [
          {
            heading: 'For every age',
            links: [
              {
                label: 'Early Treatment',
                href: '/treatments/early-treatment/',
                description: 'Guiding growth for children and teens.',
                icon: 'lucide:smile',
              },
              {
                label: 'Adult Treatment',
                href: '/treatments/adult-treatment/',
                description: 'Discreet options that fit a busy life.',
                icon: 'lucide:user',
              },
            ],
          },
          {
            heading: 'Appliances',
            links: [
              {
                label: 'Invisalign',
                href: '/treatments/invisalign/',
                description: 'Clear aligners planned in 3D.',
                icon: 'lucide:sparkles',
              },
              {
                label: 'Braces',
                href: '/treatments/braces/',
                description: 'Self-ligating brackets for a shorter, more comfortable treatment.',
                icon: 'lucide:gem',
              },
              {
                label: 'Retention',
                href: '/treatments/retention/',
                description: 'Keep your new smile in place.',
                icon: 'lucide:shield-check',
              },
              {
                label: 'Emergency Care',
                href: '/treatments/emergency/',
                description: 'Help when a wire or bracket cannot wait.',
                icon: 'lucide:life-buoy',
              },
            ],
          },
        ],
        featured: {
          title: 'Not sure where to start?',
          body: 'Schedule a complimentary consultation and we will walk you through the options.',
          href: '/contact/',
          cta: 'Request an appointment',
        },
      },
    },
    {
      label: 'Locations',
      href: '/locations/',
      panel: {
        kind: 'links',
        links: [
          { label: 'Kaneohe', href: '/locations/kaneohe/' },
          { label: 'Kailua-Kona', href: '/locations/kailua-kona/' },
          { label: 'Kamuela', href: '/locations/kamuela/' },
          { label: 'Hilo', href: '/locations/hilo/' },
        ],
      },
    },
    {
      label: 'About',
      panel: {
        kind: 'links',
        links: [
          { label: 'Our Story', href: '/about/' },
          { label: 'Meet the Doctors', href: '/about/doctors/' },
        ],
      },
    },
    { label: 'Contact', href: '/contact/' },
  ],

  cta: { label: 'Request Appointment', href: '/contact/' },

  footer: [
    {
      heading: 'Treatments',
      links: [
        { label: 'Early Treatment', href: '/treatments/early-treatment/' },
        { label: 'Adult Treatment', href: '/treatments/adult-treatment/' },
        { label: 'Invisalign', href: '/treatments/invisalign/' },
        { label: 'Braces', href: '/treatments/braces/' },
      ],
    },
    {
      heading: 'Offices',
      links: [
        { label: 'Kaneohe', href: '/locations/kaneohe/' },
        { label: 'Kailua-Kona', href: '/locations/kailua-kona/' },
        { label: 'Kamuela', href: '/locations/kamuela/' },
        { label: 'Hilo', href: '/locations/hilo/' },
      ],
    },
    {
      heading: 'Practice',
      links: [
        { label: 'About', href: '/about/' },
        { label: 'Meet the Doctors', href: '/about/doctors/' },
        { label: 'Contact', href: '/contact/' },
      ],
    },
  ],

  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Policies', href: '/policies/' },
  ],
};
