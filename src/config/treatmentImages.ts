import type { ImageMetadata } from 'astro';
import early from '../assets/treatments/treatment-01.jpg';
import adult from '../assets/treatments/treatment-02.jpg';
import invisalign from '../assets/treatments/treatment-03.jpg';
import braces from '../assets/treatments/treatment-04.jpg';
import emergency from '../assets/treatments/treatment-05.jpg';
import retainers from '../assets/treatments/treatment-06.jpg';

/** Card crops for the homepage and treatments index. Treatment pages use their own photos. */
export const treatmentImages: Record<string, ImageMetadata> = {
  'early-treatment': early,
  'adult-treatment': adult,
  airway: early,
  invisalign,
  braces,
  emergency,
  retainers,
  'teeth-whitening': adult,
};
