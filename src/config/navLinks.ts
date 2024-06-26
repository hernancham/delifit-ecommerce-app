import { Icons } from "./navLinksIcons";
import { ElementType } from "react";

interface NavLink {
  name: string;
  href: string;
  icon: ElementType<any, keyof JSX.IntrinsicElements>;
  position: "top" | "bottom";
}

export const navLinks: NavLink[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Icons.dashboard,
    position: "top",
  },
  {
    name: "Usuarios",
    href: "/dashboard/usuarios",
    icon: Icons.usuarios,
    position: "top",
  },
  {
    name: "Insumos",
    href: "/dashboard/insumos",
    icon: Icons.insumos,
    position: "top",
  },
  {
    name: "Productos",
    href: "/dashboard/productos",
    icon: Icons.productos,
    position: "top",
  },
  {
    name: "Promociones",
    href: "/dashboard/promociones",
    icon: Icons.promociones,
    position: "top",
  },
  {
    name: "Ventas",
    href: "/dashboard/ventas",
    icon: Icons.ventas,
    position: "top",
  },
  {
    name: "Configuración",
    href: "/dashboard/configuracion",
    icon: Icons.configuracion,
    position: "bottom",
  },
  {
    name: "Ayuda",
    href: "/dashboard/ayuda",
    icon: Icons.ayuda,
    position: "bottom",
  },
];
