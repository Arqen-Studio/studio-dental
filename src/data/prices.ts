/**
 * Rates supplied by the client as per-branch PDF price lists.
 * The two branches price most treatments differently, so every item
 * carries both. An omitted branch means the treatment is not listed
 * for that branch; `null` means it is offered but no rate was given.
 */

export type ClinicId = "dha" | "f7";

export type PriceItem = {
  name: string;
  dha?: number | null;
  f7?: number | null;
  /** A part-cost rather than the price of the finished treatment, so it
   *  must never be used as a headline "from" price. Covers instalments
   *  (braces are paid monthly) and components (an implant crown is fitted
   *  on top of an implant, and is priced separately from it). */
  partCost?: true;
};

export type PriceCategory = {
  id: string;
  label: string;
  items: PriceItem[];
};

export const PRICE_CLINICS: { id: ClinicId; name: string; address: string }[] = [
  { id: "dha", name: "DHA Phase II", address: "1st Floor, Plaza No. 26, Main Iqbal Boulevard" },
  { id: "f7",  name: "F-7 Markaz",   address: "Jinnah Super, F-7 Markaz" },
];

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    id: "consultation",
    label: "Consultation & Hygiene",
    items: [
      { name: "Dental consultation",   dha: 1000,  f7: 2000  },
      { name: "Scaling & polishing",   dha: 10000, f7: 20000 },
      { name: "Teeth whitening",       dha: 50000, f7: 50000 },
      { name: "Fluoride varnish",      dha: 6000,  f7: null  },
    ],
  },
  {
    id: "fillings",
    label: "Fillings",
    items: [
      { name: "GIC filling",           dha: 5000, f7: 10000 },
      { name: "Composite filling",     dha: 8000, f7: 15000 },
    ],
  },
  {
    id: "endodontics",
    label: "Root Canal Treatment",
    items: [
      { name: "Root canal treatment",     dha: 20000, f7: 25000 },
      { name: "Re-root canal treatment",  dha: 25000 },
    ],
  },
  {
    id: "crowns",
    label: "Crowns & Veneers",
    items: [
      { name: "PFM crown",                            dha: 20000, f7: 30000 },
      { name: "Simple zirconium crown",               dha: 40000 },
      { name: "Superior zirconium crown",             dha: 50000 },
      { name: "Zirconia crown",                                   f7: 50000 },
      { name: "Zirconium premium with digital scan",              f7: 70000 },
      { name: "Veneers",                              dha: 50000 },
    ],
  },
  {
    id: "extractions",
    label: "Extractions & Oral Surgery",
    items: [
      { name: "Mobile extraction",              dha: 5000  },
      { name: "Normal extraction",              dha: 8000,  f7: 10000 },
      { name: "Normal surgical extraction",     dha: 12000, f7: 15000 },
      { name: "3rd molar simple extraction",    dha: 15000, f7: 25000 },
      { name: "3rd molar surgical extraction",  dha: 25000, f7: 30000 },
    ],
  },
  {
    id: "implants",
    label: "Dental Implants",
    items: [
      { name: "Dental implant",                 f7: 200000 },
      { name: "Dental implant (category 1)",    dha: 200000 },
      { name: "Dental implant (category 2)",    dha: 150000 },
      { name: "Dental implant crown",           dha: 50000, f7: 50000, partCost: true },
    ],
  },
  {
    id: "orthodontics",
    label: "Orthodontics",
    items: [
      { name: "Invisible teeth aligners",         dha: 250000, f7: 350000 },
      { name: "Metal braces (initial payment)",   dha: 150000 },
      { name: "Metal braces (monthly payment)",   dha: 10000, partCost: true },
    ],
  },
  {
    id: "paediatric",
    label: "Children's Dentistry",
    items: [
      { name: "Kids cleaning",            f7: null   },
      { name: "Kids extraction",          dha: 5000, f7: 8000  },
      { name: "Kids flowable composite",  dha: 7000, f7: 10000 },
      { name: "Kids filling (GIC)",       dha: 5000, f7: 8000  },
      { name: "Kids composite filling",   dha: 5000, f7: 10000 },
    ],
  },
];

/** "Rs. 20,000", or "On request" where the client gave no rate. */
export function formatPrice(value: number | null | undefined): string {
  if (value === null || value === undefined) return "On request";
  return `Rs. ${value.toLocaleString("en-PK")}`;
}

/** Categories filtered to the treatments a given branch actually lists. */
export function categoriesForClinic(clinic: ClinicId): PriceCategory[] {
  return PRICE_CATEGORIES.map((category) => ({
    ...category,
    items: category.items.filter((item) => clinic in item),
  })).filter((category) => category.items.length > 0);
}
