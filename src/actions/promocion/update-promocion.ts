"use server";

import { prisma } from "@/lib/prisma";

interface ProductoOnPromocionType {
  id_producto: string;
  id_promocion: string;
  cantidad: number;
}

interface updatePromocionByIdType {
  id_promocion: string;
  nombre: string;
  descripcion: string;
  precio_base: number;
  precio_oferta: number;
  id_cat_promocion: string;
  img_url: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  dia_promocion: string[];
  productos: ProductoOnPromocionType[];
}

export const updatePromocionById = async (values: updatePromocionByIdType) => {
  try {
    // Crear la promocion en la base de datos
    const data = await prisma.promocion.update({
      where: {
        id_promocion: values.id_promocion,
      },
      data: {
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio_base: values.precio_base,
        id_cat_promocion: values.id_cat_promocion,
        img_url: values.img_url,
      },
    });

    for (let producto of values.productos) {
      await prisma.productoOnPromocion.create({
        data: {
          id_producto: producto.id_producto,
          id_promocion: data.id_promocion,
          cantidad: producto.cantidad,
        },
      });
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear el producto:", error.message);
    }
    return null;
  }
};

interface updateActivityPromocionByIdType {
  id_promocion: string;
  activo: boolean;
}

export const updateActivityPromocionById = async (
  values: updateActivityPromocionByIdType
) => {
  try {
    // Actualizar el producto en la base de datos
    const data = await prisma.promocion.update({
      where: {
        id_promocion: values.id_promocion,
      },
      data: {
        activo: values.activo,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al actualizar la promoción:", error.message);
    }
    return null;
  }
};
