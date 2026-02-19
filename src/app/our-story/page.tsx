import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function OurStory() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-24 bg-cream overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center space-y-8 mb-20 leading-relaxed">
              <span className="text-gold uppercase tracking-[0.3em] font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
                The Brand
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy animate-in fade-in slide-in-from-bottom-4 duration-700">
                Experience the Geeroyal Journey
              </h1>
            </div>

            <div className="space-y-16 text-xl text-navy/80 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold text-navy">
                    Our Purpose
                  </h2>
                  <p>
                    Geeroyal offers more than just clothing; we offer an
                    investment in yourself. Our expertly crafted garments are
                    designed to elevate your look, boost your confidence, and
                    empower you to achieve your goals.
                  </p>
                </div>
                <div className="aspect-square relative overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1594932224828-b4b059b6f68d?q=80&w=800&auto=format&fit=crop"
                    alt="Our Purpose"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div className="aspect-square relative overflow-hidden rounded-sm md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
                    alt="Our Mission"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-6 md:order-1">
                  <h2 className="text-3xl font-serif font-bold text-navy">
                    Our Mission
                  </h2>
                  <p>
                    Our mission is to be at the forefront of menswear
                    innovation, constantly developing captivating designs that
                    seamlessly blend contemporary vision with enduring style.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-8 bg-navy text-white p-12 rounded-sm shadow-2xl">
                <h2 className="text-4xl font-serif font-bold italic text-gold">
                  "Style transcends borders."
                </h2>
                <p className="max-w-2xl mx-auto italic opacity-80">
                  Our vision at Gee Royal Fashion is to become a global fashion
                  powerhouse, renowned for our exquisite blend of styles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
