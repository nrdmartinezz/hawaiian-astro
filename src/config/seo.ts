/**
 * Search titles and descriptions. Card copy and on-page headings stay in the
 * page and treatment configs; these strings are only for the document head.
 * Titles are the unique part. BaseLayout adds "| Hawaiian Smiles Orthodontics"
 * except where `titleExact` is set.
 */

export interface PageSeo {
  title: string;
  description: string;
  titleExact?: boolean;
}

export const pageSeo = {
  home: {
    title: 'Orthodontist in Kaneohe, Kona, Kamuela & Hilo, HI',
    description:
      'Braces, Invisalign, and early treatment for children, teens, and adults at Hawaiian Smiles Orthodontics. Kaneohe, Kailua-Kona, Kamuela, and Hilo. Call (808) 247-6039.',
    titleExact: true,
  },
  locations: {
    title: 'Orthodontist Offices in Hawaiʻi',
    description:
      'Hawaiian Smiles Orthodontics has offices in Kaneohe, Kailua-Kona, Kamuela, and Hilo. Braces, Invisalign, and early treatment. Call or text (808) 247-6039.',
  },
  treatments: {
    title: 'Orthodontic Treatment in Hawaiʻi',
    description:
      'Braces, Invisalign, early treatment, airway care, retainers, and teeth whitening at Hawaiian Smiles. Offices in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  invisalign: {
    title: 'Invisalign in Hawaiʻi',
    description:
      'Clear Invisalign aligners for adults, teens, and children from a Diamond provider. Hawaiian Smiles in Kaneohe, Kailua-Kona, Kamuela, and Hilo.',
  },
  faq: {
    title: 'Orthodontic Treatment FAQ',
    description:
      'Answers about braces, Invisalign, early treatment, visits, insurance, and payment plans at Hawaiian Smiles Orthodontics. Call (808) 247-6039.',
  },
  about: {
    title: 'About Our Practice',
    description:
      'Hawaiian Smiles Orthodontics continues a decades-long Kaneohe legacy with Dr. Satya Nayak, serving Kona, Kamuela, and Hilo too.',
  },
  doctors: {
    title: 'Meet Our Orthodontists',
    description:
      'Meet Dr. Satya Nayak, Dr. Alyssa Shaikh, and Dr. Nicole Fernandez at Hawaiian Smiles Orthodontics in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  staff: {
    title: 'Meet Our Clinical Staff',
    description:
      'Meet the treatment coordinators, smile architects, and financial team at Hawaiian Smiles Orthodontics in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  financial: {
    title: 'Orthodontic Cost & Insurance',
    description:
      'Insurance, interest-free monthly plans, HSA and FSA, and sibling discounts at Hawaiian Smiles Orthodontics. Call (808) 247-6039.',
  },
  whyChooseUs: {
    title: 'Why Choose Our Practice',
    description:
      'Board-certified specialists, 0% monthly plans, Pitts 21 braces, and Diamond Invisalign care for families on Oʻahu and Hawaiʻi Island.',
  },
  contact: {
    title: 'Contact Our Orthodontist',
    description:
      'Call or text Hawaiian Smiles Orthodontics at (808) 247-6039. Complimentary consultations at offices in Kaneohe, Kailua-Kona, Kamuela, and Hilo.',
  },
  firstVisit: {
    title: 'Your First Orthodontic Visit',
    description:
      'What to expect at a complimentary orthodontic consultation with Hawaiian Smiles in Kaneohe, Kona, Kamuela, or Hilo. Call (808) 247-6039.',
  },
  forms: {
    title: 'New Patient Registration',
    description:
      'Adult and child new-patient forms for Hawaiian Smiles Orthodontics. Complete them before your visit in Kaneohe, Kona, Kamuela, or Hilo.',
  },
  referrals: {
    title: 'Refer a Patient to Us',
    description:
      'Refer a patient or a friend to Hawaiian Smiles Orthodontics. Offices in Kaneohe, Kailua-Kona, Kamuela, and Hilo. Call (808) 247-6039.',
  },
  appointment: {
    title: 'Request an Appointment',
    description:
      'Request a complimentary in-person or virtual consultation with Hawaiian Smiles Orthodontics in Kaneohe, Kona, Kamuela, or Hilo. Call (808) 247-6039.',
  },
  blog: {
    title: 'Orthodontic Tips & Guides',
    description:
      'Guides from Hawaiian Smiles on braces, Invisalign, early treatment, retainers, and life with a new smile in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  patients: {
    title: 'New & Current Patients',
    description:
      'First-visit tips, registration forms, and referrals for Hawaiian Smiles Orthodontics patients in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  policies: {
    title: 'Hours & Office Policies',
    description:
      'Office hours, cancellation rules, and new-patient policies at Hawaiian Smiles Orthodontics in Kaneohe, Kona, Kamuela, and Hilo. Call (808) 247-6039.',
  },
  privacy: {
    title: 'Privacy Policy',
    description:
      'How Hawaiian Smiles Orthodontics collects, uses, and protects personal information submitted on this website and shared with the practice.',
  },
} satisfies Record<string, PageSeo>;

export const treatmentSeo: Record<string, PageSeo> = {
  'early-treatment': {
    title: 'Early Orthodontic Treatment',
    description:
      'A first orthodontic visit by age 7. Hawaiian Smiles guides growing smiles in Kaneohe, Kailua-Kona, Kamuela, and Hilo. Call (808) 247-6039.',
  },
  'adult-treatment': {
    title: 'Adult Orthodontist in Hawaiʻi',
    description:
      'Braces and Invisalign for adults at Hawaiian Smiles Orthodontics. Offices in Kaneohe, Kailua-Kona, Kamuela, and Hilo. Call (808) 247-6039.',
  },
  airway: {
    title: 'Airway & Early Treatment',
    description:
      'Early orthodontic care that supports jaw growth and airway development for children at Hawaiian Smiles across Oʻahu and Hawaiʻi Island.',
  },
  braces: {
    title: 'Self-Ligating Braces in Hawaiʻi',
    description:
      'Pitts 21 self-ligating braces with less friction and shorter visits. Hawaiian Smiles in Kaneohe, Kailua-Kona, Kamuela, and Hilo.',
  },
  emergency: {
    title: 'Orthodontic Emergency Care',
    description:
      'A loose bracket, poking wire, or broken retainer? Call Hawaiian Smiles at (808) 247-6039. Offices in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  retainers: {
    title: 'Retainer Care After Braces',
    description:
      'Keep your new smile with retainers from Hawaiian Smiles. Care instructions and replacement visits in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  'teeth-whitening': {
    title: 'Teeth Whitening in Hawaiʻi',
    description:
      'In-office and take-home teeth whitening at Hawaiian Smiles Orthodontics. Kaneohe, Kailua-Kona, Kamuela, and Hilo. Call (808) 247-6039.',
  },
};

export const locationSeo: Record<string, PageSeo> = {
  kaneohe: {
    title: 'Orthodontist in Kaneohe',
    description:
      'Orthodontist in Kaneohe at 45-939 Kamehameha Hwy, Suite 103. Braces, Invisalign, and early treatment for the whole family. Call (808) 247-6039.',
  },
  'kailua-kona': {
    title: 'Orthodontist in Kailua-Kona',
    description:
      'Orthodontist in Kailua-Kona at 76-6225 Kuakini Hwy, Suite D-101. Braces and Invisalign for West Hawaiʻi families. Call (808) 247-6039.',
  },
  kamuela: {
    title: 'Orthodontist in Kamuela',
    description:
      'Orthodontist in Kamuela (Waimea) at 65-1230 Mamalahoa Hwy, Suite A-21. Braces and aligner visits close to home. Call (808) 247-6039.',
  },
  hilo: {
    title: 'Orthodontist in Hilo',
    description:
      'Orthodontist in Hilo at 280 Ponahawai St, Suite 101. Braces, Invisalign, and follow-up care on the east side of Hawaiʻi Island. Call (808) 247-6039.',
  },
};

export const invisalignSeo: Record<string, PageSeo> = {
  adult: {
    title: 'Invisalign for Adults',
    description:
      'Clear aligners for adults who want a straighter smile without metal braces. Hawaiian Smiles in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  teen: {
    title: 'Invisalign for Teens',
    description:
      'Nearly invisible Invisalign Teen aligners for school, sports, and photos. Hawaiian Smiles in Kaneohe, Kona, Kamuela, and Hilo.',
  },
  children: {
    title: 'Invisalign First for Kids',
    description:
      'Phase 1 Invisalign First for children about ages 6 to 10, including a clear expander. Hawaiian Smiles across Oʻahu and Hawaiʻi Island.',
  },
};
