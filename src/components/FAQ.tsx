import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Нужен ли опыт для начала обучения?",
    answer:
      'Нет! Мы принимаем студентов любого уровня. Для новичков есть специальная программа "с нуля".',
  },
  {
    question: "Сколько длится курс обучения?",
    answer:
      "Базовый курс - 2 месяца, продвинутый - 4 месяца. Можно заниматься индивидуально или в группах.",
  },
  {
    question: "Какое оборудование используется?",
    answer:
      "Pioneer CDJ-3000, DJM-900NXS2, Technics SL-1200 и другое профессиональное оборудование.",
  },
  {
    question: "Помогаете ли с трудоустройством?",
    answer:
      "Да! У нас есть партнерские клубы и агентства. Лучших выпускников рекомендуем работодателям.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ЧАСТЫЕ ВОПРОСЫ</h2>
          <p className="text-xl text-gray-300">
            Ответы на самые популярные вопросы
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-gray-700"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
