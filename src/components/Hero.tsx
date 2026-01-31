import { ArrowRight, Heart, Shield, Clock } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-secondary/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              Добро пожаловать!
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Ветеринарная Клиника{" "}
              <span className="text-gradient-gold">Leon</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground">в Ульяновске</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              "Забота о здоровье ваших питомцев — наше призвание. 
              Мы делаем всё правильно, даже когда никто не смотрит."
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-elegant">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Опытные врачи</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-elegant">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Без выходных</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-elegant">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">С любовью</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacts"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all shadow-gold hover:shadow-xl hover:-translate-y-0.5"
              >
                Записаться на приём
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Наши услуги
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative circle behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full scale-90 blur-xl" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroPets}
                  alt="Счастливые питомцы в клинике Leon"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating logo badge */}
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-2xl shadow-elegant animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
                <img src={logo} alt="Leon Clinic Logo" className="w-20 h-20 rounded-full object-cover" />
              </div>

              {/* Stats badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-gold animate-slide-in-right" style={{ animationDelay: "0.7s" }}>
                <p className="text-2xl font-bold">10+</p>
                <p className="text-xs opacity-90">лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
