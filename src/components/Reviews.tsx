import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Алексей",
    text: "Лучшая DJ школа в городе! За 3 месяца научился миксовать как профи. Преподаватели - настоящие мастера.",
    rating: 5,
  },
  {
    name: "Мария",
    text: "Всегда мечтала быть DJ. Здесь помогли воплотить мечту в реальность. Теперь играю в клубах!",
    rating: 5,
  },
  {
    name: "Дмитрий",
    text: "Отличное оборудование и индивидуальный подход. Рекомендую всем, кто хочет освоить диджеинг.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ОТЗЫВЫ УЧЕНИКОВ</h2>
          <p className="text-xl text-gray-600">
            Что говорят о нас наши студенты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="font-bold text-primary">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
