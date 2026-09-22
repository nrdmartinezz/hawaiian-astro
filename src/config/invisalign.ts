import type { FaqItem } from '../components/blocks/FAQ.astro';
import type { ProcessStep } from '../components/blocks/ProcessSteps.astro';
import type { ValueItem } from '../components/blocks/ValueGrid.astro';

export interface InvisalignAudience {
  slug: string;
  /** Short label in the treatments menu. */
  navLabel: string;
  title: string;
  eyebrow: string;
  summary: string;
  leadTitle: string;
  paragraphs: string[];
  bullets: string[];
  icon: string;
  values?: ValueItem[];
  steps?: ProcessStep[];
  faqs?: FaqItem[];
}

export const invisalignFaqs: FaqItem[] = [
  {
    question: 'What is Invisalign treatment?',
    answer:
      'A series of clear aligner trays that correct alignment. They are a form of braces, with a different way of moving teeth. We will tell you if they fit your case.',
  },
  {
    question: 'How fast do teeth move?',
    answer:
      'Movement is gradual, which keeps discomfort lower than many people expect from braces. Most Invisalign treatment takes 12 to 18 months. Simpler cases can finish in 6 to 18 months.',
  },
  {
    question: 'How much does Invisalign cost?',
    answer:
      'A common range is about $5,000 to $8,000, and it varies with the case. We will quote your plan before you start, including insurance and monthly options.',
  },
  {
    question: 'Do the results last?',
    answer:
      'They are meant to. Trauma or gum disease can still move teeth, and teeth drift with age. Nighttime retainers are what keep the result.',
  },
  {
    question: 'How often do I wear the aligners?',
    answer: 'Up to 22 hours a day. Take them out to eat, drink anything but water, and brush.',
  },
  {
    question: 'Are there food restrictions?',
    answer:
      'No. Remove the aligners, eat, then brush your teeth and the trays before they go back in. Gum will stick to the plastic, so take the trays out for that too.',
  },
  {
    question: 'Will they affect my speech?',
    answer:
      'There is a short adjustment. The more you talk with them in, the faster speech settles.',
  },
  {
    question: 'Does it hurt?',
    answer:
      'Expect pressure for a day or two each time you start a new tray. That pressure is the teeth moving.',
  },
  {
    question: 'How do I clean the trays?',
    answer:
      'Brush them with a soft toothbrush and a clear cleanser. Skip hot water, which can warp the plastic.',
  },
  {
    question: 'How often are appointments?',
    answer: 'Usually every five to six weeks, so we can confirm the teeth are tracking the plan.',
  },
];

/**
 * Audience pages under /treatments/invisalign/. Add an entry here to publish
 * another child page — the route and the overview cards both read this list.
 */
export const invisalignAudiences: InvisalignAudience[] = [
  {
    slug: 'adult',
    navLabel: 'Adults',
    title: 'Invisalign for Adults',
    eyebrow: 'Adults',
    summary: 'Clear aligners that stay out of the way of work, photos, and a full calendar.',
    leadTitle: 'You are not too old for a clearer way to straighten',
    paragraphs: [
      'Invisalign for adults is orthodontic treatment with very little disruption. You spend less time in the chair and more time on the rest of your week. The trays are clear, comfortable, and removable.',
      'If you want a better smile and a better bite, and you would rather skip a mouth full of metal, clear aligners are often the fit. You do not have to trade how you look for treatment.',
    ],
    bullets: [
      'So clear they are almost invisible',
      'Comfortable, removable, and effective for many adult bites',
      'Cost generally in the same range as braces',
    ],
    icon: 'lucide:briefcase',
    values: [
      {
        icon: 'lucide:calendar-check',
        title: 'Fewer appointments',
        body: 'There are no wires to adjust, so visits are shorter and less frequent. More of the week stays yours.',
      },
      {
        icon: 'lucide:utensils',
        title: 'Eat what you like',
        body: 'Take the trays out for meals and anything but water. Nothing on the menu can snap a bracket.',
      },
      {
        icon: 'lucide:smile',
        title: 'Show up as yourself',
        body: 'Meetings, photos, and long workdays do not come with an explanation about the metal on your teeth.',
      },
      {
        icon: 'lucide:wallet',
        title: 'Priced with braces',
        body: 'Invisalign usually costs about the same as traditional braces. We quote your plan, insurance, and monthly options before you start.',
      },
    ],
  },
  {
    slug: 'teen',
    navLabel: 'Teens',
    title: 'Invisalign Teen',
    eyebrow: 'Teens',
    summary:
      'A straight smile without being the one in metal — comfortable, removable, and nearly invisible.',
    leadTitle: 'Treatment that does not announce itself at school',
    paragraphs: [
      'The teen years are busy enough without a mouth full of metal. Invisalign Teen straightens teeth with clear trays most people will not notice.',
      'Each set is made from a scan of your smile, and you can see a preview of the result before you start. The trays come out to eat, brush, and floss, so favorite foods stay on the menu.',
    ],
    bullets: [
      'No brackets or wires rubbing the cheeks',
      'Virtually invisible in photos and at school',
      'Fewer adjustment visits than braces',
    ],
    icon: 'lucide:graduation-cap',
    steps: [
      {
        title: 'A scan, not a mold',
        body: 'We take a 3D image of the smile, map what needs to move, and show you the finish before treatment starts.',
      },
      {
        title: 'Trays made for you',
        body: 'Every set is custom. Teen trays include a wear indicator that changes color if they are not in long enough, plus spares if one is lost.',
      },
      {
        title: 'Wear them 20–22 hours',
        body: 'They only work in the mouth. Take them out to eat or drink anything but water, then put them back. Food and dark drinks can stain or damage the plastic.',
      },
      {
        title: 'Keep the case with you',
        body: 'Clean trays with a soft toothbrush, liquid soap, and lukewarm water. A napkin is how aligners disappear.',
      },
    ],
    faqs: [
      {
        question: 'How is Invisalign Teen different?',
        answer:
          'Each teen tray has a wear indicator that changes color if it has not been used long enough, and teens often receive spare trays in case one is misplaced.',
      },
      {
        question: 'Can my teen get Invisalign?',
        answer:
          'Many teens can. We still need to see them — some bites are too complex for aligners alone.',
      },
      {
        question: 'What if a teen loses an aligner?',
        answer:
          'Call us. Going without trays lets teeth drift. A spare may already be in the series; we will tell you whether to move ahead, go back a tray, or come in.',
      },
    ],
  },
  {
    slug: 'children',
    navLabel: 'Children',
    title: 'Invisalign First',
    eyebrow: 'Children',
    summary:
      'Phase 1 aligners for growing smiles, typically ages 6 to 10, including a clear palatal expander.',
    leadTitle: 'Early treatment, without brackets and wires',
    paragraphs: [
      'Invisalign First is Phase 1 for little smiles. It treats spacing, crowding, and narrow arches — simpler cases and more complex ones — and makes room for the permanent teeth.',
      'The trays come out, so a child brushes and flosses the usual way. No brackets also means a more comfortable start.',
    ],
    bullets: [
      'Usually ages 6 to 10',
      'Room for permanent teeth while the jaws are growing',
      'A clear expander when the upper jaw is narrow',
    ],
    icon: 'lucide:baby',
    values: [
      {
        icon: 'lucide:shield',
        title: 'Stop a bite from getting worse',
        body: 'Early aligners can keep a developing problem from turning into a longer treatment later.',
      },
      {
        icon: 'lucide:sparkles',
        title: 'Straighten while they grow',
        body: 'Spacing, crowding, and the look of the smile can improve before all the permanent teeth are in.',
      },
      {
        icon: 'lucide:hand',
        title: 'Habits included',
        body: 'Thumb sucking and tongue thrust change how teeth come in. First can address those changes while the jaws are still easy to guide.',
      },
      {
        icon: 'lucide:timer',
        title: 'A shorter next phase',
        body: 'When Phase 1 has already made room, braces or aligners in the teen years are often simpler.',
      },
    ],
    steps: [
      {
        title: 'A digital scan',
        body: 'The scan creates a series of custom expanders instead of a metal appliance with a daily turn-key.',
      },
      {
        title: 'A little wider each stage',
        body: 'Each tray widens the upper arch a bit more. Small tooth-colored attachments help it stay seated.',
      },
      {
        title: 'A short hold',
        body: 'After expansion, a holding phase keeps the new width while the rest of the plan continues.',
      },
      {
        title: 'Wear and care',
        body: 'Full-time wear, off only to brush and floss. Cool water and a soft brush. Skip sticky foods and hot water. A lisp or a small gap between the front teeth can show up and then settle.',
      },
    ],
    faqs: [
      {
        question: 'When is Invisalign First used?',
        answer:
          'As Phase 1, typically between ages 6 and 10, while baby teeth and permanent teeth are both present. The goal is to guide growth and make room for the adult teeth.',
      },
      {
        question: 'Will my child still need braces later?',
        answer:
          'Often yes. Early expansion and alignment usually make that later phase easier and shorter. We will say at the evaluation what the full plan looks like.',
      },
      {
        question: 'Can they eat with an expander in?',
        answer:
          'Yes. Avoid sticky or chewy foods. Clean the expander with a soft toothbrush and cool water, never hot water.',
      },
    ],
  },
];

export function invisalignPath(slug?: string) {
  return slug ? `/treatments/invisalign/${slug}/` : '/treatments/invisalign/';
}
