import { Phone, MapPin, Globe } from "lucide-react";
import { whatsappLink, mapsLink, SITE } from "@/lib/site";
import logoAutotorque from "@/assets/logo-autotorque.png";

const Footer = () => {
  const whatsapp = whatsappLink();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <img
              src={logoAutotorque}
              alt="Logo da Auto Torque Mecânica"
              width={160}
              height={64}
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Excelência em serviços automotivos para veículos populares e premium.
              Especialistas em diesel, 4x4 e câmbios automáticos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-muted-foreground hover:text-primary transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {SITE.address.street} - {SITE.address.city}
                </a>
              </li>
              <li>
                <a
                  href="https://autotorquemecanica.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  autotorquemecanica.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
