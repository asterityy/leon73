import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#services", label: "Услуги" },
    { href: "#about", label: "О клинике" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top info bar */}
      <div className="hidden md:block bg-card border-b border-border">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Ежедневно 9:00 - 21:00</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ульяновск, ул. Северный Венец, 14</span>
              </div>
            </div>
            <a 
              href="tel:+78422000000" 
              className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+7 (8422) 00-00-00</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Leon Clinic" 
              className="h-14 w-14 rounded-full object-cover shadow-gold transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold text-foreground">
                Клиника <span className="text-primary">Leon</span>
              </h1>
              <p className="text-xs text-muted-foreground">Ветеринарная клиника</p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-foreground font-medium hover:text-primary transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors shadow-gold"
            >
              <Phone className="w-4 h-4" />
              Записаться
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground font-medium hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacts"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors mt-2"
              >
                <Phone className="w-4 h-4" />
                Записаться
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Ежедневно 9:00 - 21:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ульяновск, ул. Северный Венец, 14</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
