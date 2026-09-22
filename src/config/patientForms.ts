/**
 * New-patient PDFs in `public/forms/`. `download` is the filename the browser saves.
 */
export interface PatientForm {
  title: string;
  body: string;
  href: string;
  download: string;
}

export const patientForms: PatientForm[] = [
  {
    title: 'Adult new-patient form',
    body: 'For patients 18 and older. Complete it and email the PDF before your appointment.',
    href: '/forms/2026-edited-policyJuly-Adult-New-Patient-.pdf',
    download: 'Hawaiian-Smiles-Adult-New-Patient-Form.pdf',
  },
  {
    title: 'Child new-patient form',
    body: 'For patients under 18. A parent or guardian should complete and sign it.',
    href: '/forms/2026-edited-JulyNP_Packet_Child_Final.pdf',
    download: 'Hawaiian-Smiles-Child-New-Patient-Form.pdf',
  },
];

export function patientFormLinks() {
  return patientForms.map((form) => ({
    label: form.title,
    href: form.href,
    download: form.download,
    description: form.body,
    icon: 'lucide:file-text',
  }));
}

export function patientFormActions(
  variant: 'primary' | 'secondary' | 'ghost' | 'inverse' | 'accent' | 'outline' = 'secondary',
) {
  return patientForms.map((form) => ({
    label: form.title,
    href: form.href,
    download: form.download,
    variant,
    icon: 'lucide:download',
  }));
}
