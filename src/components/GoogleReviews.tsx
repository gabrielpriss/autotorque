import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { mapsLink, SITE } from "@/lib/site";

/** Logo "G" do Google (multicolor) usado no cabeçalho do widget. */
const GoogleG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    />
    <path
      fill="#34A853"
      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
    />
    <path
      fill="#EA4335"
      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
    />
  </svg>
);

type Review = {
  name: string;
  meta: string;
  text: string;
  rating: number;
  time: string;
};

const reviews: Review[] = [
  {
    name: "André Konig",
    meta: "3 avaliações",
    text: "Adriano e companhia são de mais. Serviço rápido, bem feito e preço justo.",
    rating: 5,
    time: "há 2 semanas",
  },
  {
    name: "Leonardo Borges",
    meta: "4 avaliações",
    text: "Super recomendo, ambiente top e mecânicos confiáveis.",
    rating: 5,
    time: "há 1 mês",
  },
  {
    name: "Emerson Silva",
    meta: "Local Guide · 21 avaliações",
    text: "Excelente mecânica, atendimento diferenciado. Parabéns rapazes, humildade e profissionalismo vão longe.",
    rating: 5,
    time: "há 1 mês",
  },
  {
    name: "Mateus Gamer",
    meta: "5 avaliações",
    text: "Tão bão que parece quando entra: tapete vermelho e vinho. Teu carro entra ferrado e sai top de linha, a melhor de Tuba.",
    rating: 5,
    time: "há 2 meses",
  },
  {
    name: "Gustavo Alexandre",
    meta: "Local Guide · 16 avaliações",
    text: "Atendimento de excelente qualidade, assim como o serviço.",
    rating: 5,
    time: "há 3 meses",
  },
  {
    name: "Fernando Loch",
    meta: "6 avaliações",
    text: "Ótimo trabalho, recomendo!",
    rating: 5,
    time: "há 4 meses",
  },
];

const RATING = 4.9;
const TOTAL = 87;

// Cores de fundo dos avatares (estilo Google)
const avatarColors = [
  "bg-[#1a73e8]",
  "bg-[#d93025]",
  "bg-[#188038]",
  "bg-[#e37400]",
  "bg-[#9334e6]",
  "bg-[#1967d2]",
];

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < count ? "fill-[#fbbc05] text-[#fbbc05]" : "fill-muted text-muted"
        }`}
      />
    ))}
  </div>
);

const GoogleReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Cabeçalho do widget (estilo TrustIndex) */}
      <div className="gradient-card rounded-2xl border border-border/50 shadow-card p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <GoogleG className="w-12 h-12 shrink-0" />
            <div>
              <h3 className="font-display font-bold text-lg md:text-xl">
                Avaliações no Google
              </h3>
              <p className="text-muted-foreground text-sm">{SITE.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="font-display font-black text-4xl leading-none text-foreground">
                {RATING.toFixed(1)}
              </div>
              <div className="mt-1 flex justify-center">
                <Stars count={5} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {TOTAL} avaliações
              </p>
            </div>
            <Button variant="outline" size="sm" asChild className="shrink-0">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                Avaliar
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Carrossel de avaliações */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="snap-start shrink-0 w-[85%] sm:w-[320px] gradient-card rounded-xl p-5 shadow-card border border-border/50 flex flex-col"
            >
              <header className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full ${
                    avatarColors[index % avatarColors.length]
                  } text-white flex items-center justify-center font-semibold shrink-0`}
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {review.meta}
                  </div>
                </div>
                <GoogleG className="w-5 h-5 ml-auto shrink-0" />
              </header>
              <div className="flex items-center gap-2 mb-2">
                <Stars count={review.rating} />
                <span className="text-xs text-muted-foreground">
                  {review.time}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {review.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Navegação */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <Button
            variant="glass"
            size="icon"
            onClick={() => scroll("left")}
            aria-label="Avaliações anteriores"
            className="rounded-full border border-primary/30 hover:bg-primary/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary font-semibold hover:underline"
          >
            Ver todas no Google
          </a>
          <Button
            variant="glass"
            size="icon"
            onClick={() => scroll("right")}
            aria-label="Próximas avaliações"
            className="rounded-full border border-primary/30 hover:bg-primary/20"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
