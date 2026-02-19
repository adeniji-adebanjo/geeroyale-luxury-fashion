export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  rating?: number;
  description: string;
  details: string[];
  sizes: string[];
  colors: string[];
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Comodo Shirt",
    price: 12000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
    category: "Ready-to-wear",
    rating: 2.54,
    description:
      "A versatile and comfortable shirt perfect for any semi-formal occasion.",
    details: [
      "100% Premium Cotton",
      "Slim fit design",
      "Breathable fabric",
      "Machine washable",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink"],
  },
  {
    id: "2",
    name: "Hybrid Embroidery Polo",
    price: 10000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
    category: "Ready-to-wear",
    rating: 2.48,
    description:
      "Elegant polo shirt with unique embroidery, blending casual and formal styles.",
    details: [
      "Pique cotton blend",
      "Intricate chest embroidery",
      "Ribbed collar and cuffs",
      "Double-stitched hem",
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Charcoal"],
  },
  {
    id: "3",
    name: "Tetrad T-shirt",
    price: 8000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    category: "Ready-to-wear",
    rating: 2.49,
    description:
      "The ultimate everyday t-shirt, crafted for durability and a perfect fit.",
    details: [
      "Heavyweight organic cotton",
      "Relaxed fit",
      "Reinforced neck seam",
      "Pre-shrunk fabric",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey", "Beige"],
  },
  {
    id: "4",
    name: "Bespoke Suit - Navy",
    price: 150000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1594932224828-b4b059b6f68d?q=80&w=800&auto=format&fit=crop",
    category: "Bespoke",
    rating: 4.9,
    description:
      "Our signature navy suit, tailored to perfection for the modern gentleman.",
    details: [
      "Super 120s Italian wool",
      "Fully canvassed construction",
      "Hand-finished details",
      "Personalized lining options",
    ],
    sizes: ["Custom"],
    colors: ["Midnight Navy"],
  },
  {
    id: "5",
    name: "Classic White Shirt",
    price: 15000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800&auto=format&fit=crop",
    category: "Ready-to-wear",
    rating: 4.5,
    description:
      "The essential white shirt for every wardrobe, crisp and professional.",
    details: [
      "Easy-iron finish",
      "Semi-spread collar",
      "French cuffs",
      "High thread count cotton",
    ],
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Pure White"],
  },
  {
    id: "6",
    name: "Embroidered Senator",
    price: 45000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    category: "Ready-to-wear",
    rating: 4.8,
    description:
      "Traditional African attire with a modern twist, featuring exclusive embroidery.",
    details: [
      "Premium cashmere wool",
      "Hand-crafted embroidery",
      "Two-piece set (Top & Trousers)",
      "Bespoke-level finish",
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Burgundy", "Forest Green", "Royal Blue"],
  },
];
