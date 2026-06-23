import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CarCarousel from "@/components/CarCarousel";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Auto Torque Mecânica | Oficina em Tubarão SC - Diesel, 4x4 e Câmbio Automático</title>
        <meta
          name="description"
          content="Auto Torque Mecânica em Tubarão/SC: especialistas em diesel leve, 4x4, câmbio automático, suspensão e injeção eletrônica. Atendemos toda a região. Agende: (48) 99620-9577."
        />
        <meta
          name="keywords"
          content="mecânica tubarão, oficina mecânica tubarão, diesel, 4x4, câmbio automático, jeep, suspensão, freios, troca de óleo"
        />
        <meta property="og:title" content="Auto Torque Mecânica | Oficina em Tubarão SC" />
        <meta
          property="og:description"
          content="Excelência em mecânica automotiva. Especialistas em diesel, 4x4 e câmbios automáticos."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://autotorquemecanica.com.br/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">
          <Hero />
          <Services />
          <CarCarousel />
          <SocialProof />
          <About />
          <FAQ />
          <Location />
        </main>
        <Footer />
        
      </div>
    </>
  );
};

export default Index;
