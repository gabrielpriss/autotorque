import { motion } from "framer-motion";
import GoogleReviews from "./GoogleReviews";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import WhatsAppCTA from "./WhatsAppCTA";
import { whatsappLink } from "@/lib/site";

const stats = [
  { value: "7+", label: "Anos de Experiência" },
  { value: "5000+", label: "Veículos Atendidos" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "7", label: "Cidades Atendidas" },
];

const SocialProof = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 gradient-dark">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-black text-4xl md:text-5xl text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
        </motion.div>

        {/* Widget de avaliações do Google (estilo TrustIndex) */}
        <GoogleReviews />

        {/* CTA final da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4">
            Faça parte de quem confia na Auto Torque Mecânica.
          </p>
          <WhatsAppCTA
            href={whatsappLink(
              "Olá! Vi as avaliações no site e gostaria de agendar um serviço."
            )}
            source="depoimentos"
            variant="whatsapp"
            size="lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar com Atendente
          </WhatsAppCTA>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
