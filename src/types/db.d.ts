// Este archivo es para definir los tipos de datos que se obtienen de la base de datos
import { TipoMedida } from "@prisma/client";

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
