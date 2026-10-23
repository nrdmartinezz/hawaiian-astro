import type { ImageMetadata } from 'astro';

/**
 * Photos for treatment detail pages.
 * Other pages are in pageImages.ts. Homepage and treatments-index cards stay in treatmentImages.ts.
 *
 * Each import is one slot. Change that import to change only that photo.
 * A section with no line here reuses that treatment's lead photo.
 * The Pitts21 block uses the three smile GIFs in treatments.ts, not this file.
 */

import earlyLead from '../assets/early-treatment-hawaiian-smiles-ortho.jpg';
import earlyVisit from '../images/early-treatment-orthodontist-hawaii-hawaiian-smiles-ortho.jpg';
import earlyProblems from '../images/orthodontist-hawaii-early-treatment-hawaiian-smiles-ortho.jpg';
import earlyHabits from '../images/orthodontist-hawaii-dr-nayak-hawaiian-smiles-ortho.jpg';

import adultLead from '../images/adult-orthodontics-dr-nayak-hawaiian-smiles-ortho.jpg';
import adultChange from '../images/adult-treatment-hawaiian-smiles-orthodontics-dr-nayak.jpg';

import airwayLead from '../images/airway-treatment-dr-nayak-hawaiian-smiles-ortho.jpg';
import airwayConnect from '../images/airway-treatment-hawaii-orthodontist-dr-nayak.jpg';
import airwayPhases from '../images/early-treatment-airway-hawaiian-smiles-orthodontics.jpg';
import airwayEvaluate from '../images/early-treatment-airway-hawaii-orthodontist-dr-nayak.jpg';

import bracesLead from '../images/braces-treatment-hawaii-dr-nayak.jpg';
import bracesVisits from '../images/braces-hawaiian-smiles-orthodontics-dr-nayak.jpg';

import emergencyLead from '../images/emergency-visits-hawaiian-smiles-ortho-dr-nayak.jpg';
import emergencyRoom from '../assets/treatments/treatment-05.jpg';
import emergencyOffice from '../images/dr-nayak-dental-emergency-hawaiian-smiles-orthodontics.jpg';

import retainersLead from '../assets/treatments/treatment-06.jpg';
import retainersWorn from '../images/retainers-hawaiian-smiles-orthodontics-dr-nayak.jpg';
import retainersMove from '../images/hawaiian-smiles-ortho-dr-nayak-retainers.jpg';
import retainersCare from '../images/dr-nayak-retainers-hawaii-orthodontist.jpg';

import whiteningLead from '../images/teeth-whitening-dr-nayak-hawaiian-smiles-orthodontics.jpg';

export interface TreatmentPagePhotos {
  /** First split, under the hero. */
  lead: ImageMetadata;
  /** Later splits, keyed by the section heading. */
  sections: Record<string, ImageMetadata>;
}

export const treatmentPageImages: Record<string, TreatmentPagePhotos> = {
  'early-treatment': {
    lead: earlyLead,
    sections: {
      'What an early visit actually does': earlyVisit,
      'Common problems in kids': earlyProblems,
      'Habits that change how the jaws grow': earlyHabits,
    },
  },
  'adult-treatment': {
    lead: adultLead,
    sections: {
      'What treatment can change': adultChange,
    },
  },
  airway: {
    lead: airwayLead,
    sections: {
      'How the jaws and the airway connect': airwayConnect,
      'Phase 1 and Phase 2': airwayPhases,
      'Why we evaluate early': airwayEvaluate,
    },
  },
  braces: {
    lead: bracesLead,
    sections: {
      'Why the visits feel different': bracesVisits,
    },
  },
  emergency: {
    lead: emergencyLead,
    sections: {
      'Go to the emergency room first': emergencyRoom,
      'Common problems we can fix in the office': emergencyOffice,
    },
  },
  retainers: {
    lead: retainersLead,
    sections: {
      'How long retainers are worn': retainersWorn,
      'Can teeth move after treatment?': retainersMove,
      'How to take care of a retainer': retainersCare,
    },
  },
  'teeth-whitening': {
    lead: whiteningLead,
    sections: {},
  },
};
