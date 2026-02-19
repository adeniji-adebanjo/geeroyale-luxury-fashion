export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  rating?: number;
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
  },
];
