export interface TreatmentSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TreatmentFaq {
  question: string;
  answer: string;
}

export interface TreatmentPrice {
  name: string;
  price: string;
  cadence?: string;
  body?: string;
  features: string[];
  featured?: boolean;
}

export interface TreatmentLink {
  label: string;
  href: string;
}

export interface Treatment {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  /** Short heading beside the treatment photo. */
  leadTitle: string;
  body: string;
  bullets: string[];
  icon: string;
  sections?: TreatmentSection[];
  faqs?: TreatmentFaq[];
  pricing?: TreatmentPrice[];
  downloads?: TreatmentLink[];
}

export const treatments: Treatment[] = [
  {
    slug: 'early-treatment',
    title: 'Early Treatment',
    eyebrow: 'Children',
    summary: 'A first visit by age 7, so growing smiles are guided before problems get harder to treat.',
    leadTitle: 'The best time to start is early',
    body: 'There is no age limit for orthodontic treatment, and for children it is best to start as early as possible. The American Association of Orthodontists recommends a first visit no later than age 7.',
    bullets: [
      'Screenings by age 7, even if treatment can wait',
      'Palatal expansion while the jaw is still growing',
      'Help with thumb sucking, tongue thrust, and mouth breathing',
    ],
    icon: 'lucide:baby',
    sections: [
      {
        title: 'What an early visit actually does',
        paragraphs: [
          'An evaluation does not always mean treatment starts that day. It lets us watch dental development and catch problems before they become severe.',
          'Every child grows on their own timeline. Most see molars come in around age six. Along with other markers, that tells us whether there will be room for the permanent teeth. If something looks off, we recommend a plan.',
        ],
      },
      {
        title: 'Common problems in kids',
        paragraphs: [
          'The main corrective phase often starts between ages 9 and 14, once baby teeth are gone and permanent teeth have erupted. We still do not want to miss the years when the jaws are growing and easier to guide.',
          'A severe crossbite — upper teeth sitting behind the lower front teeth when the mouth closes — is one example. A palatal expander widens the upper jaw gradually while it is still developing. Waiting too long can take a simple orthodontic fix off the table and leave oral surgery as the alternative.',
          'Crowding happens when the jaws do not have enough room for the permanent teeth. An expander often creates that room. Extraction is sometimes needed, but it is not our first choice. We prefer to keep teeth whenever a healthy result is possible without removing them.',
          'Phase I care can also shorten braces in the teen years, and it can correct protruding teeth and severe underbites. That lowers the chance of uneven enamel wear, fractures, bite problems, and the confidence issues that come with them.',
        ],
      },
      {
        title: 'Habits that change how the jaws grow',
        paragraphs: [
          'Some habits interfere with dental development. We help children stop them so the teeth and jaws can work the way they should.',
          'Thumb or finger sucking is normal in early childhood and usually fades between ages 2 and 4. If it continues, it can push teeth apart, change jaw shape, open the bite, and affect speech. Tongue thrusting presses the tongue against the teeth and can move them the same way.',
          'Mouth breathing sends air straight to the lungs and can change how the tongue and facial muscles work. It can also change how the upper and lower jaws grow. A child may start mouth breathing because of a physical blockage, and it can stay as a habit if it is not addressed.',
        ],
        bullets: ['Persistent thumb sucking', 'Tongue thrusting', 'Mouth breathing'],
      },
    ],
    faqs: [
      {
        question: 'What is early orthodontic treatment?',
        answer:
          'It is care that starts before all of the permanent teeth (except wisdom teeth) are in. We guide development while a child still has a mix of baby and permanent teeth.',
      },
      {
        question: 'What is the best age to start?',
        answer:
          'Treatment can start as early as age 6. Many children are best assessed between 8 and 10, when baby teeth and permanent teeth are both present. For adults, age is not the limit — healthy teeth and gums are. Always start with an orthodontist before any plan.',
      },
      {
        question: 'Will braces come off early?',
        answer:
          'No. The goal is a bite and tooth alignment that hold. Taking appliances off before treatment is finished can let teeth move back.',
      },
      {
        question: 'Can we switch orthodontists during treatment?',
        answer:
          'Yes. If you move, or you would rather be seen somewhere else, tell us ahead of time and we will send your records. Choosing a practice you can stay with avoids interruptions.',
      },
      {
        question: 'When is early treatment necessary?',
        answer:
          'It can keep a problem from turning into a longer, harder treatment later. It also guides growth and can prevent speech or breathing difficulties. We will tell you plainly if your child needs it, or if watching and waiting is the right plan.',
      },
    ],
  },
  {
    slug: 'adult-treatment',
    title: 'Adult Treatment',
    eyebrow: 'Adults',
    summary: 'Healthy teeth can be straightened at any age — with braces or clear aligners that fit a busy week.',
    leadTitle: 'You are not too old for a better bite',
    body: 'Orthodontics is not just for teens. You can start as long as your teeth and gums are healthy. We treat adults with the same range of appliances we offer younger patients.',
    bullets: [
      'Metal, ceramic, self-ligating, and Invisalign options',
      'Fewer visits and shorter treatment than older brace systems',
      'A plan built around your goals, not a one-size appliance',
    ],
    icon: 'lucide:user',
    sections: [
      {
        title: 'What treatment can change',
        paragraphs: [
          'Teeth can shift as we age. Treatment is not limited by age, and it can improve how your smile looks and how your bite works at any stage of life. A better bite is also easier to keep clean.',
          'People come in to slow uneven wear, ease jaw discomfort, and correct crowding or spacing that has bothered them for years. Newer appliances have reduced soreness, spaced visits further apart, and shortened treatment for many patients. You are not limited to traditional metal braces.',
          'The first visit is an exam. We recommend a plan for your bite and your goals, and those plans differ from person to person. Bring questions about timing, cost, and how soon you can start.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What are the benefits of braces as an adult?',
        answer:
          'A more confident smile, lower risk of uneven wear and other oral-health problems, easier chewing, and in some cases better breathing and clearer speech.',
      },
      {
        question: 'What do adult braces cost?',
        answer:
          'Oral-B publishes broad national ranges as a starting point: metal braces about $3,000–$7,000, ceramic braces $4,000–$8,000, lingual braces $8,000–$10,000, and Invisalign $4,000–$7,400. Your fee depends on the case. Ask us about insurance and financing before you decide.',
      },
      {
        question: 'Which appliance is best for adults?',
        answer:
          'It depends on the bite and on what you want day to day — comfort and reliability, or something more discreet. We recommend the option that fits both.',
      },
      {
        question: 'Is there a best age to start?',
        answer:
          'No. Adults can have other oral-health issues to sort out first, but age itself does not rule treatment out. We will tell you if anything needs attention before you start.',
      },
    ],
  },
  {
    slug: 'airway',
    title: 'Airway Development',
    eyebrow: 'Growing smiles',
    summary: 'Early care that looks at the teeth, the jaws, and how a child breathes.',
    leadTitle: 'Straight teeth, and room to breathe',
    body: 'Many parents assume orthodontics is only about straight teeth. Early care often focuses on something just as important: how the jaws grow, and whether a child can breathe comfortably through the nose.',
    bullets: [
      'Phase 1 while the jaws are still growing, often ages 6–10',
      'Expansion and growth guidance before full braces or aligners',
      'Phase 2 later, once the permanent teeth are in',
    ],
    icon: 'lucide:wind',
    sections: [
      {
        title: 'How the jaws and the airway connect',
        paragraphs: [
          'When the jaws do not develop fully, the airway can be restricted. That may show up as mouth breathing, restless sleep, snoring, or trouble concentrating during the day. Children who cannot breathe comfortably through the nose often develop habits that change how the teeth and jaws grow.',
          'An early evaluation lets us see those patterns while a child is still growing. Guiding the jaws, widening the upper arch when it is narrow, and improving the bite can make more room for the tongue and the airway, and support healthier facial growth.',
        ],
      },
      {
        title: 'Phase 1 and Phase 2',
        paragraphs: [
          'Phase 1 usually begins between ages 6 and 10, while the jawbones are developing and baby teeth are giving way to permanent teeth. It does not always mean full braces. Often it is an appliance that widens the upper jaw, guides growth, or corrects a bite that is heading the wrong way. The aim is a better foundation: more airway space, easier nasal breathing, and fewer severe problems later.',
          'Phase 2 happens once most or all of the permanent teeth are in, typically in the teen years. It lines the teeth and the bite up precisely, usually with braces or clear aligners such as Invisalign. When Phase 1 has already handled growth, Phase 2 is often shorter and more stable.',
        ],
      },
      {
        title: 'Why we evaluate early',
        paragraphs: [
          'An early visit tells us whether a child would benefit from airway-focused care. The goal is healthy growth, comfortable breathing, and a balanced face — not only a straighter smile.',
        ],
      },
    ],
  },
  {
    slug: 'invisalign',
    title: 'Invisalign',
    eyebrow: 'Clear aligners',
    summary: 'Clear, comfortable, removable aligners for adults, teens, and growing children.',
    leadTitle: 'Treatment that stays out of the way',
    body: 'Invisalign uses a series of clear trays to improve the smile and the bite without a mouth full of metal.',
    bullets: [
      'Almost invisible, and removable to eat and brush',
      'Adult, Teen, and First for growing kids',
      'A 3D plan you can preview before you start',
    ],
    icon: 'lucide:sparkles',
  },
  {
    slug: 'braces',
    title: 'Self-Ligating Brackets',
    eyebrow: 'Pitts21',
    summary: 'Braces that hold the wire with a small door instead of elastic ties — less friction, easier cleaning, often a shorter treatment.',
    leadTitle: 'Less friction, more comfortable days',
    body: 'Self-ligating braces still use brackets and a wire, but the brackets are different. A small door holds the archwire, instead of the elastic ties on traditional braces. Less friction means a more comfortable experience, and many patients finish sooner.',
    bullets: [
      'Pitts21 self-ligating brackets',
      'Shorter visits — no elastic ties to change',
      'Easier to keep clean than traditional braces',
    ],
    icon: 'lucide:gem',
    sections: [
      {
        title: 'Why the visits feel different',
        paragraphs: [
          'Appointments are shorter because there are no colored ties to swap out, and the brackets are easier to keep clean. Lower friction as the teeth move also makes day-to-day wear more comfortable.',
        ],
      },
      {
        title: 'Pitts21',
        paragraphs: [
          'We use Pitts21 self-ligating brackets. They are built for consistent results in a shorter treatment, with rounded corners for comfort and less friction on the teeth.',
          'Pitts21 is an aesthetic self-ligating system that allows 3D control earlier and throughout treatment. Smile Arc Protection places the brackets slightly higher so the smile follows the curve of the lower lip.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long do self-ligating braces take?',
        answer:
          'Usually 12 to 30 months, depending on the bite. Your timeline comes from the exam, not from an average.',
      },
      {
        question: 'Do they need tightening?',
        answer:
          'They do not use elastic ties that get tightened the old way, so visits are spaced further apart than with conventional braces. We still see you to check progress and change wires when the plan calls for it.',
      },
    ],
  },
  {
    slug: 'emergency',
    title: 'Emergency Care',
    eyebrow: 'When it cannot wait',
    summary: 'Soreness is normal. Swelling, bleeding, and trauma are not — here is how to tell the difference.',
    leadTitle: 'Most “emergencies” can wait until we see you',
    body: 'Appliances take some getting used to. Soreness when you start, and again after an adjustment, is common and usually mild. Some problems should not wait, and some are uncomfortable but not dangerous.',
    bullets: [
      'ER first for trauma, swelling, bleeding, or a swallowed piece',
      'Wax and a call to the office for loose brackets and poking wires',
      'Avoid hard foods, and wear a mouthguard for contact sports',
    ],
    icon: 'lucide:life-buoy',
    sections: [
      {
        title: 'Go to the emergency room first',
        paragraphs: [
          'Orthodontic problems are rarely as urgent as a general dental emergency, but some are. If you have trauma to the teeth, face, or mouth, swelling or signs of infection, severe pain you cannot manage, heavy bleeding, or you have swallowed a bracket or other piece, go to the emergency room. Call us or your dentist after you are stable so we can repair the appliance and adjust the plan.',
          'Pay attention to pain with swelling. That can mean an infection or abscess and should not wait on a routine visit.',
        ],
        bullets: [
          'Trauma or injury to the teeth, face, or mouth',
          'Infection or swelling of the gums, mouth, or face',
          'Severe pain, uncontrolled bleeding, or a swallowed appliance part',
        ],
      },
      {
        title: 'Common problems we can fix in the office',
        paragraphs: [
          'Loose brackets, broken bands, a poking wire, and general tooth soreness are inconvenient, not life-threatening. Cover a sharp spot with orthodontic wax, and call us to schedule a repair. Most of these can wait a day or two.',
          'If a bracket falls off, save it if you can, keep loose pieces out of the way so they are not swallowed, and cover anything sharp with wax until we reattach it. The rest of the braces still work. A loose elastic tie can sometimes be placed back with clean tweezers.',
          'The simplest prevention is skipping foods that break braces, wearing a mouthguard for contact sports, and keeping wax handy.',
        ],
        bullets: [
          'Loose or broken brackets, bands, or wires',
          'A wire or bracket poking the cheek',
          'General tooth pain or a tooth that feels loose',
        ],
      },
    ],
    faqs: [
      {
        question: 'What counts as an orthodontic emergency?',
        answer:
          'Alarming is not the same as urgent. Swelling around a painful tooth, or bleeding you cannot control, means emergency services first, then a call to us. When you are unsure, call.',
      },
      {
        question: 'Is a broken bracket an emergency?',
        answer:
          'No. Cover it with wax if it is sharp, and contact us so we can replace it. It is an inconvenience, not an emergency.',
      },
      {
        question: 'What if a bracket falls off?',
        answer:
          'Call to schedule a repair. Remove loose pieces so they are not swallowed, and cover the area with wax until we see you.',
      },
      {
        question: 'When should I go to the ER?',
        answer:
          'Swallowed appliance parts, heavy bleeding, facial trauma, or swelling that could be an abscess. See a physician or the emergency room first, then let us know.',
      },
      {
        question: 'What do you see most often?',
        answer:
          'Loose brackets, poking wires, food caught in the gums, significant soreness, swallowed pieces, and irritation or infection. Severity varies — if you are worried, call.',
      },
    ],
  },
  {
    slug: 'retention',
    title: 'Retention',
    eyebrow: 'After treatment',
    summary: 'Retainers keep the smile you just finished. Full-time at first, then nights for the long run.',
    leadTitle: 'The day the braces come off is not the last day',
    body: 'That day is worth celebrating. Keeping the smile straight is still part of treatment. A retainer holds the teeth while the bone and gums settle, and it keeps them there afterward.',
    bullets: [
      'Full-time wear for about two years for most patients',
      'Checkups every 3–6 months during that time',
      'Part-time wear after that, often indefinitely',
    ],
    icon: 'lucide:shield-check',
    sections: [
      {
        title: 'How long retainers are worn',
        paragraphs: [
          'It varies, but full-time wear is often about two years. We see you every 3 to 6 months to check the fit and answer questions. After that, we usually recommend part-time wear indefinitely so the smile stays where we left it.',
        ],
      },
      {
        title: 'Can teeth move after treatment?',
        paragraphs: [
          'Yes. The same forces that moved your teeth can move them back if nothing is holding them. Teeth also shift slowly with age, whether or not you had orthodontics. A retainer may need a small adjustment years later. The goal is a smile that still looks and works the way it should.',
        ],
      },
      {
        title: 'How to take care of a retainer',
        paragraphs: [
          'A lost or broken retainer puts the result at risk and costs money to replace. Brush it with soap and cool water — not hot water, which can warp it. Soak it now and then in a dental cleanser so it stays fresh.',
          'If it is not in your mouth, it belongs in its case. Pockets, tables, and napkins are how retainers get broken or thrown away. Keep them away from pets. If one cracks or disappears, call us right away so we can repair or replace it.',
        ],
      },
    ],
    downloads: [
      {
        label: 'Braces removal and retainer consent form',
        href: 'https://hawaiiansmilesortho.com/wp-content/uploads/2022/08/Braces-Removal-and-Retainer-Consent-Form-Color.doc',
      },
      {
        label: 'Invisalign completion and retainer consent form',
        href: 'https://hawaiiansmilesortho.com/wp-content/uploads/2022/08/Invisalign-Removal-Retainer-Consent-Color.doc',
      },
    ],
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    eyebrow: 'Brightness',
    summary: 'In-office, touch-up, and take-home whitening — professional strength, with us supervising.',
    leadTitle: 'A brighter smile, done safely',
    body: 'Your smile is the first thing people see. Store kits exist, and a dentist or orthodontist is still the safer way to get a noticeable change. We offer professional whitening for patients who want it alongside their orthodontic care.',
    bullets: [
      'In-office whitening in about an hour',
      'A shorter touch-up for stains',
      'Take-home gel used with your retainers',
    ],
    icon: 'lucide:sun',
    pricing: [
      {
        name: 'In-office whitening',
        price: '$350',
        cadence: '/ 1 hour',
        body: 'Sit in the chair. We handle the rest.',
        features: ['Up to 8 shades brighter', 'Gentle and effective', 'Light-accelerated whitening'],
        featured: true,
      },
      {
        name: 'Touch-up whitening',
        price: '$150',
        cadence: '/ 30 min',
        body: 'Tea or coffee stains, cleaned up in a short visit.',
        features: ['Brightens specific spots', 'Clears yellow areas', 'Up to 8 shades brighter'],
      },
      {
        name: 'Take-home whitening',
        price: '$25',
        cadence: '/ tube',
        body: 'Gel for use with your retainers. It does not replace toothpaste.',
        features: ['Simple to apply', 'Little to no sensitivity for most people', 'Up to 5 shades lighter'],
      },
    ],
    faqs: [
      {
        question: 'Is teeth whitening safe?',
        answer:
          'Clinical studies have shown that whitening with carbamide or hydrogen peroxide is safe for teeth and gums when a dental professional is supervising.',
      },
      {
        question: 'Will it make my teeth sensitive?',
        answer:
          'Tooth and gum sensitivity is the most common side effect. We will tell you if you are a good candidate and which formula fits. Philips Zoom take-home products include potassium nitrate and amorphous calcium phosphate to limit sensitivity, and many patients report little or none with in-office treatment.',
      },
      {
        question: 'How is Zoom different from a store kit?',
        answer:
          'Over-the-counter products are not made for your teeth. Zoom is tailored in the office — custom trays for home, or a set light intensity and time in the chair.',
      },
      {
        question: 'How long do the results last?',
        answer:
          'Whitening lifts stains that are already there. Coffee, soft drinks, and normal aging can discolor teeth again. Maintenance whitening helps. Zoom take-home gel includes amorphous calcium phosphate, which has been shown to slow new discoloration.',
      },
      {
        question: 'What stains teeth?',
        answer:
          'Strongly colored foods and drinks — berries, coffee, tea, red wine — plus some medications, aging, smoking, and trauma.',
      },
      {
        question: 'How long does whitening take?',
        answer:
          'Take-home Zoom, used as directed, usually shows results in one to two weeks, depending on the strength and wear time we recommend. In-office treatment can lighten teeth by up to eight shades in about 45 minutes.',
      },
    ],
  },
];

export const treatmentServices = treatments.map((treatment) => treatment.title);
