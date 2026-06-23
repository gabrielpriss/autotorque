import { motion } from "framer-motion";
import {
  Wrench,
  Droplets,
  Disc,
  Settings,
  Cog,
  Truck,
  Gauge,
  Fuel,
  Zap,
} from "lucide-react";

import servicoFreios from "@/assets/servico-freios.jpg";
import servicoMotor from "@/assets/servico-motor-novo.jpg";
import servico4x4 from "@/assets/servico-4x4.jpg";
import servicoDiesel from "@/assets/servico-diesel.jpg";
import servicoFluidos from "@/assets/servico-fluidos.jpg";
import servicoOleo from "@/assets/servico-oleo.jpg";
import servicoCambio from "@/assets/servico-cambio.jpg";
import servicoRevisao from "@/assets/servico-revisao.jpg";
import servicoInjecao from "@/assets/servico-injecao.jpg";
import servicoSuspensao from "@/assets/servico-suspensao.jpg";

const services = [
  {
    icon: Settings,
    title: "Suspensão",
    description: "Alinhamento, balanceamento e reparos completos",
    image: servicoSuspensao,
  },
  {
    icon: Droplets,
    title: "Troca de Óleo",
    description: "Óleo sintético premium e filtros de qualidade",
    image: servicoOleo,
  },
  {
    icon: Disc,
    title: "Freios",
    description: "Pastilhas, discos e sistema ABS",
    image: servicoFreios,
  },
  {
    icon: Wrench,
    title: "Motor",
    description: "Retífica e reparos especializados",
    image: servicoMotor,
  },
  {
    icon: Cog,
    title: "Câmbio Automático",
    description: "Manutenção e reparo de transmissões automáticas",
    image: servicoCambio,
  },
  {
    icon: Truck,
    title: "Sistema 4x4",
    description: "Especialistas em tração integral",
    image: servico4x4,
  },
  {
    icon: Gauge,
    title: "Diesel Leve",
    description: "Manutenção completa para veículos diesel",
    image: servicoDiesel,
  },
  {
    icon: Fuel,
    title: "Troca de Fluidos",
    description: "Arrefecimento, freio, direção e câmbio",
    image: servicoFluidos,
  },
  {
    icon: Zap,
    title: "Injeção Eletrônica",
    description: "Diagnóstico e reparo de sistemas de injeção",
    image: servicoInjecao,
  },
  {
    icon: Settings,
    title: "Revisões em Geral",
    description: "Revisão completa preventiva e corretiva",
    image: servicoRevisao,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Soluções Completas para{" "}
            <span className="text-gradient">Seu Veículo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Da manutenção preventiva aos reparos mais complexos, oferecemos serviços
            de excelência para veículos populares e premium.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="gradient-card rounded-2xl overflow-hidden shadow-card group cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {service.image ? (
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`Serviço de ${service.title} - ${service.description}`}
                    width={400}
                    height={224}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                        <service.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-base md:text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
