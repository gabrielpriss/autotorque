import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { whatsappLink, mapsEmbed, SITE } from "@/lib/site";

const Location = () => {
  const whatsapp = whatsappLink();

  return (
    <section id="localizacao" className="py-20 md:py-32 gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Localização
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Venha <span className="text-gradient">Nos Visitar</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-[300px] md:h-[400px] shadow-card"
          >
            <iframe
              src={mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização da ${SITE.name} no Google Maps`}
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} - {SITE.address.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Telefone</h3>
                  <p className="text-muted-foreground">{SITE.phoneDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Horário</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h
                  </p>
                </div>
              </div>

              {/* Region Tags */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold mb-3">Atendemos toda AMUREL:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Tubarão", "Criciúma", "Laguna", "Florianópolis", "Gravatal", "Içara", "Jaguaruna"].map(
                    (city) => (
                      <span
                        key={city}
                        className="px-3 py-1 text-xs rounded-full glass"
                      >
                        {city}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => window.open(whatsapp, "_blank")}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Falar com Atendente
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
