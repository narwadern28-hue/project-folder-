import type { LucideIcon } from "lucide-react";
import {
  Sofa,
  Store,
  CookingPot,
  Briefcase,
  KeyRound,
  MessagesSquare,
  PenTool,
  Hammer,
} from "lucide-react";

/* ------------------------------- Studio info ------------------------------ */

export const studio = {
  name: "Ashoka Interiors",
  tagline: "Rooms that hold a quiet kind of luxury",
  city: "New Delhi",
  phone: "+91 98110 24567",
  phoneHref: "tel:+919811024567",
  email: "hello@ashokainteriors.in",
  emailHref: "mailto:hello@ashokainteriors.in",
  address: "Studio 14, First Floor, Anand Lok, New Delhi 110049",
  hours: "Mon – Sat · 10:00 – 19:00",
  established: 2011,
  instagram: "https://instagram.com",
  pinterest: "https://pinterest.com",
};

/* ------------------------------- Categories ------------------------------- */

export interface Category {
  slug: string;
  label: string;
  tagline: string;
}

export const categories: Category[] = [
  {
    slug: "residential",
    label: "Residential",
    tagline: "Homes composed around the people who live in them.",
  },
  {
    slug: "commercial",
    label: "Commercial",
    tagline: "Retail and hospitality spaces with a point of view.",
  },
  {
    slug: "modular-kitchens",
    label: "Modular Kitchens",
    tagline: "Precision-built kitchens, crafted like furniture.",
  },
  {
    slug: "office-interiors",
    label: "Office Interiors",
    tagline: "Workplaces that make Monday feel deliberate.",
  },
  {
    slug: "turnkey-projects",
    label: "Turnkey Projects",
    tagline: "From bare shell to final styling — one team, one hand.",
  },
];

export const categoryBySlug = (slug?: string) =>
  categories.find((c) => c.slug === slug);

/* -------------------------------- Projects -------------------------------- */

export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  year: string;
  image: string;
  scope: string;
  size: string;
  duration: string;
  brief: string;
  story: string[];
  gallery: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "kala-villa",
    title: "The Kala Villa",
    category: "Residential",
    categorySlug: "residential",
    location: "New Delhi",
    year: "2024",
    image: "/images/project-kala-villa.jpg",
    scope: "Full-home interior architecture",
    size: "6,200 sq ft",
    duration: "14 months",
    brief:
      "A family villa rebuilt around a double-height living room, warm walnut panelling and a collection of inherited textiles.",
    story: [
      "The clients had lived abroad for a decade and returned with two requests: a house that felt unmistakably Indian in its warmth, and nothing that shouted. We answered with quiet walnut panelling, lime-washed walls and brass that will be allowed to patina — a palette that deepens with the years rather than dating.",
      "Every piece of loose furniture was drawn in our studio and built with two partner workshops in Rajasthan. The living room's double-height wall holds the family's inherited textiles, reframed as a single, gallery-calm composition. It is the room they now describe, simply, as 'home'.",
    ],
    gallery: ["/images/materials.jpg", "/images/craft.jpg"],
    featured: true,
  },
  {
    id: "mehra-residence",
    title: "Mehra Residence",
    category: "Residential",
    categorySlug: "residential",
    location: "Gurugram",
    year: "2024",
    image: "/images/project-mehra.jpg",
    scope: "4BHK apartment, interiors + styling",
    size: "3,400 sq ft",
    duration: "11 months",
    brief:
      "A builder-finish apartment softened into a warm first home — layered textiles, deep tones and mornings of east light.",
    story: [
      "The apartment arrived as the usual developer palette: glossy vitrified floors, cold white walls, aluminium-framed windows. Rather than strip it bare, we layered over it — engineered oak flooring throughout, fluted panelling to absorb the corridors, and lighting replanned around how the family actually spends its evenings.",
      "The master bedroom, once the bleakest room in the flat, is now the gentlest: a fabric-wrapped headboard wall, dimmable cove light and blackout drapery in raw silk. The before-and-after tells the story better than we can.",
    ],
    gallery: ["/images/after.jpg", "/images/blog-materials.jpg"],
    featured: true,
  },
  {
    id: "crescent-penthouse",
    title: "Crescent Penthouse",
    category: "Residential",
    categorySlug: "residential",
    location: "New Delhi",
    year: "2023",
    image: "/images/project-crescent.jpg",
    scope: "Penthouse dining + living floors",
    size: "2,800 sq ft",
    duration: "9 months",
    brief:
      "A dining-first penthouse for a family that entertains weekly — one long oak table, considered light, nothing precious.",
    story: [
      "The brief was unconventional: design the house outward from the dining table. The clients host every Friday, often for fourteen people. We planned the penthouse around a single three-metre oak table, pendant light tuned to candlelight warmth, and acoustically absorptive wall finishes that keep conversation intimate.",
      "Circulation was reworked so the kitchen could serve quietly without breaking the room's rhythm. It is a house built for the table, and everything else politely steps aside.",
    ],
    gallery: ["/images/blog-craft.jpg", "/images/hero.jpg"],
  },
  {
    id: "terracotta-oak",
    title: "Terracotta & Oak Café",
    category: "Commercial",
    categorySlug: "commercial",
    location: "Khan Market, New Delhi",
    year: "2024",
    image: "/images/project-cafe.jpg",
    scope: "Café interiors, furniture + lighting",
    size: "1,650 sq ft",
    duration: "6 months",
    brief:
      "A forty-cover café where hand-troweled terracotta plaster, bentwood oak and low amber light make an afternoon stretch pleasantly long.",
    story: [
      "Hospitality design is theatre with a working kitchen behind it. For Terracotta & Oak we wanted the room to feel discovered rather than designed — hand-troweled plaster in our signature terracotta, bentwood chairs that lighten the floor, and shelving that holds the owners' collection of ceramics.",
      "Light does most of the work: amber puddles over each table, grazed plaster walls, and a back counter lit like a still life. Footfall photography tells us the corner banquette is now the most photographed seat in the market.",
    ],
    gallery: ["/images/blog-materials.jpg", "/images/craft.jpg"],
    featured: true,
  },
  {
    id: "aurelia-lobby",
    title: "Aurelia House Lobby",
    category: "Commercial",
    categorySlug: "commercial",
    location: "Jaipur",
    year: "2023",
    image: "/images/project-lobby.jpg",
    scope: "Boutique hotel arrival experience",
    size: "2,100 sq ft",
    duration: "8 months",
    brief:
      "A boutique hotel lobby that behaves like a private drawing room — one long chandelier, deep seating, no transaction counter in sight.",
    story: [
      "Aurelia House asked for a lobby that felt like arriving at a well-kept family home rather than a hotel. We removed the conventional reception desk entirely; check-in happens over tea, seated. The chandelier — a single fifteen-foot brass and glass piece — was made in situ over six weeks.",
      "Materials were sourced within Rajasthan: Jaisalmer stone underfoot, hand-blocked fabric panels from Sanganer, and jaali screens that turn the hard afternoon sun into lace.",
    ],
    gallery: ["/images/project-asana.jpg", "/images/materials.jpg"],
  },
  {
    id: "walnut-kitchen",
    title: "The Walnut Kitchen",
    category: "Modular Kitchens",
    categorySlug: "modular-kitchens",
    location: "New Delhi",
    year: "2024",
    image: "/images/project-kitchen-walnut.jpg",
    scope: "Modular kitchen, design + build",
    size: "240 sq ft",
    duration: "10 weeks",
    brief:
      "Fluted walnut, handleless shutters and a stone worktop — a modular kitchen detailed like cabinetry, built like machinery.",
    story: [
      "Our kitchens begin with the cook, not the catalogue. Here, a serious home cook needed commercial logic in a domestic envelope: a working triangle compressed to five steps, drawers where every pot is visible, and a spice pull-out at exactly the right hand.",
      "The fluted walnut fronts are our own modular system — factory-built for precision, hand-finished in the studio so the grain reads as one continuous surface. Nothing rattles, nothing juts, and the room is silent when everything is in motion.",
    ],
    gallery: ["/images/blog-craft.jpg", "/images/materials.jpg"],
  },
  {
    id: "marble-brass-kitchen",
    title: "Marble & Brass Kitchen",
    category: "Modular Kitchens",
    categorySlug: "modular-kitchens",
    location: "Gurugram",
    year: "2023",
    image: "/images/project-kitchen-marble.jpg",
    scope: "Island kitchen, design + build",
    size: "310 sq ft",
    duration: "12 weeks",
    brief:
      "A family kitchen around a monolithic island — veined marble, unlacquered brass and storage that swallows the everyday.",
    story: [
      "The island is the household: breakfast at seven, homework at four, wine at eight. We detailed it as a single solid gesture — a waterfall marble top, brass inlay along the toe-kick, and seating that tucks fully away when the kitchen becomes a working galley.",
      "Behind the calm face is forty-two linear feet of storage. Tall units hide the appliances; a pocket-door bar disappears when guests arrive. Warmth comes from the smallest decisions: brass left unlacquered so the family's touch polishes it over the years.",
    ],
    gallery: ["/images/service-bathroom.jpg", "/images/blog-materials.jpg"],
    featured: true,
  },
  {
    id: "meridian-studio",
    title: "Meridian Studio Office",
    category: "Office Interiors",
    categorySlug: "office-interiors",
    location: "Noida",
    year: "2024",
    image: "/images/project-office-studio.jpg",
    scope: "Workspace for a 20-person practice",
    size: "3,900 sq ft",
    duration: "5 months",
    brief:
      "An architecture practice's own studio — long shared tables, a library at the heart, and daylight given to the desks, not the cabins.",
    story: [
      "The partners' first instruction was unusual: the principals sit in the darkest corner, the interns get the windows. We organised the floor as one continuous bench of shared tables around a central materials library, which doubles as the firm's memory.",
      "Acoustics carried the design — cork-wrapped walls, fabric baffles, and a floor of engineered oak that quiets footsteps. The studio reports that the room 'sounds calm' even at full occupancy; for a workplace, there is no higher compliment.",
    ],
    gallery: ["/images/craft.jpg", "/images/blog-small.jpg"],
  },
  {
    id: "cedar-workspace",
    title: "Cedar & Co. Workspace",
    category: "Office Interiors",
    categorySlug: "office-interiors",
    location: "New Delhi",
    year: "2023",
    image: "/images/project-office-cedar.jpg",
    scope: "Executive suite + boardroom",
    size: "2,600 sq ft",
    duration: "4 months",
    brief:
      "A family office drawn like a library — cedar bookshelves, deep leather and a boardroom that seats decisions, not committees.",
    story: [
      "Cedar & Co. wanted the opposite of the glassy startup floor: a room with weight, where documents are read and decisions are kept. We paneled the suite in straight-grain cedar, lit the shelves like a private library, and kept technology invisible until it is needed.",
      "The boardroom table is a single plank of Indian laurel, four metres long. It will outlast every lease the company signs.",
    ],
    gallery: ["/images/blog-craft.jpg", "/images/hero.jpg"],
    featured: true,
  },
  {
    id: "asana-house",
    title: "The Asana House",
    category: "Turnkey Projects",
    categorySlug: "turnkey-projects",
    location: "Chhatarpur, New Delhi",
    year: "2022",
    image: "/images/project-asana.jpg",
    scope: "Turnkey build: shell to styling",
    size: "9,500 sq ft",
    duration: "22 months",
    brief:
      "A farmhouse delivered as a single unbroken thought — staircase in floating oak, courtyards of filtered light, every vendor ours.",
    story: [
      "Turnkey work is where a studio proves its discipline. For Asana House we held the entire thread: civil changes, the floating oak staircase, custom metalwork, landscaping interfaces and finally the styling — one team, one drawing set, one accountable hand.",
      "The clients visited the site four times in twenty-two months. The house they walked into at handover had monogrammed linen in the cupboards and their books already on the shelves. That is what turnkey means to us.",
    ],
    gallery: ["/images/hero.jpg", "/images/materials.jpg"],
    featured: true,
  },
  {
    id: "highgrove-duplex",
    title: "Highgrove Duplex",
    category: "Turnkey Projects",
    categorySlug: "turnkey-projects",
    location: "Gurugram",
    year: "2023",
    image: "/images/project-highgrove.jpg",
    scope: "Turnkey duplex, shell to styling",
    size: "4,400 sq ft",
    duration: "13 months",
    brief:
      "A sky-facing duplex planned around dusk — low-slung seating, a reading ledge at the window line, and city light as artwork.",
    story: [
      "The fourteenth-floor view was the client's real artwork, so the interiors learned to sit down. Furniture stays low, colours stay earthen, and the window line carries a continuous oak ledge — part seat, part desk, part altar to the evening.",
      "Delivered turnkey, the duplex was styled to the last cushion before handover. The family sent a photograph that first night: lights off, city on, two chairs pulled to the ledge. We still have it pinned in the studio.",
    ],
    gallery: ["/images/after.jpg", "/images/blog-small.jpg"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

/* -------------------------------- Services -------------------------------- */

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  summary: string;
  description: string;
  features: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Interiors",
    icon: Sofa,
    image: "/images/project-kala-villa.jpg",
    summary:
      "Full home design — from the first moodboard to the last cushion — for apartments, villas and farmhouses.",
    description:
      "A home should hold the shape of the life lived inside it. We begin with your rituals — where the morning light falls, how you entertain, what you inherited and cannot part with — and compose rooms around them. Every drawing, sample and site visit is handled by our own team.",
    features: [
      "Space planning & interior architecture",
      "Custom furniture, designed and built in-house",
      "Lighting design in three warm layers",
      "Art, textile & object curation",
    ],
    idealFor: "Apartments, villas, farmhouses & renovations",
  },
  {
    slug: "commercial",
    title: "Commercial Spaces",
    icon: Store,
    image: "/images/project-cafe.jpg",
    summary:
      "Retail, cafés and hospitality interiors that give a brand its room — and keep guests lingering.",
    description:
      "Commercial rooms earn their keep. We design spaces that photograph beautifully, work hard at full occupancy, and age gracefully under daily wear — because a hospitality interior is theatre, operations and brand, all in one envelope.",
    features: [
      "Concept-to-opening design direction",
      "Durable, code-compliant material palettes",
      "Signature lighting & millwork moments",
      "Furniture that survives service",
    ],
    idealFor: "Cafés, restaurants, boutiques & hotel public areas",
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    icon: CookingPot,
    image: "/images/project-kitchen-marble.jpg",
    summary:
      "Precision-built kitchens on our own modular system — engineered for the serious Indian cook.",
    description:
      "Our kitchens are designed around the hand that cooks. Working triangles measured in steps, drawers that show every vessel, spice pull-outs at the correct hand, and shutters factory-built for tolerance, hand-finished for warmth.",
    features: [
      "Cook-first layout & ergonomics study",
      "In-house modular system, 10-year hardware warranty",
      "Stone, quartz & solid-surface worktops",
      "Appliance integration & concealed services",
    ],
    idealFor: "New kitchens & full kitchen renovations",
  },
  {
    slug: "office-interiors",
    title: "Office Interiors",
    icon: Briefcase,
    image: "/images/project-office-cedar.jpg",
    summary:
      "Workplaces planned for focus — from executive suites to studios where teams make things.",
    description:
      "A good office is an acoustic, ergonomic and emotional instrument. We plan for daylight at the desks, quiet in the corners and materials that carry the company's character without a single logo on the wall.",
    features: [
      "Workplace strategy & stack planning",
      "Acoustic & lighting engineering",
      "Executive suites and boardrooms",
      "Phased execution for live offices",
    ],
    idealFor: "Studios, family offices, HQs & executive floors",
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Projects",
    icon: KeyRound,
    image: "/images/project-asana.jpg",
    summary:
      "One contract, one team, one accountable hand — from bare shell to keys and styled shelves.",
    description:
      "Turnkey is our deepest discipline. We hold the entire thread — civil changes, custom metalwork, services, landscaping interfaces and final styling — under a single drawing set. You visit when you wish; you move into a finished, considered home.",
    features: [
      "Single-contract design & build",
      "In-house project management & QC",
      "Transparent, milestone-based billing",
      "Handover styled to the last book",
    ],
    idealFor: "Villas, farmhouses, duplexes & large apartments",
  },
];

/* ------------------------------ Process steps ----------------------------- */

export interface ProcessStep {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    icon: MessagesSquare,
    description:
      "We walk the site together, listen to how you live, and leave with a measured brief, an honest budget band and a realistic timeline.",
    details: ["Site visit & brief", "Budget conversation", "Scope & timeline"],
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    description:
      "Concepts become drawings, drawings become rooms you can almost walk into — 3D views, material boards and samples you can touch.",
    details: ["Concept & moodboards", "3D visualisation", "Materials & costing"],
  },
  {
    number: "03",
    title: "Execution",
    icon: Hammer,
    description:
      "Our own site teams and partner workshops build the design — with weekly photo reports and quality checks you never have to chase.",
    details: ["Civil & services work", "Custom furniture build", "Weekly site reports"],
  },
  {
    number: "04",
    title: "Handover",
    icon: KeyRound,
    description:
      "We style the shelves, walk you through every switch and hinge, and stay reachable long after the keys change hands.",
    details: ["Styling & snagging", "Care walkthrough", "Aftercare support"],
  },
];

/* ------------------------------ Testimonials ------------------------------ */

export interface Testimonial {
  name: string;
  context: string;
  location: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Anita & Rohan Mehra",
    context: "Mehra Residence · 4BHK Apartment",
    location: "Gurugram",
    quote:
      "They did not decorate our flat; they translated the way we live into rooms. Sixteen weeks after the first sketch, we walked into a home that already felt like it had our history in it. Friends assume we have lived here for years.",
  },
  {
    name: "Vikram Sethi",
    context: "Cedar & Co. · Executive Suite",
    location: "New Delhi",
    quote:
      "I asked for a room with weight, and Ashoka delivered a suite that has settled every negotiation held inside it. The boardroom table alone is worth the fee — clients touch it on the way in, and the tone of the meeting changes.",
  },
  {
    name: "Priya Nair",
    context: "The Kala Villa · Private Residence",
    location: "New Delhi",
    quote:
      "What struck us was the honesty. When a budget line felt indulgent, they said so. When a detail mattered, they fought for it quietly. The house is warm in a way photographs cannot hold — you have to stand in the evening light to understand.",
  },
  {
    name: "Arjun Khanna",
    context: "Terracotta & Oak · Café",
    location: "Khan Market, New Delhi",
    quote:
      "Our corner banquette is now photographed forty times a day. But the real design victory is invisible: the room survives full service, turns tables gracefully, and still looks hand-made at close range. That balance is rare.",
  },
  {
    name: "Sana Qureshi",
    context: "Highgrove Duplex · Turnkey",
    location: "Gurugram",
    quote:
      "We visited the site four times in thirteen months and never once worried. At handover the linen was monogrammed and our books were on the shelves. I did not know this level of care still existed as a service.",
  },
];

/* --------------------------------- Journal -------------------------------- */

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  pullQuote: string;
  content: { heading?: string; paragraphs: string[] }[];
}

export const posts: Post[] = [
  {
    slug: "honest-materials",
    title: "The Quiet Luxury of Honest Materials",
    category: "Materials",
    date: "March 2025",
    readTime: "6 min read",
    excerpt:
      "Stone that looks like stone, wood allowed to age, brass that keeps a record of touch — why we specify for the patina, not the photograph.",
    image: "/images/blog-materials.jpg",
    pullQuote:
      "A material that cannot age beautifully was never luxurious to begin with.",
    content: [
      {
        paragraphs: [
          "There is a particular kind of disappointment in walking into a two-year-old interior that photographs perfectly and feels exhausted. Laminates lifting at the corners. Paints that cannot be wiped. Metals that were chrome on day one and regret by month eight. Almost always, the root cause is the same: the materials were chosen for the handover photograph, not for the life that follows it.",
          "At the studio we keep a small shelf of aged samples — a piece of unlacquered brass from a 2016 kitchen, a walnut edge from a staircase that has been climbed forty thousand times, a lime plaster offcut marked by the hands of a house. Clients are invited to touch them before we discuss a single colour. Nearly every brief changes after they do.",
        ],
      },
      {
        heading: "Specify for year ten, not day one",
        paragraphs: [
          "Honest materials share a single quality: they record time instead of resisting it. Solid wood gains depth at the hand's resting points. Natural stone holds its minor stains like a diary. Brass and bronze darken where they are touched and stay bright where they are not — a living map of the household's habits.",
          "Engineered alternatives imitate this warmth photographically, and for the first months the resemblance is convincing. The difference announces itself slowly, in edge wear and cleaning cycles, until the imitation needs replacing and the honest material merely needs admiring.",
        ],
      },
      {
        heading: "Where we allow the synthetic",
        paragraphs: [
          "None of this is dogma. In a kitchen's splash zone, in a commercial washroom, under a heavy-use worktop, we specify engineered quartz and high-performance laminates without apology. The principle is not purity — it is placing honesty where the hand and eye will meet it daily, and performance where physics demands it.",
          "The brief, then, is simple: buy the material once, let it age in public, and let the room grow more itself every year you live in it.",
        ],
      },
    ],
  },
  {
    slug: "warm-minimalism-small-homes",
    title: "Warm Minimalism: Designing Calm into Compact City Homes",
    category: "Design Approach",
    date: "January 2025",
    readTime: "7 min read",
    excerpt:
      "Minimalism fails when it forgets warmth. In a 900 sq ft apartment, calm is designed through depth, texture and light — not emptiness.",
    image: "/images/blog-small.jpg",
    pullQuote: "Calm is not the absence of things. It is the absence of noise — visual, acoustic, spatial.",
    content: [
      {
        paragraphs: [
          "Most city apartments we are asked to calm down share three traits: not enough storage, too many finishes, and light arriving from exactly one direction. The instinct is to strip the room bare — to buy emptiness as a style. But bare rooms do not calm people; they unsettle them. The goal is warmth without clutter, and that is a design problem, not a shopping problem.",
        ],
      },
      {
        heading: "One finish, many textures",
        paragraphs: [
          "Our first move in a compact home is to reduce the palette to one dominant warm neutral — a limewash, an oak, a linen — and then vary only its texture. The eye reads continuity as space. The same wall colour crossing from living room to corridor to bedroom quietly erases the boundaries that make small homes feel small.",
          "Depth replaces decoration: a fluted panel, a woven headboard, a shelf of objects the family actually loves. Minimalism that keeps meaning in the room stays warm; minimalism that evicts it becomes a hotel corridor.",
        ],
      },
      {
        heading: "Light in three warm layers",
        paragraphs: [
          "Compact homes survive on light discipline. We plan ambient light low and warm — 2700K, always dimmable — task light precisely where hands work, and one accent per room: a picture light, a niche, a candle-warm pendant over the table. Three layers, no more.",
          "The final instrument is acoustic. A cork-wrapped wall, an upholstered bench, lined curtains — anything that softens echo lowers the room's heart rate. Clients rarely name it, but they always feel it. Calm is a material too, and it is built, not bought.",
        ],
      },
    ],
  },
  {
    slug: "craft-of-joinery",
    title: "Why We Still Draw Joinery by Hand",
    category: "Craft",
    date: "November 2024",
    readTime: "5 min read",
    excerpt:
      "The last five percent of a detail carries ninety percent of its feeling. Notes from the workshop floor on mitres, reveals and shadow gaps.",
    image: "/images/blog-craft.jpg",
    pullQuote: "You do not notice a perfect mitre. You only ever notice a bad one.",
    content: [
      {
        paragraphs: [
          "Every custom piece that leaves our studio begins as a hand-drawn joinery sheet — pencil, scale rule, and the carpenter standing beside the designer. It is slower than exporting a CNC file, and we have no plans to stop. Drawing by hand forces the four decisions that machines are happy to skip: where the grain turns a corner, how a reveal catches shadow, what the hand meets first, and what the eye forgives.",
        ],
      },
      {
        heading: "Details that carry the room",
        paragraphs: [
          "A shadow gap, held at a disciplined ten millimetres, lets a wall of panelling float instead of thudding into the floor. A chamfered edge on a shelf is the difference between furniture that feels airbrushed and furniture that feels grown. These are three-hundred-rupee decisions that make three-lakh impressions.",
          "Our partner workshops in Rajasthan keep archives of these sheets going back to our founding year. Apprentices learn to read the pencil before they are allowed near the machines — because the machine will always cut exactly what it is told, and someone in the chain must know what is worth saying.",
        ],
      },
    ],
  },
];

/* ----------------------------------- FAQs --------------------------------- */

export const faqs = [
  {
    question: "How does the free consultation work?",
    answer:
      "A 45-minute session at our studio or your site. We discuss how you live, walk the space, and leave you with a written scope, an honest budget band and a realistic timeline. There is no obligation and no sales choreography — you keep the notes either way.",
  },
  {
    question: "Which cities do you work in?",
    answer:
      "Our studio is in New Delhi, and most of our active sites are across Delhi NCR, Jaipur and Chandigarh. For turnkey and hospitality projects we travel further — recent work has taken us to Goa, Dehradun and Coimbatore.",
  },
  {
    question: "What budgets do you typically work with?",
    answer:
      "Our full-home projects generally begin at ₹2,500 per sq ft for interiors, while modular kitchens start near ₹6.5 lakh. Turnkey design-build is quoted after the first site study. If we are not the right fit for your budget, we will say so in the first call and point you to someone who is.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A modular kitchen runs eight to twelve weeks from sign-off. Apartments take six to eleven months depending on scope, and turnkey villas fourteen months and beyond. We publish the schedule before work begins and report against it every week.",
  },
];

