// Configurações centrais do site (fonte única de verdade)
// Centraliza nome, contato, endereço, WhatsApp e links do Google Maps/Meu Negócio.

export const SITE = {
  name: "Auto Torque Mecânica",
  shortName: "AutoTorque",
  url: "https://autotorquemecanica.com.br",
  phoneDisplay: "(48) 99620-9577",
  phoneRaw: "5548996209577",
  address: {
    street: "Rua Teodoto Tonon, 1131",
    city: "Tubarão",
    state: "SC",
    zip: "88705-010",
  },
  // Coordenadas aproximadas da oficina (Tubarão/SC)
  geo: { lat: -28.4713, lng: -49.0145 },
} as const;

const DEFAULT_WHATSAPP_TEXT = "Olá! Gostaria de agendar um serviço.";

/**
 * Gera sempre links wa.me (nunca api.whatsapp) já com o texto codificado.
 */
export const whatsappLink = (text: string = DEFAULT_WHATSAPP_TEXT): string =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`;

// Query do Google Maps incluindo o NOME da empresa — assim o Maps vincula
// automaticamente ao perfil do Google Meu Negócio (e não apenas ao endereço).
const MAPS_QUERY = encodeURIComponent(
  `${SITE.name}, ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state}, ${SITE.address.zip}`
);

/** Link "Como chegar" / abrir no Maps, vinculado ao Google Meu Negócio. */
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

/**
 * URL do iframe de mapa embedado.
 * z=14 abre o zoom mais aberto, deixando visíveis os bairros próximos.
 */
export const mapsEmbed = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=14&hl=pt-BR&output=embed`;
