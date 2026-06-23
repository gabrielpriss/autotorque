import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, X } from "lucide-react";

const cities = ["Tubarão", "Criciúma", "Laguna", "Florianópolis", "Gravatal", "Içara", "Jaguaruna"];

const names = [
  "Carlos", "Ana", "Roberto", "Maria", "João", "Paula", "Fernando", "Juliana",
  "Ricardo", "Camila", "Marcos", "Letícia", "André", "Beatriz", "Lucas"
];

const services = [
  "troca de óleo", "revisão completa", "manutenção de freios",
  "serviço de suspensão", "diagnóstico eletrônico", "troca de fluidos"
];

const generateNotification = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const service = services[Math.floor(Math.random() * services.length)];
  const minutes = Math.floor(Math.random() * 30) + 1;

  return {
    id: Date.now(),
    name,
    city,
    service,
    time: `${minutes} min atrás`,
  };
};

const ClientNotifications = () => {
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    name: string;
    city: string;
    service: string;
    time: string;
  }>>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Initial notification after 3 seconds
    const initialTimeout = setTimeout(() => {
      setNotifications([generateNotification()]);
    }, 3000);

    // Subsequent notifications every 15-30 seconds
    const interval = setInterval(() => {
      if (isVisible) {
        setNotifications([generateNotification()]);
      }
    }, Math.random() * 15000 + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isVisible]);

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notifications.length > 0) {
      const timeout = setTimeout(() => {
        setNotifications([]);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [notifications]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            className="glass rounded-lg p-4 shadow-lg border border-primary/20"
          >
            <button
              onClick={() => {
                setNotifications([]);
                setIsVisible(false);
              }}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
                <UserPlus className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="pr-4">
                <p className="text-sm font-medium">
                  <span className="text-primary">{notification.name}</span> de{" "}
                  <span className="text-primary">{notification.city}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Agendou {notification.service}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClientNotifications;
