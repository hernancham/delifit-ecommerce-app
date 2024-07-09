interface SiteConfig {
  urlBase: string;
  title: string;
  description: string;
  keywords: string[];
  authors: Array<{
    name: string;
    url: string;
  }>;
  ogImage: string;
  name: string;
  logo: string;
  slogan: string;
  availability: string[];
  address: {
    direction: string;
    reference: string;
    mapUrl: string;
  };
  phone: string;
  email: string;
  social: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

export const siteConfig: SiteConfig = {
  urlBase: `${process.env.NEXT_PUBLIC_APP_URL}`,
  title: "Delifit",
  description:
    "Delifit pone a la disposición de sus clientes la posibilidad de realizar pedidos online.",
  keywords: ["Delifit", "Comida Saludable", "Food Ordering App"],
  authors: [
    {
      name: "HernanCham",
      url: "https://github.com/hernancham",
    },
  ],
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  name: "Delifit",
  logo: "/food-safety.svg",
  slogan: "Comida Saludable a tu alcance",
  availability: [
    "Lunes a Viernes de 9:00 am a 6:00 pm",
    "Sábados de 9:00 am a 2:00 pm",
  ],
  address: {
    direction: "Calle 123, Ciudad Bolívar, Bogotá, Colombia",
    reference: "Frente a la plaza principal",
    mapUrl: "https://goo.gl/maps/123456789",
  },
  phone: "917774573",
  email: "delifit.tacna@gmail.com",
  social: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/delifit.tacna",
      icon: "/social-icons/icons8-facebook.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/delifit.tacna/",
      icon: "/social-icons/icons8-instagram.svg",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@delifit.tacna18",
      icon: "/social-icons/icons8-tiktok.svg",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/51917774573",
      icon: "/social-icons/icons8-whatsapp.svg",
    },
  ],
};
