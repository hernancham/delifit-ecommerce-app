import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let data;
  try {
    const activo = searchParams.get("activo");
    const id_categoria = searchParams.get("id_categoria");
    if (activo === "true" || activo === "false") {
      data = await prisma.promocion.findMany({
        where: {
          activo: activo === "true",
          id_cat_promocion: id_categoria ?? undefined,
        },
        select: {
          id_promocion: true,
          img_url: true,
          nombre: true,
          descripcion: true,
          precio_base: true,
          precio_oferta: true,
          id_cat_promocion: true,
          fecha_inicio: true,
          fecha_fin: true,
          dia_promocion: true,
          activo: true,
          createdAt: true,
          updatedAt: true,
          cat_promocion: {
            select: {
              nombre: true,
              id_cat_promocion: true,
            },
          },
        },
      });
    } else {
      data = await prisma.promocion.findMany({
        where: {
          id_cat_promocion: id_categoria ?? undefined,
        },
        select: {
          id_promocion: true,
          img_url: true,
          nombre: true,
          descripcion: true,
          precio_base: true,
          precio_oferta: true,
          id_cat_promocion: true,
          fecha_inicio: true,
          fecha_fin: true,
          dia_promocion: true,
          activo: true,
          createdAt: true,
          updatedAt: true,
          cat_promocion: {
            select: {
              nombre: true,
              id_cat_promocion: true,
            },
          },
        },
      });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer los promociones:", error.message);
    }
    return new NextResponse("Error al leer los promociones", { status: 500 });
  }
}
