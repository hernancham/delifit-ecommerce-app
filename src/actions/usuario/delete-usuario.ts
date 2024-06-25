"use server";

import { prisma } from "@/lib/prisma";

interface deleteUsuarioByIdType {
  id_usuario: string;
}

export const deleteUsuarioById = async (values: deleteUsuarioByIdType) => {
  try {
    const data = await prisma.usuario.delete({
      where: {
        id_usuario: values.id_usuario,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al eliminar el usuario:", error.message);
    }
    return null;
  }
};
