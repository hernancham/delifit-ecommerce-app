"use server";

import { prisma } from "@/lib/prisma";

interface ProductoOnPromocionType {
  id_producto: string;
  id_promocion: string;
  cantidad: number;
}

interface createPromocionType {
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

export const createPromocion = async (values: createPromocionType) => {
  try {
    // Crear el insumo en la base de datos
    const data = await prisma.promocion.create({
      data: {
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio_base: values.precio_base,
        precio_oferta: values.precio_oferta,
        id_cat_promocion: values.id_cat_promocion,
        img_url: values.img_url,
        fecha_inicio: values.fecha_inicio,
        fecha_fin: values.fecha_fin,
        dia_promocion: values.dia_promocion,
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
