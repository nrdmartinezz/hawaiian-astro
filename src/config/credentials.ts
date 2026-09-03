import type { ImageMetadata } from 'astro';

import best2020 from '../assets/logos/best-dentists-2020.png';
import best2021 from '../assets/logos/best-dentists-2021.png';
import best2022 from '../assets/logos/best-dentists-2022.png';
import best2023 from '../assets/logos/best-dentists-2023.png';
import best2024 from '../assets/logos/best-dentists-2024.png';
import best2025 from '../assets/logos/best-dentists-2025.jpg';
import best2026 from '../assets/logos/best-dentists-2026.png';
import aao from '../assets/logos/aao.jpg';
import ada from '../assets/logos/ada.jpg';
import abo from '../assets/logos/abo.jpg';
import invisalignDiamond from '../assets/logos/invisalign-diamond.jpg';
import pcso from '../assets/logos/pcso.jpg';

const award = (year: number, image: ImageMetadata) => ({
  name: `Honolulu Magazine Best Dentists in Hawaiʻi ${year}`,
  image,
});

export const awardLogos = [
  award(2020, best2020),
  award(2021, best2021),
  award(2022, best2022),
  award(2023, best2023),
  award(2024, best2024),
  award(2025, best2025),
  award(2026, best2026),
];

export const affiliationLogos = [
  { name: 'American Association of Orthodontists', image: aao },
  { name: 'American Dental Association', image: ada },
  { name: 'American Board of Orthodontics', image: abo },
  { name: 'Invisalign Diamond Provider', image: invisalignDiamond },
  { name: 'Pacific Coast Society of Orthodontists', image: pcso },
];
