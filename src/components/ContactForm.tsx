import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              ЗАПИШИСЬ НА БЕСПЛАТНЫЙ УРОК
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Первое занятие абсолютно бесплатно! Приходи, попробуй и почувствуй
              атмосферу настоящей DJ школы.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="MapPin" className="text-primary mr-3" size={20} />
                <span>г. Москва, ул. Диджейская, 15</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="text-primary mr-3" size={20} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="text-primary mr-3" size={20} />
                <span>info@djschool.ru</span>
              </div>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl">Оставь заявку</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Твое имя"
                className="bg-gray-800 border-gray-600"
              />
              <Input
                placeholder="Номер телефона"
                className="bg-gray-800 border-gray-600"
              />
              <Input
                placeholder="Email"
                className="bg-gray-800 border-gray-600"
              />
              <Textarea
                placeholder="Какое направление интересует?"
                className="bg-gray-800 border-gray-600"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Send" className="mr-2" size={20} />
                Записаться на урок
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
