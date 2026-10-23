import type { ImageMetadata } from 'astro';

/**
 * Photos for every page except treatment detail sections (those live in
 * treatmentPageImages.ts) and the homepage / treatments-index cards
 * (those live in treatmentImages.ts).
 *
 * Each import is one slot. Change that import to change only that photo,
 * even when another slot currently uses the same file.
 */

import homeHero from '../assets/hawaiian-smiles-ortho-invisalign-orthodontist.png';
import homeInvisalign from '../assets/invisalign-smile.jpg';
import homeDoctor from '../images/nayak-fernandez.png';
import homeCta from '../assets/hero.jpg';

import aboutStory from '../images/family-beach.png';
import doctorsHero from '../images/nayak-shaikh-pier-front.png';
import financialSplit from '../images/nayak-shaikh-pier.png';
import firstVisitHero from '../images/nayak-shaikh-pier-pose.png';

import whyStory from '../images/family-beach.png';
import whyAligners from '../assets/treatments/treatment-03.jpg';

import locKaneohe from '../images/nayak-shaikh-beach.png';
import locKona from '../images/nayak-shaikh-beach.png';
import locKamuela from '../images/nayak-shaikh-beach.png';
import locHilo from '../images/nayak-shaikh-beach.png';

import invisalignOverview from '../images/nayak-shaikh-pier-front.png';
import invisalignAdult from '../images/invisalign-hawaiian-smiles-ortho-dr-nayak.jpg';
import invisalignTeen from '../images/invisalign-teen-dr-nayak-hawaiian-smiles-orthodontics.jpg';
import invisalignChildren from '../images/invisalign-kids-hawaiian-orthodontist-dr-nayak.jpg';
import compareInvisalign from '../assets/treatments/treatment-03.jpg';
import compareBraces from '../assets/treatments/treatment-04.jpg';

import doctorNayak from '../images/nayak-fernandez.png';
import doctorShaikh from '../images/shaikh-beach.png';
import doctorFernandez from '../images/family-beach.png';

export const pageImages = {
  home: {
    hero: homeHero,
    invisalign: homeInvisalign,
    doctor: homeDoctor,
    cta: homeCta,
  },
  about: {
    story: aboutStory,
  },
  doctors: {
    hero: doctorsHero,
  },
  financial: {
    split: financialSplit,
  },
  firstVisit: {
    hero: firstVisitHero,
  },
  whyChooseUs: {
    story: whyStory,
    aligners: whyAligners,
  },
  locations: {
    kaneohe: locKaneohe,
    'kailua-kona': locKona,
    kamuela: locKamuela,
    hilo: locHilo,
  } satisfies Record<string, ImageMetadata>,
  invisalign: {
    overview: invisalignOverview,
    audiences: {
      adult: invisalignAdult,
      teen: invisalignTeen,
      children: invisalignChildren,
    } satisfies Record<string, ImageMetadata>,
  },
  compare: {
    invisalign: compareInvisalign,
    braces: compareBraces,
  },
  doctorsPhotos: {
    nayak: doctorNayak,
    shaikh: doctorShaikh,
    fernandez: doctorFernandez,
  },
};
