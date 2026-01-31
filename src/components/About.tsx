import { Award, Users, Clock, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const stats = [
  { icon: Award, value: "10+", label: "Лет опыта" },
  { icon: Users, value: "5000+", label: "Клиентов" },
  { icon: Clock, value: "24/7", label: "Поддержка" },
  { icon: Heart, value: "100%", label: "Любви" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-card via-secondary/50 to-card flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Leon Clinic Logo" 
                  className="w-64 h-64 rounded-full object-cover shadow-gold"
                />
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-gold">
              <p className="text-4xl font-bold font-serif">Leon</p>
              <p className="text-sm opacity-90">Доктор для питомцев</p>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                О клинике
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Клиника{" "}
                <span className="text-gradient-gold">Leon</span>
                <br />— ваш надёжный партнёр
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ветеринарная клиника Leon — это современный медицинский центр в Ульяновске, 
                где ваши питомцы получают профессиональную помощь и заботу высочайшего уровня.
              </p>
              <p>
                Наша команда опытных ветеринаров использует современное диагностическое оборудование 
                и передовые методы лечения, чтобы обеспечить вашим любимцам долгую и здоровую жизнь.
              </p>
              <p>
                Мы понимаем, как важен для вас ваш питомец, поэтому относимся к каждому пациенту 
                с особым вниманием и любовью — как к члену нашей большой семьи.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-card rounded-xl shadow-elegant">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground font-serif">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
