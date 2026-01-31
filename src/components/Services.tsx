import { 
  Stethoscope, 
  Syringe, 
  Bone, 
  Scissors, 
  Heart, 
  TestTube,
  Microscope,
  Activity
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Консультация ветеринара",
    description: "Профессиональный осмотр и диагностика состояния здоровья вашего питомца",
  },
  {
    icon: Syringe,
    title: "Вакцинация",
    description: "Своевременная профилактика инфекционных заболеваний качественными вакцинами",
  },
  {
    icon: Microscope,
    title: "УЗИ диагностика",
    description: "Современное ультразвуковое исследование для точной диагностики",
  },
  {
    icon: Activity,
    title: "Рентгенография",
    description: "Цифровой рентген для выявления травм и патологий внутренних органов",
  },
  {
    icon: Scissors,
    title: "Хирургия",
    description: "Плановые и экстренные операции с применением современных методик",
  },
  {
    icon: TestTube,
    title: "Лабораторные анализы",
    description: "Полный спектр анализов крови, мочи и других биоматериалов",
  },
  {
    icon: Bone,
    title: "Стоматология",
    description: "Профессиональная чистка зубов и лечение заболеваний полости рта",
  },
  {
    icon: Heart,
    title: "Кардиология",
    description: "Диагностика и лечение сердечно-сосудистых заболеваний питомцев",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Полный спектр{" "}
            <span className="text-gradient-gold">ветеринарных услуг</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы предлагаем комплексный подход к здоровью ваших питомцев, используя современное оборудование и многолетний опыт наших специалистов
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-6 shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all shadow-gold"
          >
            Записаться на приём
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
