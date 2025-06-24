import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Target from "@/components/Target";
import Directions from "@/components/Directions";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Target />
      <Directions />
      <Gallery />
      <ContactForm />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
