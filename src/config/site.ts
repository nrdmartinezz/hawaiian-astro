/**
 * Per-project configuration. This and `navigation.ts` are the two files that
 * must be filled in for every new site. Blank optional values ship nothing —
 * an empty analytics ID means that vendor's script is never emitted.
 */

export type SchemaBusinessType =
  | 'LocalBusiness'
  | 'ProfessionalService'
  | 'HomeAndConstructionBusiness'
  | 'Plumber'
  | 'Electrician'
  | 'RoofingContractor'
  | 'GeneralContractor'
  | 'Dentist'
  | 'Physician'
  | 'Attorney'
  | 'AccountingService'
  | 'InsuranceAgency'
  | 'RealEstateAgent';

export interface SiteConfig {
  /** Absolute origin, no trailing slash. Must match `site` in astro.config.mjs. */
  url: string;
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  locale: string;

  business: {
    schemaType: SchemaBusinessType;
    phone: string;
    /** Digits only, E.164 — used for tel: and sms: links. */
    phoneHref: string;
    email: string;
    /** Display fax number. Omit to hide it from the contact bar. */
    fax?: string;
    address: {
      street: string;
      locality: string;
      region: string;
      postalCode: string;
      country: string;
    };
    /** Omit entirely for service-area businesses with no walk-in location. */
    geo?: { latitude: number; longitude: number };
    /** schema.org openingHours strings, e.g. 'Mo-Fr 08:00-17:00'. */
    hours: string[];
    priceRange?: string;
  };

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
    youtube?: string;
    tiktok?: string;
  };

  /** Absolute or site-relative path to the fallback Open Graph image. */
  defaultOgImage: string;

  /** Relative path to the PHP form handler. Blank disables all forms. */
  formEndpoint: string;

  /**
   * Google reCAPTCHA v3 site key (public). Blank skips the widget. The matching
   * secret is configured server-side in ~/private/site-mail.php.
   */
  recaptchaSiteKey: string;

  analytics: {
    ga4: string;
    gtm: string;
    metaPixel: string;
    bingUet: string;
    clarity: string;
  };

  verification: {
    google: string;
    bing: string;
    meta: string;
  };

  /** 'none' is correct for US-only clients. Switch to 'banner' only when required. */
  consent: 'none' | 'banner';
}

export const site: SiteConfig = {
  url: 'https://hawaiiansmilesortho.com',
  name: 'Hawaiian Smiles Orthodontics',
  legalName: 'Satyaprasad Nayak DMD MS Inc',
  tagline: 'Beautiful, healthy smiles across Hawaiʻi.',
  description:
    'Hawaiian Smiles Orthodontics provides braces, Invisalign, and early treatment for children, teens, and adults at offices in Kaneohe, Kailua-Kona, Kamuela, and Hilo. Voted Best Hawaii Dentist 2020–2025.',
  locale: 'en-US',

  business: {
    schemaType: 'Dentist',
    phone: '(808) 247-6039',
    phoneHref: '+18082476039',
    email: 'oahusc@hawaiiansmilesortho.com',
    fax: '(808) 247-3643',
    address: {
      street: '45-939 Kamehameha Hwy, Suite 103',
      locality: 'Kaneohe',
      region: 'HI',
      postalCode: '96744',
      country: 'US',
    },
    geo: { latitude: 21.4144536, longitude: -157.8000882 },
    hours: ['Mo-Fr 08:00-17:00'],
    priceRange: '$$',
  },

  social: {
    facebook: 'https://www.facebook.com/hawaiiansmilesorthodontics',
    instagram: 'https://www.instagram.com/hawaiiansmilesortho/',
  },

  defaultOgImage: '/og-default.png',

  formEndpoint: '/api/submit.php',
  recaptchaSiteKey: '',

  analytics: {
    ga4: '',
    gtm: '',
    metaPixel: '',
    bingUet: '',
    clarity: '',
  },

  verification: {
    google: '',
    bing: '',
    meta: '',
  },

  consent: 'none',
};

export const formattedAddress = [
  site.business.address.street,
  `${site.business.address.locality}, ${site.business.address.region} ${site.business.address.postalCode}`,
].join(', ');

/** No configured ID means the analytics bundle is never mounted at all. */
export const hasAnalytics = Object.values(site.analytics).some(Boolean);
