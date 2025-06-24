import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Disc3" className="text-primary" size={32} />
          <span className="text-2xl font-bold">DJ SCHOOL</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-primary transition-colors">
            О школе
          </a>
          <a href="#target" className="hover:text-primary transition-colors">
            Для кого
          </a>
          <a
            href="#directions"
            className="hover:text-primary transition-colors"
          >
            Направления
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90 text-white">
          Бесплатный урок
        </Button>
      </div>
    </header>
  );
};

export default Header;
