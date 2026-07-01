import { motion } from "framer-motion";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

/**
 * Botão redondo fixo do WhatsApp, sempre visível no canto inferior direito.
 */
const WhatsAppFloat = () => {
  const href = whatsappLink(
    "Olá! Vim pelo site e gostaria de falar com um atendente da Auto Torque Mecânica."
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com atendente no WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-white shadow-[0_6px_24px_hsl(142_70%_45%_/_0.5)] hover:bg-[hsl(142_70%_40%)]"
    >
      <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-ping opacity-30" />
      <WhatsAppIcon className="w-7 h-7 relative" />
    </motion.a>
  );
};

export default WhatsAppFloat;
