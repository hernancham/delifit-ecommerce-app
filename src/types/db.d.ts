// Este archivo es para definir los tipos de datos que se obtienen de la base de datos
import { TipoMedida, TipoDocumento, UserRole } from "@prisma/client";
import exp from "constants";

export interface Usuario {
  id_usuario: string;
  image: string;
  nombre: string;
  apellido: string;
  email: string;
  activo: boolean;
  documento: string;
  telefono: string;
  tipo_doc: TipoDocumento;
  rol: UserRole;
  puntos: number;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoriaInsumo {
  id_cat_insumo: string;
  nombre: string;
  activo: boolean;
}
export interface Insumo {
  id_insumo: string;
  img_url: string;
  nombre: string;
  cantidad: number;
  medida: TipoMedida;
  id_cat_insumo: string;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
  cat_insumo: {
    nombre: string;
    id_cat_insumo: string;
  };
}

export interface CategoriaProducto {
  id_cat_producto: string;
  nombre: string;
  activo: boolean;
}

export interface Producto {
  id_producto: string;
  img_url: string;
  nombre: string;
  descripcion: string;
  precio_base: number;
  id_cat_producto: string;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
  cat_producto: {
    nombre: string;
    id_cat_producto: string;
  };
}

export interface CategoriaPromocion {
  id_cat_promocion: string;
  nombre: string;
  activo: boolean;
}

export interface Promocion {
  id_promocion: string;
  img_url: string;
  nombre: string;
  descripcion: string;
  precio_base: number;
  precio_oferta: number;
  dia_promocion: string[];
  estado_promocion: boolean;
  fecha_inicio: Date;
  fecha_fin: Date;
  id_cat_promocion: string;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
  cat_promocion: {
    nombre: string;
    id_cat_promocion: string;
  };
}
