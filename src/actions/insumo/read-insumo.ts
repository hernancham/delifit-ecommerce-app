"use server";

import { prisma } from "@/lib/prisma";

interface readInsumoByIdType {
  id_insumo: string;
}

export const readInsumoById = async (values: readInsumoByIdType) => {
  try {
    const data = await prisma.insumo.findUnique({
      where: {
        id_insumo: values.id_insumo,
      },
      select: {
        id_insumo: true,
        nombre: true,
        cantidad: true,
        medida: true,
        id_cat_insumo: true,
        img_url: true,
        cat_insumo: {
          select: {
            id_cat_insumo: true,
            nombre: true,
          },
        },
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer el insumo:", error.message);
    }
    return null;
  }
};

interface readInsumosByCategoryType {
  id_cat_insumo: string;
}

export const readInsumosByCategory = async (
  values: readInsumosByCategoryType
) => {
  try {
    const data = await prisma.insumo.findMany({
      where: {
        id_cat_insumo: values.id_cat_insumo,
      },
      select: {
        id_insumo: true,
        nombre: true,
        cantidad: true,
        medida: true,
        id_cat_insumo: true,
        img_url: true,
        cat_insumo: {
          select: {
            id_cat_insumo: true,
            nombre: true,
          },
        },
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer el insumo:", error.message);
    }
    return null;
  }
};

interface readInsumosByActivityType {
  activo: boolean;
}

export const readInsumosByActivity = async (
  values: readInsumosByActivityType
) => {
  try {
    const data = await prisma.insumo.findMany({
      where: {
        activo: values.activo,
      },
      select: {
        id_insumo: true,
        nombre: true,
        cantidad: true,
        medida: true,
        id_cat_insumo: true,
        img_url: true,
        cat_insumo: {
          select: {
            id_cat_insumo: true,
            nombre: true,
          },
        },
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer el insumo:", error.message);
    }
    return null;
  }
};

export const readInsumos = async () => {
  try {
    const data = await prisma.insumo.findMany({
      select: {
        id_insumo: true,
        nombre: true,
        cantidad: true,
        medida: true,
        id_cat_insumo: true,
        img_url: true,
        cat_insumo: {
          select: {
            id_cat_insumo: true,
            nombre: true,
          },
        },
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer el insumo:", error.message);
    }
    return null;
  }
};
