import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export const GET = auth(async function GET(request) {
  // obtener la session del usuario
  const session = request.auth;

  if (!session) {
    return NextResponse.json({ error: "Not Session" }, { status: 401 });
  }

  if (session.user.userRole !== UserRole.ADMIN) {
    return NextResponse.json({ error: "No tiene permisos" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  let data;
  try {
    const activo = searchParams.get("activo");
    if (activo === "true" || activo === "false") {
      data = await prisma.usuario.findMany({
        where: {
          activo: activo === "true",
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
          rol: true,
          puntos: true,
          activo: true,
          updatedAt: true,
          createdAt: true,
        },
      });
    } else {
      data = await prisma.usuario.findMany({
        select: {
          id_usuario: true,
          nombre: true,
          apellido: true,
          email: true,
          telefono: true,
          documento: true,
          tipo_doc: true,
          image: true,
          rol: true,
          puntos: true,
          activo: true,
          updatedAt: true,
          createdAt: true,
        },
      });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer los usuarios:", error.message);
    }
    return new NextResponse("Error al leer los usuarios", { status: 500 });
  }
});
