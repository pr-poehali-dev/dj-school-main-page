import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const directions = [
  {
    name: "HOUSE",
    description:
      "Классическое направление с глубокими басами и ритмичными битами",
    icon: "Home",
    color: "from-purple-600 to-pink-600",
  },
  {
    name: "TECHNO",
    description: "Индустриальные звуки и мощные ударные для клубной атмосферы",
    icon: "Zap",
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "HIP-HOP",
    description: "Уличная культура, скретчинг и работа с вокальными партиями",
    icon: "Mic",
    color: "from-green-600 to-yellow-600",
  },
];

const Directions = () => {
  return (
    <section id="directions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">НАПРАВЛЕНИЯ ОБУЧЕНИЯ</h2>
          <p className="text-xl text-gray-300">
            Выбери свой стиль и освой его на профессиональном уровне
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {directions.map((direction, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-primary transition-all group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${direction.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={direction.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {direction.name}
                </h3>
                <p className="text-gray-300">{direction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;
