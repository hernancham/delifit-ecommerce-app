import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  let data;
  const { searchParams } = new URL(request.url);

  try {
    const activo = searchParams.get("activo");
    if (activo === "true" || activo === "false") {
      data = await prisma.promocion.findMany({
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
