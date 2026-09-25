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
  /** ids from PRICE_CATEGORIES in data/prices.ts */
  priceCategories: string[];
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
    subtitle: "An implant replaces the root of a missing tooth, providing a fixed replacement that is cared for in the same way as a natural one.",
    heroImage: IMG_PATIENT,
    intro: "When a tooth is lost, the bone that once supported it gradually changes shape. An implant replaces the root itself, which keeps that bone in use and provides a stable foundation for the replacement tooth. Unlike a conventional bridge, it does not rely on the teeth on either side, so healthy teeth are left untouched.",
    whenHeading: "When an implant is considered",
    scenarios: [
      {
        title: "A single missing tooth.",
        text: "The implant is placed where the root used to sit, and a crown is fitted on top once healing is complete. The teeth on either side are not drilled or reshaped, which is the main advantage over a conventional bridge.",
        image: IMG_DENTIST,
      },
      {
        title: "Several teeth missing together.",
        text: "A run of missing teeth does not always need an implant for each one. Implants at either end can carry a bridge between them, which keeps the number of surgical sites to a minimum.",
        image: IMG_OFFICE,
      },
      {
        title: "A full jaw.",
        text: "Where every tooth in a jaw is missing, a set of implants can support a fixed replacement arch. How many are required depends on the bone available, which is assessed before any treatment is planned.",
        image: IMG_PATIENT,
      },
    ],
    priceCategories: ["implants"],
    steps: [
      "Your jaw is examined and imaged so the position and depth of the implant can be planned.",
      "The area is fully numbed with local anaesthetic before anything begins.",
      "The implant is placed into the jawbone and the gum is closed over or around it.",
      "The implant is left to fuse with the bone. This takes time, and you will be given a schedule at your appointment.",
      "Once it has integrated, the crown is made to match your other teeth and fitted.",
    ],
    specialistTags: ["Implants"],
  },
  {
    id: "prosthetics",
    title: "Prosthetics: Teeth & Implants",
    subtitle: "Crowns, bridges and dentures that restore the shape, strength and appearance of teeth that are damaged or missing.",
    heroImage: IMG_FDENTIST,
    intro: "A tooth weakened by a large filling, a fracture or root canal treatment often needs more than another filling to hold it together. A crown covers the whole tooth and takes the force of biting off what remains of it. Where teeth are missing altogether, bridges and dentures replace them and restore normal chewing.",
    whenHeading: "When prosthetic work is needed",
    scenarios: [
      {
        title: "A tooth too damaged for a filling.",
        text: "Once a large part of a tooth has gone, a filling has little left to hold on to and the tooth is at risk of splitting. A crown encases what remains and protects it from further damage.",
        image: IMG_PATIENT,
      },
      {
        title: "A gap between healthy teeth.",
        text: "A bridge spans the gap, using the teeth on either side as support. It is fixed in place rather than removed for cleaning, so it feels much like a natural tooth.",
        image: IMG_OFFICE,
      },
      {
        title: "Several teeth missing.",
        text: "A denture replaces a number of teeth at once and is taken out for cleaning. It may replace a few teeth or a complete arch, depending on what is left.",
        image: IMG_DENTIST,
      },
    ],
    priceCategories: ["crowns"],
    steps: [
      "The tooth is assessed to decide whether a crown, bridge or denture is the right option.",
      "Where a crown or bridge is planned, the tooth is shaped to make room for it.",
      "An impression or scan is taken so the restoration can be made to fit precisely.",
      "A temporary covering protects the tooth while the permanent one is made.",
      "The finished restoration is checked for fit, colour and bite, then fitted.",
    ],
    specialistTags: ["Restorative Dentistry"],
  },
  {
    id: "dental-fillings",
    title: "Dental Fillings",
    subtitle: "Treatment for decayed, worn or chipped teeth, using materials matched to the natural colour of the tooth.",
    heroImage: IMG_DENTIST,
    intro: "Decay does not reverse on its own. Once it breaks through the enamel it spreads into the softer dentine beneath, and the sooner it is removed the less of the tooth is lost. A filling clears the damage and rebuilds the tooth so it can be used normally again.",
    whenHeading: "When a filling is needed",
    scenarios: [
      {
        title: "Decay.",
        text: "Sensitivity to cold or sweet food, or a visible mark on the tooth, often points to decay. Treated early, a filling is straightforward and preserves most of the natural tooth.",
        image: IMG_PATIENT,
      },
      {
        title: "A chipped or worn tooth.",
        text: "Teeth chip on hard food and wear down over years of grinding. Filling material rebuilds the missing part and restores the original shape.",
        image: IMG_FDENTIST,
      },
      {
        title: "A filling that has failed.",
        text: "Older fillings can leak or fracture, letting decay develop underneath. Replacing one means removing the old material along with any decay beneath it.",
        image: IMG_OFFICE,
      },
    ],
    priceCategories: ["fillings", "paediatric"],
    steps: [
      "The tooth is examined, and an X-ray is taken where the decay is not fully visible.",
      "Local anaesthetic is given so the tooth and the area around it are numb.",
      "The decayed part of the tooth is removed and the cavity is cleaned.",
      "The filling material is placed and shaped to match the tooth.",
      "Your bite is checked and the filling smoothed so it feels natural.",
    ],
    specialistTags: ["General Dentistry", "Restorative Dentistry"],
  },
  {
    id: "teeth-straightening",
    title: "Teeth Straightening",
    subtitle: "Braces and clear aligners that move teeth into better alignment, for both adults and teenagers.",
    heroImage: IMG_FDENTIST,
    intro: "Crowded or crooked teeth are harder to clean, which makes decay and gum problems more likely over time, so straightening them is not only a question of appearance. Treatment works by applying gentle, sustained pressure, so that teeth move gradually into position. The method is chosen to suit the case and the patient.",
    whenHeading: "Ways teeth can be straightened",
    scenarios: [
      {
        title: "Clear aligners.",
        text: "A sequence of removable transparent trays, each slightly different from the last. They are taken out to eat and to brush, and are difficult for others to notice, which is why many adults prefer them.",
        image: IMG_PATIENT,
      },
      {
        title: "Fixed braces.",
        text: "Brackets fixed to the teeth and joined by a wire. Because they are not removed they work continuously, and they are often the better choice where teeth need more substantial movement.",
        image: IMG_DENTIST,
      },
      {
        title: "Keeping the result.",
        text: "Teeth drift back towards their old positions if nothing holds them. A retainer is worn once treatment finishes, and it is what keeps the result in place long term.",
        image: IMG_OFFICE,
      },
    ],
    priceCategories: ["orthodontics"],
    steps: [
      "Your teeth and bite are assessed, and records are taken so the movement required can be planned.",
      "The options suited to your case are explained, along with the expected length of treatment.",
      "Aligners or braces are fitted, and you are shown how to look after them.",
      "You return at intervals so progress can be checked and adjustments made.",
      "When treatment finishes, a retainer is provided to hold the teeth in their new position.",
    ],
    specialistTags: ["Aligners"],
  },
  {
    id: "aesthetic-fillings",
    title: "Aesthetic Dental Fillings",
    subtitle: "Tooth-coloured work that repairs chips, closes small gaps and improves the appearance of front teeth.",
    heroImage: IMG_OFFICE,
    intro: "Aesthetic work uses the same materials as an ordinary filling, applied with a different purpose. Rather than only repairing damage, it reshapes and rebuilds teeth so they sit comfortably alongside those around them. In most cases no healthy tooth is removed, which makes it one of the more conservative ways to improve a smile.",
    whenHeading: "What can be improved",
    scenarios: [
      {
        title: "Chipped or uneven edges.",
        text: "Front teeth chip easily and wear unevenly over the years. Material is built up along the edge and shaped until the tooth matches its neighbours again.",
        image: IMG_PATIENT,
      },
      {
        title: "Small gaps between teeth.",
        text: "A narrow space between front teeth can be closed by adding material to the adjoining surfaces. Where the gap is small this is simpler than veneers or orthodontic treatment.",
        image: IMG_FDENTIST,
      },
      {
        title: "Discoloured or misshapen teeth.",
        text: "A tooth that sits slightly out of line, or that has darkened over time, can be reshaped or covered so that it blends with the rest.",
        image: IMG_DENTIST,
      },
    ],
    priceCategories: ["fillings", "crowns"],
    steps: [
      "Your teeth are looked at together, since the aim is a result that matches everything around it.",
      "A shade is chosen by comparing materials against your own teeth in natural light.",
      "The surface of the tooth is prepared so that the material bonds securely.",
      "The material is applied in layers and shaped as it is built up.",
      "It is polished so that the surface catches the light in the same way as enamel.",
    ],
    specialistTags: ["Cosmetic Dentistry", "Restorative Dentistry"],
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    subtitle: "Treatment that saves a tooth when the nerve inside it has become infected or inflamed.",
    heroImage: IMG_FDENTIST,
    intro: "Inside every tooth is a soft core of nerve and blood vessels. If decay or a crack allows bacteria to reach it, that tissue becomes infected, and the pain can be considerable. Root canal treatment removes the infected tissue, cleans the space it occupied and seals it. The tooth stays in place and continues to work.",
    whenHeading: "When root canal treatment is needed",
    scenarios: [
      {
        title: "Persistent toothache.",
        text: "Pain that lingers after something hot or cold, wakes you at night, or throbs without any cause usually means the nerve is involved. At that stage a filling will not settle it.",
        image: IMG_DENTIST,
      },
      {
        title: "Infection at the root.",
        text: "An abscess forms when infection reaches the tip of the root and spreads into the surrounding bone. It may show as swelling or an unpleasant taste, and sometimes causes no pain at all.",
        image: IMG_PATIENT,
      },
      {
        title: "A tooth already treated.",
        text: "Occasionally a tooth that has been treated before becomes sore again. It can usually be reopened, cleaned again and resealed rather than removed.",
        image: IMG_OFFICE,
      },
    ],
    priceCategories: ["endodontics"],
    steps: [
      "The tooth is examined and X-rayed to confirm the nerve is affected and to see the shape of the roots.",
      "Local anaesthetic is given. The treatment itself is not painful, and it relieves the pain you arrived with.",
      "An opening is made through the top of the tooth to reach the canals inside.",
      "The infected tissue is removed, and the canals are cleaned and shaped.",
      "The canals are sealed and the tooth is rebuilt, usually with a crown to protect it.",
    ],
    specialistTags: ["Root Canal"],
  },
  {
    id: "oral-hygiene",
    title: "Oral Hygiene & Whitening",
    subtitle: "Professional cleaning, fluoride treatment and whitening, for healthier gums and a brighter smile.",
    heroImage: IMG_PATIENT,
    intro: "Plaque hardens into deposits that brushing cannot shift, and it is those deposits that irritate the gums. A professional clean removes them from the tooth surfaces and from just below the gumline. It is the single most effective appointment for preventing gum disease, and it leaves teeth looking noticeably cleaner.",
    whenHeading: "What a hygiene visit covers",
    scenarios: [
      {
        title: "Scaling and polishing.",
        text: "Hardened deposits are removed from the teeth and from just under the gum, and the surfaces are then polished. Gums that bled during brushing usually settle within a couple of weeks afterwards.",
        image: IMG_DENTIST,
      },
      {
        title: "Fluoride treatment.",
        text: "Fluoride strengthens the surface of the enamel and helps to reduce sensitivity. It is applied at the end of a clean and takes very little time.",
        image: IMG_OFFICE,
      },
      {
        title: "Whitening.",
        text: "Whitening lightens the natural colour of the teeth. It works on the tooth itself, so existing crowns and fillings do not change shade, which is worth knowing before starting.",
        image: IMG_FDENTIST,
      },
    ],
    priceCategories: ["hygiene"],
    steps: [
      "Your teeth and gums are examined, and any areas of concern are noted.",
      "Deposits are removed from the tooth surfaces and from just below the gumline.",
      "The teeth are polished to lift surface staining from food, tea and tobacco.",
      "Fluoride is applied where it will be of benefit.",
      "You are shown the areas being missed at home, and a date for the next visit is agreed.",
    ],
    specialistTags: ["General Dentistry", "Preventive Care"],
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    subtitle: "Removal of teeth that cannot be saved, including wisdom teeth, carried out with the area fully numbed.",
    heroImage: IMG_MDENTIST,
    intro: "Removing a tooth is a last resort, and most teeth can be saved by other means. Where a tooth is beyond repair, or is causing problems for those around it, taking it out relieves the pain and stops infection spreading. The area is fully numbed beforehand, and what to expect afterwards is explained before you leave.",
    whenHeading: "When a tooth is removed",
    scenarios: [
      {
        title: "A tooth beyond repair.",
        text: "Extensive decay, a fracture below the gumline, or an infection that has not settled can leave a tooth that cannot be restored. Removing it ends the pain and clears the source of infection.",
        image: IMG_PATIENT,
      },
      {
        title: "Wisdom teeth.",
        text: "Wisdom teeth often arrive at an angle or only partly through the gum. They trap food, are difficult to clean, and can become repeatedly infected or press against the tooth in front.",
        image: IMG_FDENTIST,
      },
      {
        title: "Loose teeth.",
        text: "Advanced gum disease can loosen a tooth to the point where the bone no longer holds it firmly. Where it cannot be stabilised, removal is usually more comfortable than leaving it.",
        image: IMG_DENTIST,
      },
    ],
    priceCategories: ["extractions"],
    steps: [
      "The tooth is examined and X-rayed so the roots and the surrounding bone can be seen.",
      "Local anaesthetic is given, and the area is tested before anything begins.",
      "The tooth is loosened and removed. Where it sits below the gum, a small incision is needed first.",
      "The socket is cleaned, and stitches are placed where they are required.",
      "Aftercare is explained, covering bleeding, eating and pain relief over the first few days.",
    ],
    specialistTags: ["Oral Surgery"],
  },
  {
    id: "childrens-dentistry",
    title: "Children's Dentistry",
    subtitle: "Dental care for children, from first visits and cleaning through to fillings and extractions.",
    heroImage: IMG_PATIENT,
    intro: "A child's first experiences at a dentist shape how they feel about it for years afterwards. Appointments are unhurried, everything is explained before it happens, and a first visit often involves no treatment at all. Children are seen at both branches.",
    whenHeading: "What we treat",
    scenarios: [
      {
        title: "First visits and cleaning.",
        text: "Early visits allow small problems to be found while they are still small, and let a child grow used to the surroundings. Cleaning lifts what brushing at home has missed, and gives us the chance to show them how to brush properly.",
        image: IMG_DENTIST,
      },
      {
        title: "Fillings in baby teeth.",
        text: "Decay in a baby tooth still needs treating. It causes the same discomfort as in an adult tooth, and an untreated infection can affect the adult tooth forming beneath it. Tooth-coloured materials are used.",
        image: IMG_FDENTIST,
      },
      {
        title: "Extractions.",
        text: "Sometimes a baby tooth cannot be saved, or is holding up the adult tooth behind it. Where removal is the right course, it is done gently, and the reasons are explained to both child and parent first.",
        image: IMG_OFFICE,
      },
    ],
    priceCategories: ["paediatric"],
    steps: [
      "The visit begins with a look and a conversation, so your child knows what will happen before it does.",
      "Teeth and gums are examined, and anything needing attention is pointed out to you.",
      "Any treatment agreed is carried out, with breaks whenever your child needs one.",
      "Brushing and diet are talked through with you before you leave.",
      "A date for the next check-up is arranged.",
    ],
    specialistTags: ["Preventive Care", "General Dentistry"],
  },
];
