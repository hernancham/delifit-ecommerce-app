"use server";

import { prisma } from "@/lib/prisma";

export const getUsuarioPorTelefono = async (telefono: string) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: { telefono: telefono },
    });

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUsuarioPorEmail = async (email: string) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: { email: email },
    });

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUsuarioByDocumento = async (documento: string) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: { documento: documento },
    });

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUsuarioById = async (id_usuario: string) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: { id_usuario: id_usuario },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
