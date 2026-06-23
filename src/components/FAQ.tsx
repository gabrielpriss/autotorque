import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

const faqs = [
  {
    question: "Quais tipos de veículos vocês atendem?",
    answer: "Atendemos veículos nacionais e importados, incluindo marcas como BMW, Mercedes-Benz, Land Rover, Jeep, Fiat, Volkswagen, Chevrolet, Toyota, Hyundai, Honda e Renault. Somos especialistas em SUVs, pickups, sedans e veículos 4x4."
  },
  {
    question: "Quanto tempo leva para fazer uma troca de óleo?",
    answer: "A troca de óleo completa, incluindo filtro de óleo e verificação dos níveis, geralmente leva entre 30 minutos a 1 hora, dependendo do modelo do veículo e tipo de óleo utilizado."
  },
  {
    question: "Vocês trabalham com câmbio automático e automatizado?",
    answer: "Sim! Somos especialistas em câmbios automáticos e automatizados. Realizamos diagnóstico completo, troca de fluído e manutenção preventiva para garantir a longevidade da transmissão."
  },
  {
    question: "É necessário agendar horário?",
    answer: "Recomendamos o agendamento prévio via WhatsApp para garantir disponibilidade e melhor atendimento. Porém, também atendemos demandas urgentes conforme disponibilidade."
  },
  {
    question: "Vocês atendem veículos a diesel?",
    answer: "Sim, realizamos manutenção em veículos diesel leves, incluindo pickups e SUVs. Nossa equipe é capacitada para lidar com os sistemas específicos desses motores."
  },
  {
    question: "Qual a garantia dos serviços realizados?",
    answer: "Oferecemos garantia em todos os nossos serviços e peças aplicadas. O prazo de garantia varia conforme o tipo de serviço realizado, sendo informado no momento do orçamento."
  },
  {
    question: "Vocês fazem diagnóstico eletrônico?",
    answer: "Sim, possuímos equipamentos de diagnóstico de última geração para identificar falhas eletrônicas, problemas no motor, câmbio, suspensão e demais sistemas do veículo."
  },
  {
    question: "Quais regiões vocês atendem?",
    answer: "Estamos localizados em Tubarão/SC e atendemos clientes de toda a região, incluindo Criciúma, Laguna, Florianópolis, Gravatal, Içara e Jaguaruna."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border border-border/50 rounded-xl px-6 data-[state=open]:shadow-glow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre os serviços da Auto Torque Mecânica.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar com Atendente
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
