import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const levels = [
  {
    title: "НОВИЧКИ",
    description:
      "Никогда не держал наушники? Начнем с основ музыкальной теории и первых миксов",
    features: ["Основы диджеинга", "Работа с оборудованием", "Первые миксы"],
    icon: "Play",
  },
  {
    title: "ЛЮБИТЕЛИ",
    description:
      "Есть базовый опыт? Прокачаем технику и добавим профессиональные приемы",
    features: ["Продвинутые техники", "Создание сетов", "Выступления"],
    icon: "TrendingUp",
  },
  {
    title: "ПРОФИ",
    description:
      "Готов покорять сцены? Изучим секреты топовых DJ и построим карьеру",
    features: ["Мастер-классы", "Продюсирование", "Индустрия"],
    icon: "Star",
  },
];

const Target = () => {
  return (
    <section id="target" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ДЛЯ КОГО НАШИ ПРОГРАММЫ</h2>
          <p className="text-xl text-gray-600">
            От первых шагов до профессиональной сцены
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:bg-gray-50 transition-all"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon name={level.icon as any} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{level.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-primary mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Target;
