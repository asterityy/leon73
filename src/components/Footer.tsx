import { Heart, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and about */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Leon Clinic" 
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-serif text-xl font-bold">
                  Клиника <span className="text-primary">Leon</span>
                </h3>
                <p className="text-sm opacity-75">Ветеринарная клиника</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Профессиональная ветеринарная помощь для ваших питомцев в Ульяновске. 
              Мы заботимся о здоровье ваших любимцев с любовью и вниманием.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Навигация</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all">
                Главная
              </a>
              <a href="#services" className="block text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all">
                Услуги
              </a>
              <a href="#about" className="block text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all">
                О клинике
              </a>
              <a href="#contacts" className="block text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all">
                Контакты
              </a>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+78422000000" className="flex items-center gap-2 text-sm opacity-75 hover:opacity-100 hover:text-primary transition-all">
                <Phone className="w-4 h-4" />
                +7 (8422) 00-00-00
              </a>
              <div className="flex items-center gap-2 text-sm opacity-75">
                <MapPin className="w-4 h-4" />
                ул. Северный Венец, 14, Ульяновск
              </div>
              <div className="flex items-center gap-2 text-sm opacity-75">
                <Clock className="w-4 h-4" />
                Ежедневно 09:00 — 21:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Клиника Leon. Все права защищены.
          </p>
          <p className="text-sm opacity-75 flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-destructive fill-destructive" /> в Ульяновске
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
