export interface PracticeLocation {
  slug: string;
  name: string;
  shortName: string;
  island: string;
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  mapsUrl: string;
  description: string;
  body: string;
}

export const locations: PracticeLocation[] = [
  {
    slug: 'kaneohe',
    name: 'Kaneohe Office',
    shortName: 'Kaneohe',
    island: 'Oʻahu',
    street: '45-939 Kamehameha Hwy, Suite 103',
    locality: 'Kaneohe',
    region: 'HI',
    postalCode: '96744',
    mapsUrl: 'https://g.page/hawaiiansmilesortho-kaneohe?gm',
    description:
      'Orthodontist in Kaneohe offering braces, Invisalign, and early treatment for children, teens, and adults.',
    body: 'Our Kaneohe office is the Windward Oʻahu home of Hawaiian Smiles. Call or text to schedule a complimentary consultation for braces, Invisalign, or early treatment.',
  },
  {
    slug: 'kailua-kona',
    name: 'Kailua-Kona Office',
    shortName: 'Kailua-Kona',
    island: 'Hawaiʻi Island',
    street: '76-6225 Kuakini Hwy, Suite D-101',
    locality: 'Kailua-Kona',
    region: 'HI',
    postalCode: '96740',
    mapsUrl: 'https://g.page/hawaiiansmilesortho-kailua-kona?gm',
    description:
      'Orthodontist in Kailua-Kona offering braces, Invisalign, and family-friendly care on the Big Island.',
    body: 'Our Kailua-Kona office serves West Hawaiʻi with the same technology and aloha as Kaneohe. Longer appointments, including Invisalign delivery and braces bonding, are scheduled here.',
  },
  {
    slug: 'kamuela',
    name: 'Kamuela Office',
    shortName: 'Kamuela',
    island: 'Hawaiʻi Island',
    street: '65-1230 Mamalahoa Hwy, Suite A-21',
    locality: 'Kamuela',
    region: 'HI',
    postalCode: '96743',
    mapsUrl: 'https://g.page/hawaiiansmilesortho-kamuela?gm',
    description:
      'Orthodontist in Kamuela (Waimea) offering convenient visits for braces and aligner checkups.',
    body: 'Our Kamuela office keeps orthodontic care close to home in Waimea. Appointments longer than 30 minutes — including Invisalign delivery and braces bonding — are completed at our Kona office.',
  },
  {
    slug: 'hilo',
    name: 'Hilo Office',
    shortName: 'Hilo',
    island: 'Hawaiʻi Island',
    street: '280 Ponahawai St, Suite 101',
    locality: 'Hilo',
    region: 'HI',
    postalCode: '96720',
    mapsUrl: 'https://maps.google.com/?q=280+Ponahawai+St+101+Hilo+HI+96720',
    description:
      'Orthodontist in Hilo offering braces, Invisalign, and follow-up care on the east side of Hawaiʻi Island.',
    body: 'Our Hilo office brings Hawaiian Smiles to East Hawaiʻi so families do not have to drive to Kona for every visit.',
  },
];

export const locationAddress = (location: PracticeLocation) =>
  `${location.street}, ${location.locality}, ${location.region} ${location.postalCode}`;
