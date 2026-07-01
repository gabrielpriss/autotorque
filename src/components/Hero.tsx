import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { whatsappLink, mapsLink, addressShort } from "@/lib/site";
import heroBg from "@/assets/autotorque-fachada.jpg";

const Hero = () => {
  const whatsapp = whatsappLink();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fachada da Auto Torque Mecânica em Tubarão, SC"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Atendimento Premium em Tubarão - SC
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Excelência em{" "}
            <span className="text-gradient">Mecânica Automotiva</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Especialistas em veículos premium, diesel, 4x4 e câmbios automáticos.
            Tecnologia de ponta para o seu veículo.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open(whatsapp, "_blank")}
              className="group"
            >
              <WhatsAppIcon className="w-5 h-5 group-hover:animate-pulse" />
              Falar com Atendente
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#servicos">Ver Serviços</a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground"
          >
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Entre em Contato
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              {addressShort}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#servicos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs">Saiba Mais</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
