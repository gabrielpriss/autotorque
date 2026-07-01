import { motion } from "framer-motion";
import { Shield, Award, Clock, Users } from "lucide-react";
import { Button } from "./ui/button";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import oficinaBancada from "@/assets/oficina-bancada.jpg";
import oficinaFerramentas from "@/assets/oficina-ferramentas.jpg";
import oficinaGalpao from "@/assets/oficina-galpao.jpg";

const features = [
  {
    icon: Shield,
    title: "Garantia de Serviço",
    description: "Todos os serviços com garantia documentada",
  },
  {
    icon: Award,
    title: "Técnicos Certificados",
    description: "Equipe treinada pelas principais montadoras",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Diagnóstico rápido e preciso",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Do popular ao premium, cada cliente é único",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
              Tradição e <span className="text-gradient">Inovação</span> em
              Mecânica
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A <strong className="text-foreground">Auto Torque Mecânica</strong> é uma empresa localizada em Tubarão, SC, 
              que oferece serviços de manutenção e reparação mecânica de veículos automotores. 
              A empresa foi fundada em <strong className="text-foreground">09/02/2017</strong> e está registrada sob o 
              CNPJ <strong className="text-foreground">27.066.437/0001-84</strong>.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Com mais de 7 anos de experiência no mercado de Tubarão e região,
              nos especializamos em oferecer soluções completas para veículos de
              todas as categorias. Nossa equipe é constantemente treinada para
              lidar com as mais modernas tecnologias automotivas.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Atendemos clientes de Tubarão, Criciúma, Laguna, Florianópolis,
              Gravatal, Içara e Jaguaruna, sempre com o compromisso de entregar
              qualidade e transparência em cada serviço.
            </p>
            <div className="bg-card/50 border border-border/50 rounded-xl p-4 mb-8">
              <p className="text-foreground italic leading-relaxed">
                "Meu nome é <strong>Adriano</strong>, sou proprietário da Auto Torque Mecânica e tenho <strong>25 anos de experiência</strong> como mecânico. 
                Seria um prazer enorme atender você e cuidar do seu veículo com a qualidade que ele merece."
              </p>
              <p className="text-primary font-semibold mt-2">— Adriano, Proprietário</p>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-3 gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={oficinaBancada}
                  alt="Bancada de trabalho da Auto Torque Mecânica"
                  width={200}
                  height={128}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-24 md:h-32 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={oficinaFerramentas}
                  alt="Ferramentas profissionais da oficina"
                  width={200}
                  height={128}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-24 md:h-32 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={oficinaGalpao}
                  alt="Galpão da oficina Auto Torque Mecânica"
                  width={200}
                  height={128}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-24 md:h-32 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-card rounded-xl p-5 shadow-card border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA final da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4">
            Fale diretamente com o Adriano e agende seu atendimento.
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={() =>
              window.open(
                whatsappLink(
                  "Olá, Adriano! Conheci a Auto Torque Mecânica pelo site e gostaria de agendar um atendimento."
                ),
                "_blank"
              )
            }
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar com o Adriano
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
