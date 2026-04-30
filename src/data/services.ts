export type ServiceScenario = {
  title: string;
  text: string;
  image: string;
};

export type ServiceData = {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  whenHeading: string;
  scenarios: ServiceScenario[];
  prices: { name: string; price: string }[];
  steps: string[];
  specialistTags: string[];
};

// Verified-working Unsplash images
const P = "?auto=format&fit=crop&w=1200&q=75";
const IMG_PATIENT   = `https://images.unsplash.com/photo-1629909613654-28e377c37b09${P}`;
const IMG_DENTIST   = `https://images.unsplash.com/photo-1606811841689-23dfddce3e95${P}`;
const IMG_OFFICE    = `https://images.unsplash.com/photo-1450101499163-c8848c66ca85${P}`;
const IMG_FDENTIST  = `https://images.unsplash.com/photo-1559839734-2b71ea197ec2${P}`;
const IMG_MDENTIST  = `https://images.unsplash.com/photo-1612349317150-e413f6a5b16d${P}`;

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "dental-implantation",
    title: "Dental Implantation",
    subtitle: "One of the most advanced and effective methods of tooth restoration — providing permanent, natural-looking results that last a lifetime.",
    heroImage: IMG_PATIENT,
    intro: "Our implantologists work with premium titanium fixtures that fuse naturally with your jawbone, replacing missing teeth at the root level. The result looks, feels, and functions exactly like a natural tooth — and with proper care, lasts decades.",
    whenHeading: "When is dental implantation necessary?",
    scenarios: [
      {
        title: "One tooth is missing.",
        text: "An implant is inserted into the place of the lost tooth and a crown is attached on top. Adjacent healthy teeth are not ground — their natural structure is fully preserved, which is a major advantage over a traditional bridge.",
        image: IMG_DENTIST,
      },
      {
        title: "Missing several teeth.",
        text: "When several teeth in a row are lost, they can be restored with two implants and a bridge over them. A three-unit bridge can be made on just two implants, reducing cost and surgical time.",
        image: IMG_OFFICE,
      },
      {
        title: "Missing all teeth.",
        text: "We restore the full dental arch by placing 4–8 implants and attaching a screw-on prosthesis. The exact number of implants and the restoration plan are discussed in detail during your consultation.",
        image: IMG_PATIENT,
      },
    ],
    prices: [
      { name: "Single implant (titanium fixture)",              price: "Rs. 75,000 – 95,000"  },
      { name: "Implant abutment",                              price: "Rs. 15,000 – 22,000"  },
      { name: "Implant crown (zirconia)",                      price: "Rs. 35,000 – 50,000"  },
      { name: "Full implant package (fixture + abutment + crown)", price: "Rs. 110,000 – 140,000" },
    ],
    steps: [
      "Sedation or local anaesthesia is administered — the patient feels no pain throughout.",
      "The implant site is prepared and the titanium fixture is carefully threaded into the jawbone.",
      "A healing cap is placed and the gum is sutured. Osseointegration takes 3–6 months.",
      "Once healed, the abutment connector is attached and digital impressions are taken for the crown.",
      "The custom zirconia crown is fitted and the bite is checked. A follow-up X-ray confirms full integration.",
    ],
    specialistTags: ["Implants"],
  },
  {
    id: "all-on-4-implants",
    title: "All Teeth on 4 Implants",
    subtitle: "A full-arch restoration supported by just four implants — a modern solution for patients who have lost all or most of their teeth.",
    heroImage: IMG_MDENTIST,
    intro: "The All-on-4 technique allows us to replace an entire jaw of teeth using only four strategically placed implants. The prosthesis is often fitted on the same day as the implant surgery, giving patients immediate function and aesthetics.",
    whenHeading: "Who is All-on-4 suitable for?",
    scenarios: [
      {
        title: "Fully edentulous jaw.",
        text: "When a patient has lost all teeth in one or both jaws, All-on-4 restores the complete arch on four implants. The angled posterior implants maximise bone contact without the need for grafting in most cases.",
        image: IMG_DENTIST,
      },
      {
        title: "Failing or hopeless teeth.",
        text: "Patients with multiple failing teeth — severely decayed, fractured, or with advanced bone loss — can have all remaining teeth removed and replaced with a fixed All-on-4 prosthesis in a single procedure.",
        image: IMG_OFFICE,
      },
    ],
    prices: [
      { name: "All-on-4 (per jaw)",     price: "Rs. 550,000 – 750,000" },
      { name: "All-on-6 (per jaw)",     price: "Rs. 700,000 – 950,000" },
      { name: "Bone grafting",          price: "Rs. 30,000 – 60,000"   },
      { name: "Sinus lift",             price: "Rs. 50,000 – 80,000"   },
    ],
    steps: [
      "A 3D CBCT scan is taken to assess bone volume and plan the precise implant positions.",
      "Four implants are placed at calculated angles to maximise contact with available bone.",
      "A temporary prosthesis is often attached the same day, restoring appearance and function immediately.",
      "After 3–6 months of osseointegration, the final high-strength prosthesis is manufactured and fitted.",
      "Bite, aesthetics, and phonetics are fine-tuned at the final fitting appointment.",
    ],
    specialistTags: ["Implants"],
  },
  {
    id: "prosthetics",
    title: "Prosthetics: Teeth & Implants",
    subtitle: "Crowns, bridges, and prostheses crafted from premium materials — restoring function and aesthetics to damaged or missing teeth.",
    heroImage: IMG_FDENTIST,
    intro: "Our prosthetic restorations are designed with precision and made from the highest-grade ceramics and zirconia. Whether you need a single crown, a multi-unit bridge, or implant prosthetics, every restoration is custom-fabricated to match your natural teeth.",
    whenHeading: "When are prosthetics recommended?",
    scenarios: [
      {
        title: "Damaged or heavily filled teeth.",
        text: "When a tooth has been weakened by decay, fracture, or a large filling, a crown encases the entire tooth, restoring its strength and protecting it from further damage.",
        image: IMG_PATIENT,
      },
      {
        title: "Missing teeth with healthy neighbours.",
        text: "A fixed bridge uses crowns on the adjacent teeth as anchors to support one or more artificial teeth in the gap — a proven solution that does not require surgery.",
        image: IMG_OFFICE,
      },
    ],
    prices: [
      { name: "Zirconia crown",                    price: "Rs. 30,000 – 45,000"  },
      { name: "Full-ceramic crown (e.max)",         price: "Rs. 35,000 – 50,000"  },
      { name: "3-unit bridge (zirconia)",           price: "Rs. 90,000 – 130,000" },
      { name: "Full acrylic denture (per jaw)",     price: "Rs. 35,000 – 55,000"  },
    ],
    steps: [
      "The tooth is prepared — shaped to accommodate the crown with minimal removal of healthy tissue.",
      "Digital impressions are taken and sent to the laboratory for custom fabrication.",
      "A temporary crown is placed to protect the tooth during the fabrication period.",
      "The permanent crown is tried in, checked for fit, colour, and bite, then bonded in place.",
      "Final polishing and bite adjustment complete the procedure.",
    ],
    specialistTags: ["Restorative Dentistry"],
  },
  {
    id: "dental-fillings",
    title: "Dental Fillings",
    subtitle: "Modern tooth-coloured composite fillings that restore decayed or damaged teeth — virtually invisible and long-lasting.",
    heroImage: IMG_DENTIST,
    intro: "Cavities and tooth damage are treated using high-quality composite resin or GIC materials that closely match the natural shade of your teeth. Our fillings are placed with precision to restore shape, strength, and aesthetics in a single appointment.",
    whenHeading: "When are fillings needed?",
    scenarios: [
      {
        title: "Tooth decay (cavities).",
        text: "When bacteria erode enamel and dentine, the decayed portion is removed and the space is filled with composite resin, sealing the tooth and preventing further deterioration.",
        image: IMG_PATIENT,
      },
      {
        title: "Chipped or fractured teeth.",
        text: "Minor fractures and chips can be repaired with dental bonding — composite is applied, sculpted to match the tooth, and hardened with a curing light in a single visit.",
        image: IMG_FDENTIST,
      },
    ],
    prices: [
      { name: "Composite filling (tooth-coloured)", price: "Rs. 4,000 – 8,000"   },
      { name: "GIC filling",                        price: "Rs. 3,000 – 5,000"   },
      { name: "Inlay / onlay (ceramic)",            price: "Rs. 18,000 – 28,000" },
      { name: "Dental bonding",                     price: "Rs. 6,000 – 12,000"  },
    ],
    steps: [
      "Local anaesthesia is applied to ensure a completely pain-free procedure.",
      "All decayed or damaged tooth material is carefully removed using precision instruments.",
      "The cavity is cleaned, etched, and primed to ensure strong adhesion of the filling material.",
      "Composite resin is placed in layers, each hardened with a curing light.",
      "The filling is shaped, polished, and the bite is checked and adjusted.",
    ],
    specialistTags: ["General Dentistry", "Restorative Dentistry"],
  },
  {
    id: "orthognathic-surgery",
    title: "Orthognathic Surgery",
    subtitle: "Corrective jaw surgery to realign the jaw and improve bite function, facial balance, and quality of life.",
    heroImage: IMG_MDENTIST,
    intro: "Orthognathic surgery corrects skeletal discrepancies of the jaws that cannot be addressed with orthodontics alone. Our oral and maxillofacial surgeons work closely with orthodontists to plan each case digitally, ensuring predictable and lasting results.",
    whenHeading: "When is orthognathic surgery needed?",
    scenarios: [
      {
        title: "Severe underbite or overbite.",
        text: "When the upper and lower jaws do not meet correctly due to a skeletal discrepancy, surgery repositions one or both jaws to create a functional, balanced bite that orthodontics alone cannot achieve.",
        image: IMG_OFFICE,
      },
      {
        title: "Facial asymmetry.",
        text: "Significant asymmetry of the lower face — often causing difficulty chewing, speaking, or breathing — can be corrected by surgically repositioning the jaw to achieve balance and symmetry.",
        image: IMG_FDENTIST,
      },
    ],
    prices: [
      { name: "Surgical extraction",         price: "Rs. 12,000"         },
      { name: "Cyst removal",                price: "Rs. 25,000"         },
      { name: "Frenectomy",                  price: "Rs. 12,000"         },
      { name: "Orthognathic consultation",   price: "Complimentary"      },
    ],
    steps: [
      "A comprehensive workup including X-rays, CBCT, photographs, and digital planning is completed.",
      "Pre-surgical orthodontic treatment aligns teeth within each jaw over 12–18 months.",
      "Surgery is performed under general anaesthesia — the jaw(s) are precisely repositioned using titanium plates.",
      "Recovery takes 4–6 weeks; post-surgical orthodontics fine-tunes the bite over several months.",
      "Final records confirm the outcome and retention is provided to maintain results.",
    ],
    specialistTags: ["Oral Surgery"],
  },
  {
    id: "jaw-joint-treatment",
    title: "Treatment of Jaw Joint Pain",
    subtitle: "Evidence-based management of TMJ disorders — reducing pain, clicking, and limited jaw movement.",
    heroImage: IMG_PATIENT,
    intro: "Temporomandibular joint (TMJ) disorders affect the jaw joint and surrounding muscles, causing pain, clicking, headaches, and difficulty opening the mouth. Our team assesses each patient thoroughly and offers targeted, non-invasive treatment in most cases.",
    whenHeading: "What causes jaw joint problems?",
    scenarios: [
      {
        title: "Teeth grinding (bruxism).",
        text: "Grinding or clenching during sleep puts enormous pressure on the TMJ and jaw muscles, leading to pain, headaches, and worn teeth. A custom night guard redistributes the forces and relieves symptoms.",
        image: IMG_DENTIST,
      },
      {
        title: "Joint clicking or locking.",
        text: "A displaced articular disc within the TMJ can cause audible clicking or sudden locking of the jaw. Early intervention with splint therapy and physiotherapy is highly effective in most cases.",
        image: IMG_OFFICE,
      },
    ],
    prices: [
      { name: "TMJ consultation & examination",    price: "Rs. 3,000"          },
      { name: "Custom occlusal splint (night guard)", price: "Rs. 15,000 – 22,000" },
      { name: "Physiotherapy referral assessment", price: "Complimentary"      },
    ],
    steps: [
      "A detailed clinical examination assesses jaw movement, muscle tenderness, and joint sounds.",
      "Imaging (OPG or CBCT) is taken to evaluate joint structure and rule out pathology.",
      "A custom-fitted occlusal splint is fabricated to offload the joint during sleep.",
      "Physiotherapy exercises and heat/cold therapy are prescribed to relax the jaw muscles.",
      "Progress is reviewed at 4–6 weeks and the splint adjusted if needed.",
    ],
    specialistTags: ["Oral Surgery", "General Dentistry"],
  },
  {
    id: "teeth-straightening",
    title: "Teeth Straightening",
    subtitle: "Discreet and effective orthodontic treatment — whether you prefer clear aligners, ceramic braces, or traditional metal braces.",
    heroImage: IMG_FDENTIST,
    intro: "Straight teeth are healthier teeth. Our certified orthodontists offer a full range of tooth straightening options, from nearly invisible clear aligners to fixed braces, all tailored to your bite, lifestyle, and aesthetic goals.",
    whenHeading: "Which straightening method is right for you?",
    scenarios: [
      {
        title: "Clear aligners.",
        text: "A series of custom-made removable trays gradually shift teeth into position. Virtually invisible, removable for eating and cleaning, and comfortable — the preferred choice for adults and teens seeking a discreet solution.",
        image: IMG_PATIENT,
      },
      {
        title: "Fixed braces.",
        text: "Metal or ceramic brackets bonded to the teeth offer precise, controlled tooth movement — often the best choice for complex cases. Ceramic braces match the tooth colour for a less noticeable appearance.",
        image: IMG_DENTIST,
      },
    ],
    prices: [
      { name: "Clear aligners (full treatment)",    price: "Rs. 150,000 – 250,000" },
      { name: "Metal braces (full treatment)",      price: "Rs. 80,000 – 120,000"  },
      { name: "Ceramic braces (full treatment)",    price: "Rs. 120,000 – 160,000" },
      { name: "Retainer (post-treatment)",          price: "Rs. 8,000 – 15,000"    },
    ],
    steps: [
      "A thorough orthodontic examination including X-rays and digital scan is completed.",
      "A customised treatment plan is prepared and discussed — duration, options, and cost are agreed upfront.",
      "Aligners or braces are fitted. For aligners, a new set is worn every 1–2 weeks.",
      "Progress check-ups every 6–8 weeks ensure teeth are moving as planned.",
      "Once alignment is achieved, retainers are provided to maintain the result long-term.",
    ],
    specialistTags: ["Aligners"],
  },
  {
    id: "aesthetic-fillings",
    title: "Aesthetic Dental Fillings",
    subtitle: "Cosmetic composite restorations that repair, reshape, and enhance your smile — completed in a single appointment.",
    heroImage: IMG_OFFICE,
    intro: "Aesthetic dental fillings go beyond restoring function — they transform the appearance of your teeth. Using carefully shade-matched composite resin, our doctors can repair chips, close gaps, reshape uneven teeth, and create a naturally beautiful smile.",
    whenHeading: "What can aesthetic fillings correct?",
    scenarios: [
      {
        title: "Chipped or worn edges.",
        text: "Chipping and wear on the front teeth can make your smile look aged or uneven. Composite resin is applied in layers to rebuild the edges, creating a smooth, natural profile.",
        image: IMG_PATIENT,
      },
      {
        title: "Small gaps between teeth.",
        text: "Minor spacing and diastemas can be closed with bonding — a conservative, reversible alternative to veneers or braces that is completed in one visit without any preparation of the tooth.",
        image: IMG_FDENTIST,
      },
    ],
    prices: [
      { name: "Composite filling (tooth-coloured)", price: "Rs. 4,000 – 8,000"   },
      { name: "Dental bonding",                     price: "Rs. 6,000 – 12,000"  },
      { name: "Inlay / onlay (ceramic)",            price: "Rs. 18,000 – 28,000" },
    ],
    steps: [
      "The tooth surface is cleaned and lightly etched to ensure strong adhesion.",
      "The correct composite shade is selected by comparing against adjacent natural teeth.",
      "Composite is applied in thin layers, each sculpted and cured with a light.",
      "The final layer is shaped to mimic natural tooth contours and surface texture.",
      "The restoration is polished to a smooth finish that blends seamlessly with surrounding teeth.",
    ],
    specialistTags: ["Cosmetic Dentistry", "Restorative Dentistry"],
  },
  {
    id: "periodontal-treatment",
    title: "Periodontal Treatment",
    subtitle: "Conservative and laser treatment of gum disease — protecting your teeth and bone before the condition advances.",
    heroImage: IMG_DENTIST,
    intro: "Periodontal (gum) disease is one of the most common causes of tooth loss in adults. Caught early, it can be fully controlled with professional cleaning and improved home care. Advanced cases are treated with deep cleaning, laser therapy, and surgical procedures when necessary.",
    whenHeading: "Signs you may need periodontal treatment",
    scenarios: [
      {
        title: "Bleeding or swollen gums.",
        text: "Healthy gums do not bleed when brushed. Bleeding, redness, and swelling are the first signs of gingivitis — a reversible early stage of gum disease that responds well to a professional clean and improved home care.",
        image: IMG_MDENTIST,
      },
      {
        title: "Receding gums or loose teeth.",
        text: "As gum disease advances, the bone supporting the teeth is gradually destroyed. Deep cleaning (root planing) removes bacteria from below the gumline; laser therapy stimulates regeneration and reduces pocket depth.",
        image: IMG_OFFICE,
      },
    ],
    prices: [
      { name: "Ultrasonic scaling & polishing",              price: "Rs. 5,000 – 9,000"   },
      { name: "Deep cleaning / root planing (per quadrant)", price: "Rs. 8,000 – 14,000"  },
      { name: "Fluoride treatment",                          price: "Rs. 3,000"            },
      { name: "Gum disease therapy",                        price: "Rs. 12,000 – 20,000"  },
    ],
    steps: [
      "A full periodontal charting records pocket depths, bleeding points, and bone levels.",
      "Ultrasonic scaling removes plaque and tartar above and below the gumline.",
      "Deep cleaning (root planing) is performed under local anaesthesia for advanced pockets.",
      "Laser therapy may be used to decontaminate pockets and stimulate gum reattachment.",
      "A maintenance programme is established — typically a professional clean every 3–6 months.",
    ],
    specialistTags: ["General Dentistry", "Preventive Care"],
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    subtitle: "Saving infected or severely damaged teeth through precise endodontic treatment — virtually pain-free with modern techniques.",
    heroImage: IMG_FDENTIST,
    intro: "Root canal treatment removes the infected or inflamed pulp from inside the tooth, cleans and shapes the root canals, and seals them to prevent re-infection. With modern rotary instruments and effective anaesthesia, the procedure is comfortable and preserves your natural tooth.",
    whenHeading: "When is root canal treatment needed?",
    scenarios: [
      {
        title: "Tooth infection or abscess.",
        text: "When bacteria reach the pulp through deep decay or a crack, infection develops and can spread to the bone. Root canal treatment eliminates the infection, relieves pain, and saves the tooth from extraction.",
        image: IMG_DENTIST,
      },
      {
        title: "Deep decay reaching the nerve.",
        text: "Decay that has penetrated to the pulp cannot be treated with a filling alone. Removing the pulp, disinfecting the canals, and placing a crown restores the tooth to full function without extraction.",
        image: IMG_PATIENT,
      },
    ],
    prices: [
      { name: "Single-canal tooth (anterior)",   price: "Rs. 12,000 – 18,000" },
      { name: "Two-canal tooth (premolar)",       price: "Rs. 18,000 – 25,000" },
      { name: "Three-canal tooth (molar)",        price: "Rs. 25,000 – 35,000" },
      { name: "Re-treatment (previously treated)", price: "Rs. 30,000 – 45,000" },
      { name: "Post & core build-up",             price: "Rs. 8,000 – 14,000"  },
    ],
    steps: [
      "Local anaesthesia is administered — patients are surprised at how comfortable the procedure is.",
      "An access cavity is made through the crown to reach the pulp chamber.",
      "The infected pulp is removed using fine rotary instruments; canals are shaped and irrigated.",
      "Canals are filled with a biocompatible material (gutta-percha) and sealed permanently.",
      "A crown is recommended after treatment to protect the restored tooth long-term.",
    ],
    specialistTags: ["Root Canal"],
  },
  {
    id: "oral-hygiene",
    title: "Oral Hygiene & Whitening",
    subtitle: "Professional cleaning to remove tartar and stains, combined with whitening options for a brighter, healthier smile.",
    heroImage: IMG_PATIENT,
    intro: "Regular professional cleaning removes plaque and tartar that home brushing cannot reach, protecting against cavities and gum disease. We also offer safe, clinically supervised whitening to lighten the natural shade of your teeth by several tones.",
    whenHeading: "What does a professional clean involve?",
    scenarios: [
      {
        title: "Scaling and polishing.",
        text: "Ultrasonic scaling removes hard tartar deposits from all surfaces and between teeth. A polishing paste then removes surface stains from coffee, tea, and tobacco, leaving teeth feeling smooth and looking noticeably cleaner.",
        image: IMG_DENTIST,
      },
      {
        title: "Teeth whitening.",
        text: "Our in-clinic whitening uses a professionally applied bleaching gel activated to lighten teeth safely by 4–8 shades in a single session. Take-home trays are also available for gradual whitening at your own pace.",
        image: IMG_OFFICE,
      },
    ],
    prices: [
      { name: "Ultrasonic scaling & polishing", price: "Rs. 5,000 – 9,000"  },
      { name: "Fluoride treatment",              price: "Rs. 3,000"          },
      { name: "Fissure sealants (per tooth)",    price: "Rs. 2,500"          },
      { name: "Teeth whitening",                 price: "Rs. 18,000 – 25,000" },
    ],
    steps: [
      "A brief examination identifies any areas of concern before cleaning begins.",
      "Ultrasonic scaling removes calculus and hard deposits above and just below the gumline.",
      "Air polishing or a prophylaxis paste removes soft staining and biofilm.",
      "Fluoride varnish is applied to strengthen enamel and reduce sensitivity.",
      "Whitening trays are taken if required; instructions for home application are provided.",
    ],
    specialistTags: ["General Dentistry", "Preventive Care"],
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    subtitle: "Simple and surgical extractions performed gently and precisely — with PRF therapy available for faster, more comfortable healing.",
    heroImage: IMG_MDENTIST,
    intro: "When a tooth cannot be saved, extraction is carried out as gently as possible to preserve surrounding bone and tissue. We offer simple extractions for erupted teeth and surgical procedures for impacted wisdom teeth, using local anaesthesia or sedation.",
    whenHeading: "When is extraction necessary?",
    scenarios: [
      {
        title: "Severely decayed or broken teeth.",
        text: "When a tooth is too damaged for a filling or crown to restore it — due to extensive decay, fracture below the gumline, or failed root canal — removal is the safest option to eliminate pain and infection.",
        image: IMG_PATIENT,
      },
      {
        title: "Impacted wisdom teeth.",
        text: "Wisdom teeth that are partially or fully impacted can cause recurrent infection, pressure pain, and damage to adjacent teeth. Surgical removal under local anaesthesia or sedation resolves the problem permanently.",
        image: IMG_FDENTIST,
      },
    ],
    prices: [
      { name: "Simple extraction (milk tooth)",      price: "Rs. 3,500"  },
      { name: "Simple extraction (permanent tooth)", price: "Rs. 5,000"  },
      { name: "Surgical extraction",                price: "Rs. 12,000" },
      { name: "Wisdom tooth removal",               price: "Rs. 18,000" },
      { name: "PRF therapy (accelerated healing)",  price: "Rs. 8,000"  },
    ],
    steps: [
      "Local anaesthesia or sedation is administered for a completely comfortable procedure.",
      "For simple extractions, the tooth is gently loosened and removed with minimal trauma.",
      "Surgical extractions involve a small incision to access the tooth and remove it in sections if needed.",
      "PRF (platelet-rich fibrin) therapy can be applied to the socket to accelerate healing.",
      "Post-operative care instructions are provided; a follow-up is scheduled if needed.",
    ],
    specialistTags: ["Oral Surgery"],
  },
];
