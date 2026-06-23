import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Star } from "lucide-react";
import { Button } from "./ui/button";

import importadoDiscovery from "@/assets/importado-discovery.jpg";
import importadoMercedes from "@/assets/importado-mercedes.jpg";
import importadoFiat from "@/assets/importado-fiat.jpg";
import importadoBmw from "@/assets/importado-bmw.jpg";
import importadoLandrover from "@/assets/importado-landrover.jpg";
import jeepOficina1 from "@/assets/jeep-oficina-1.jpg";
import jeepOficina2 from "@/assets/jeep-oficina-2.jpg";
import jeepOficina3 from "@/assets/jeep-oficina-3.jpg";
import diagnosticoEquipamento from "@/assets/diagnostico-equipamento.jpg";
import fachadaNoite1 from "@/assets/fachada-noite-1.jpg";
import fachadaNoite2 from "@/assets/fachada-noite-2.jpg";

const importedCars = [
  {
    image: importadoDiscovery,
    brand: "Land Rover",
    model: "Discovery",
  },
  {
    image: importadoMercedes,
    brand: "Mercedes-Benz",
    model: "CLA",
  },
  {
    image: importadoLandrover,
    brand: "Land Rover & Mercedes",
    model: "Range Rover Evoque",
  },
  {
    image: jeepOficina1,
    brand: "Jeep",
    model: "Compass",
  },
  {
    image: jeepOficina2,
    brand: "Jeep",
    model: "Renegade",
  },
  {
    image: jeepOficina3,
    brand: "Jeep",
    model: "Estrutura Premium",
  },
  {
    image: diagnosticoEquipamento,
    brand: "Diagnóstico",
    model: "Equipamento de Última Geração",
  },
];

const CarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % importedCars.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % importedCars.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + importedCars.length) % importedCars.length);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Header - Imported Vehicles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-blue-500/20 px-6 py-2 rounded-full mb-6 border border-primary/30">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Especialistas em Importados e Nacionais
            </span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Excelência em{" "}
            <span className="text-gradient">Todos os Veículos</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Estrutura profissional e equipamentos de última geração para manutenção 
            de veículos importados e nacionais: <strong className="text-foreground">BMW, Mercedes-Benz, Land Rover, Jeep, Fiat, Volkswagen</strong> e outras marcas.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl border-2 border-primary/20 shadow-2xl shadow-primary/10">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {importedCars.map((car, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative aspect-[16/10]">
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model} atendido na Auto Torque Mecânica`}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                          {car.brand}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-2xl md:text-4xl text-foreground">
                        {car.model}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="glass"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border border-primary/30 hover:bg-primary/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {importedCars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-10 bg-primary shadow-glow"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="glass"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border border-primary/30 hover:bg-primary/20"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Marcas que atendemos com excelência:</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["BMW", "Mercedes-Benz", "Land Rover", "Jeep", "Fiat", "Volkswagen", "Chevrolet", "Toyota", "Hyundai", "Honda", "Renault"].map((brand) => (
              <motion.span
                key={brand}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-5 py-2.5 rounded-full glass border border-primary/20 font-semibold text-sm hover:border-primary/50 transition-all cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Featured Office Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl text-center mb-8">
            Nossa <span className="text-gradient">Estrutura</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
            >
              <img
                src={fachadaNoite1}
                alt="Frente da Auto Torque Mecânica à noite"
                width={600}
                height={320}
                loading="lazy"
                decoding="async"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Fachada AutoTorque
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
            >
              <img
                src={fachadaNoite2}
                alt="Vista panorâmica da oficina Auto Torque à noite"
                width={600}
                height={320}
                loading="lazy"
                decoding="async"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Vista Panorâmica
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarCarousel;
