import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Disc3" className="text-primary" size={32} />
              <span className="text-2xl font-bold">DJ SCHOOL</span>
            </div>
            <p className="text-gray-600">
              Профессиональное обучение диджеингу в Москве. House, Techno,
              Hip-Hop направления.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Направления</h4>
            <ul className="space-y-2 text-gray-600">
              <li>House</li>
              <li>Techno</li>
              <li>Hip-Hop</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-600">
              <li>+7 (999) 123-45-67</li>
              <li>info@djschool.ru</li>
              <li>г. Москва, ул. Диджейская, 15</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                className="text-gray-600 hover:text-primary cursor-pointer"
                size={24}
              />
              <Icon
                name="Youtube"
                className="text-gray-600 hover:text-primary cursor-pointer"
                size={24}
              />
              <Icon
                name="Send"
                className="text-gray-600 hover:text-primary cursor-pointer"
                size={24}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 DJ SCHOOL. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
