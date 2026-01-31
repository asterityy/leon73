import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Свяжитесь{" "}
            <span className="text-gradient-gold">с нами</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы всегда рады помочь вашим питомцам. Запишитесь на приём или задайте вопрос нашим специалистам
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {/* Phone card */}
            <div className="bg-background rounded-2xl p-6 shadow-elegant flex items-start gap-4 hover:shadow-gold transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                <a href="tel:+78422000000" className="text-primary text-xl font-bold hover:text-accent transition-colors">
                  +7 (8422) 00-00-00
                </a>
                <p className="text-muted-foreground text-sm mt-1">Звоните в любое время</p>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-background rounded-2xl p-6 shadow-elegant flex items-start gap-4 hover:shadow-gold transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                <p className="text-foreground text-lg">ул. Северный Венец, 14</p>
                <p className="text-muted-foreground text-sm mt-1">г. Ульяновск</p>
              </div>
            </div>

            {/* Working hours card */}
            <div className="bg-background rounded-2xl p-6 shadow-elegant flex items-start gap-4 hover:shadow-gold transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Режим работы</h3>
                <p className="text-foreground text-lg">Ежедневно</p>
                <p className="text-muted-foreground text-sm mt-1">09:00 — 21:00</p>
              </div>
            </div>

            {/* Quick contact buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:+78422000000"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-accent transition-all shadow-gold"
              >
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
              <a
                href="https://wa.me/78422000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.8!2d48.3968!3d54.3152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d3797a12ddf01%3A0x1d3eea9abf0a46c4!2z0YPQuy4g0KHQtdCy0LXRgNC90YvQuSDQktC10L3QtdGGLCAxNCwg0KPQu9GM0Y_QvdC-0LLRgdC6LCDQo9C70YzRj9C90L7QstGB0LrQsNGPINC-0LHQuy4sIDQzMjAwMw!5e0!3m2!1sru!2sru!4v1709000000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Клиника Leon на карте"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
