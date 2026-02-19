import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/daxvftxtq/images/c_scale,w_372,h_372,dpr_1.5/f_auto,q_auto/v1746190578/GeeRoyal-Logo_35850ffcb/GeeRoyal-Logo_35850ffcb.webp?_i=AA"
                alt="GEEROYALE"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 max-w-xs leading-relaxed">
              Elevating the experience of dressing well. We envision ourselves
              as partners in our clients’ pursuit of style and confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-4 text-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Ready-to-wear
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Bespoke Wears
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold">Visit Us</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-gold shrink-0" />
                <span>123 Luxury Lane, Fashion District, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span>+234 800 GEEROYALE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span>info@geeroyalfashion.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold">Newsletter</h3>
            <p className="text-white/70">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                placeholder="E-mail"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold"
              />
              <Button className="bg-gold hover:bg-gold/90 text-navy font-bold w-full uppercase tracking-widest">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-sm gap-4">
          <p>
            © {new Date().getFullYear()} GEEROYALE LUXURY FASHION. ALL RIGHTS
            RESERVED.
          </p>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
