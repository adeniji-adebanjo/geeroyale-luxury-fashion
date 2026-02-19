export interface BespokeCollection {
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  details: string[];
  inspiration: string;
}

export const bespokeCollections: BespokeCollection[] = [
  {
    slug: "ariel",
    name: "Ariel",
    description: "Strength, wealth, and hand-picked golden fringe.",
    fullDescription:
      "The Ariel piece is a masterpiece connecting wealth, originality, and strength. It features a sophisticated golden hand-picked fringe fused with a stark black vertical velvet panel, creating a silhouette of command and elegance.",
    image:
      "https://images.unsplash.com/photo-1594932224011-042041c19451?q=80&w=2000&auto=format&fit=crop",
    details: [
      "Black vertical velvet panel",
      "Hand-picked golden fringe",
      "Bespoke tailoring",
    ],
    inspiration: "Connection to wealth and originality.",
  },
  {
    slug: "haniel",
    name: "Haniel",
    description: "Courage, transparency, and chaplaincy-inspired truth.",
    fullDescription:
      "Haniel is an elegant white piece designed to convey courage, transparency, and truth. Inspired by the principles of chaplaincy, this design prioritizes clean lines and a pure aesthetic to reflect the integrity of the Geeroyal man.",
    image:
      "https://images.unsplash.com/photo-1598460390525-4552504b281f?q=80&w=2000&auto=format&fit=crop",
    details: [
      "Pure white luxury fabric",
      "Minimalist structural design",
      "Precision stitching",
    ],
    inspiration: "Chaplaincy, courage, and transparency.",
  },
  {
    slug: "digiola",
    name: "Dìgìolá",
    description: "Eminent design for royals with a unique beady feel.",
    fullDescription:
      "Dìgìolá is an eminent design crafted specifically for royals. Adorned with a unique beady feel and made with premium light fleece, it is meticulously crafted to depict wealth and authenticity in every fold.",
    image:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2000&auto=format&fit=crop",
    details: [
      "Premium light fleece",
      "Unique beady texture",
      "Royal silhouette",
    ],
    inspiration: "Wealth and authenticity.",
  },
  {
    slug: "eni-ayo",
    name: "Eni-Ayo",
    description: "Happiness embodied through hand-woven Aso Oke.",
    fullDescription:
      "The Eni-Ayo piece is curated for the happy one. Inspired by the Yoruba tribe's artistic hand-woven Aso Oke, it intricately combines this traditional fabric with a blend of Swarovski stones for a proud, stylish appearance.",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000&auto=format&fit=crop",
    details: [
      "Hand-woven Aso Oke",
      "Swarovski stone fusion",
      "Cultural pride design",
    ],
    inspiration: "Yoruba tradition and happiness.",
  },
  {
    slug: "fanan",
    name: "Fanan",
    description: "Identity, pride, and peace in black and white.",
    fullDescription:
      "Fanan is a stunning attire characterized by a striking black and white scheme. Drawing strong inspiration from Benue culture, the design reflects pride, love, and peace, serving as a direct reflection of the wearer's identity.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73774586594?q=80&w=2000&auto=format&fit=crop",
    details: [
      "High-contrast monochrome",
      "Benue cultural inspiration",
      "Identity-focused tailoring",
    ],
    inspiration: "Pride, love, and peace.",
  },
  {
    slug: "cairo",
    name: "Cairo",
    description: "Egyptian Military inspiration with sky-blue velvet.",
    fullDescription:
      "Cairo offers an air of grandiosity. Curated with blue fleece and urban lanyards, it features sky-blue velvet tucked into a red double welt opening—a design directly inspired by the discipline of the Egyptian Military.",
    image:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=2000&auto=format&fit=crop",
    details: [
      "Blue fleece fabric",
      "Sky-blue velvet accents",
      "Red double welt opening",
    ],
    inspiration: "Egyptian Military grandiosity.",
  },
  {
    slug: "lizza",
    name: "Lizza",
    description: "Indigenous Aso-Oke fused with global aesthetics.",
    fullDescription:
      "Lizza is a spiffy piece that blends indigenous and global aesthetics. It uses revered glittering Aso-Oke from Western Nigeria, fused in small panel horizontal stripes to create a truly spiffy, contemporary look.",
    image:
      "https://images.unsplash.com/photo-1592862902946-b3e8ad6e17c4?q=80&w=2000&auto=format&fit=crop",
    details: [
      "Horizontal Aso-Oke stripes",
      "Metallic thread accents",
      "Contemporary fusion",
    ],
    inspiration: "Glittering Aso-Oke of Western Nigeria.",
  },
  {
    slug: "manda",
    name: "Manda",
    description: "Strength and art inspired by the beauty of dreadlocks.",
    fullDescription:
      "The Manda piece is designed to express strength and doggedness. Inspired by the beauty of dreadlocks, it features black strands laced with Swarovski crystals, representing a powerful expression of functional art.",
    image:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=2000&auto=format&fit=crop",
    details: [
      "Laced black strands",
      "Swarovski crystal accents",
      "Artistic expression",
    ],
    inspiration: "Strength and dreadlock aesthetics.",
  },
];
