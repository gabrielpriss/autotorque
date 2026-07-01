import { ReactNode } from "react";
import { Button, ButtonProps } from "./ui/button";
import { trackWhatsAppClick } from "@/lib/site";

interface WhatsAppCTAProps {
  /** Link wa.me (use o helper whatsappLink). */
  href: string;
  /** Identificador da origem do clique para o GTM (ex.: "hero", "header"). */
  source: string;
  children: ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
}

/**
 * CTA de WhatsApp como âncora real (<a href="wa.me">), garantindo que o
 * gatilho de clique em link do GTM seja acionado — diferente de um <button>
 * com window.open, que não é detectado. Também envia o evento whatsapp_click
 * ao dataLayer como reforço para a tag de conversão.
 */
const WhatsAppCTA = ({
  href,
  source,
  children,
  variant = "whatsapp",
  size = "lg",
  className,
}: WhatsAppCTAProps) => (
  <Button variant={variant} size={size} asChild className={className}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-cta-source={source}
      onClick={() => trackWhatsAppClick(source)}
    >
      {children}
    </a>
  </Button>
);

export default WhatsAppCTA;
