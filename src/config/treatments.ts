export interface Treatment {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  body: string;
  bullets: string[];
  icon: string;
}

export const treatments: Treatment[] = [
  {
    slug: 'early-treatment',
    title: 'Early Treatment',
    eyebrow: 'Children & teens',
    summary:
      'Guiding growth so developing smiles have room, function, and confidence.',
    body: 'The American Association of Orthodontists recommends an evaluation by age 7. Early treatment can intercept crowding, crossbites, and habits while the jaws are still growing — often making later treatment shorter and simpler.',
    bullets: [
      'Evaluations starting around age 7',
      'Invisalign First and growth-guidance appliances',
      'A gentler path when later treatment is still needed',
    ],
    icon: 'lucide:baby',
  },
  {
    slug: 'adult-treatment',
    title: 'Adult Treatment',
    eyebrow: 'Teens & adults',
    summary: 'Discreet braces and clear aligners that fit work, family, and life.',
    body: 'It is never too late for a healthy, confident smile. Adults at Hawaiian Smiles choose Invisalign, ceramic options, or self-ligating braces — with appointments scheduled around a busy week.',
    bullets: [
      'Clear aligners and discreet braces',
      'Plans that respect work and family schedules',
      'Touch-up treatment if a retainer was lost years ago',
    ],
    icon: 'lucide:user',
  },
  {
    slug: 'airway',
    title: 'Early Treatment & Airway Development',
    eyebrow: 'Growing smiles',
    summary: 'Orthodontics that supports room to grow, breathe, and thrive.',
    body: 'Early orthodontic care can do more than straighten teeth. Expanding narrow arches and guiding jaw growth can support a healthier airway while we set up a stable, attractive smile.',
    bullets: [
      'Growth-focused plans for children',
      'Coordination with your child’s dentist or physician when needed',
      'A foundation for easier treatment later',
    ],
    icon: 'lucide:wind',
  },
  {
    slug: 'invisalign',
    title: 'Invisalign',
    eyebrow: 'Clear aligners',
    summary: 'Invisalign for adults, teens, and growing children — planned in 3D.',
    body: 'The Invisalign system uses a 3D model of your mouth to design a series of clear trays that move teeth in small, planned steps. Swap trays every week or two. We offer Invisalign for adults, Invisalign Teen, and Invisalign First.',
    bullets: [
      'Adult, Teen, and First (growing kids)',
      'Nearly invisible trays you can remove to eat and brush',
      'Diamond Provider experience with 3D treatment planning',
    ],
    icon: 'lucide:sparkles',
  },
  {
    slug: 'braces',
    title: 'Braces',
    eyebrow: 'Self-ligating',
    summary: 'Pitts 21 self-ligating braces for a shorter, more comfortable treatment.',
    body: 'High-tech Pitts 21 self-ligating brackets skip the elastic ties that collect plaque and add friction. That means a more comfortable experience and, for many patients, a shorter treatment than traditional braces.',
    bullets: [
      'Self-ligating Pitts 21 brackets',
      'Metal and more discreet options',
      'Shorter appointments and easier hygiene',
    ],
    icon: 'lucide:gem',
  },
  {
    slug: 'retention',
    title: 'Retention',
    eyebrow: 'After treatment',
    summary: 'Retainers that protect the smile you just finished working for.',
    body: 'Teeth remember their old positions. After braces or Invisalign, retainers keep your result stable. We will fit you with the right retainer and show you how to wear and care for it.',
    bullets: [
      'Custom retainers after braces or aligners',
      'Clear instructions for nights-only wear',
      'Replacement retainers if one is lost or worn out',
    ],
    icon: 'lucide:shield-check',
  },
  {
    slug: 'emergency',
    title: 'Emergency Care',
    eyebrow: 'When it cannot wait',
    summary: 'Help for poking wires, loose brackets, and after-hours discomfort.',
    body: 'Most orthodontic “emergencies” can be made comfortable until we see you. For pain, swelling, or bleeding from trauma after hours, text a photo to (808) 247-6039. Scheduling requests are not taken on that line.',
    bullets: [
      'Same-week help for poking wires and loose brackets',
      'After-hours: text (808) 247-6039 for trauma',
      'Wax and at-home tips until your visit',
    ],
    icon: 'lucide:life-buoy',
  },
];

export const treatmentServices = treatments.map((treatment) => treatment.title);
