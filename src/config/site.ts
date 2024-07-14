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
  description: "Delifit, disfruta la aventura de comer delicioso y saludable",
  keywords: ["Delifit", "Comida Saludable", "Food Ordering App"],
  authors: [
    {
      name: "Hernan Ander Chambilla Chambilla",
      url: "https://github.com/hernancham",
    },
    {
      name: "Rivaldo Danilo Moron Maylle",
      url: "https://github.com/RDaniloMM",
    },
    {
      name: "Edson Josue Peraza Chambilla",
      url: "https://github.com/JosueO7",
    },
    {
      name: "Francisco José Castro Flores",
      url: "https://www.facebook.com/franciscojose.cf",
    },
    {
      name: "Juan José Hermoza Gutierrez",
      url: "https://www.facebook.com/juan.hermoza.988",
    },
    {
      name: "Elian Yeltzin Paniagua Mariaca",
      url: "https://github.com/epaniaguam",
    },
    {
      name: "Christopher Liam Piero Llamoca Chura",
      url: "https://www.instagram.com/chriiscrow/",
    },
  ],
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  name: "Delifit",
  logo: "/delifit-logo.svg",
  slogan: "Comida Saludable a tu alcance",
  availability: [
    "Lunes a Viernes:",
    "9:00 a.m. a 6:00 p.m.",
    "Sábados:",
    "9:00 a.m. a 2:00 p.m.",
    "Domingos:",
    "Solo Delivery de 2 p.m. a 7 p.m.",
  ],
  address: {
    direction:
      "Intersección de calle Destua con calle Zela - BULEVAR PLAZA, Tacna - Tacna - Perú",
    reference: "BULEVAR PLAZA",
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
