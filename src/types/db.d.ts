// Este archivo es para definir los tipos de datos que se obtienen de la base de datos
import { TipoMedida, TipoDocumento, UserRole } from "@prisma/client";

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

export interface CategoriaInsumo {
  id_cat_insumo: string;
  nombre: string;
  activo: boolean;
}

export interface Usuario {
  id_usuario: string;
  image: string;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  activo: boolean;
  documento: string;
  telefono: string;
  tipo_documento: TipoDocumento;
  rol: UserRole;
  puntos: number;
  validacion: Boolean;
  createdAt: Date;
  updatedAt: Date;
}
