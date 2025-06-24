import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            СТАНЬ
            <span className="block text-primary">DJ</span>
            ПРОФИ
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Обучение диджеингу на топовом оборудовании. House, Techno, Hip-Hop –
            выбирай свое направление!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Бесплатный урок
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              Смотреть программы
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="dj-glow rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/files/d0b10652-f1c6-4e68-8d29-e7656831610c.png"
              alt="DJ за работой"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center beat-pulse">
            <Icon name="Music" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
