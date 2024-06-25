"use server";

import { prisma } from "@/lib/prisma";

interface readUsuarioByIdType {
  id_usuario: string;
}

export const readUsuarioById = async (values: readUsuarioByIdType) => {
  try {
    const data = await prisma.usuario.findUnique({
      where: {
        id_usuario: values.id_usuario,
      },
      select: {
        id_usuario: true,
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
        documento: true,
        tipo_doc: true,
        image: true,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer el usuario:", error.message);
    }
    return null;
  }
};

interface readUsuariosByActivityType {
  activo: boolean;
}

export const readUsuariosByActivity = async (
  values: readUsuariosByActivityType
) => {
  try {
    const data = await prisma.usuario.findMany({
      where: {
        activo: values.activo,
      },
      select: {
        id_usuario: true,
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
        documento: true,
        tipo_doc: true,
        image: true,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer los usuarios activos:", error.message);
    }
    return null;
  }
};

export const readUsuarios = async () => {
  try {
    const data = await prisma.usuario.findMany({
      select: {
        id_usuario: true,
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
        documento: true,
        tipo_doc: true,
        image: true,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer los usuarios:", error.message);
    }
    return null;
  }
};
