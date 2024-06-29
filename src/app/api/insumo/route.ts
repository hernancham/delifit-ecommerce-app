import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let data;
  try {
    const activo = searchParams.get("activo");
    const id_categoria = searchParams.get("id_categoria");
    if (activo === "true" || activo === "false") {
      data = await prisma.insumo.findMany({
        where: {
          activo: activo === "true",
          id_cat_insumo: id_categoria ?? undefined,
        },
        select: {
          id_insumo: true,
          nombre: true,
          cantidad: true,
          medida: true,
          id_cat_insumo: true,
          img_url: true,
          activo: true,
          cat_insumo: {
            select: {
              id_cat_insumo: true,
              nombre: true,
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      });
    } else {
      data = await prisma.insumo.findMany({
        where: {
          id_cat_insumo: id_categoria ?? undefined,
        },
        select: {
          id_insumo: true,
          nombre: true,
          cantidad: true,
          medida: true,
          id_cat_insumo: true,
          img_url: true,
          activo: true,
          cat_insumo: {
            select: {
              id_cat_insumo: true,
              nombre: true,
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer los insumos:", error.message);
    }
    return new NextResponse("Error al leer los insumos", { status: 500 });
  }
}
