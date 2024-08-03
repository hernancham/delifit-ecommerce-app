import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let data;
  const excludedCategoryIds = [
    "clyi76cbg000cgap5d19tplr5", // Toppings de elección
    "clyitlb0100006yvac2pigawp", // Adicionales
    "clyiwt4ip000210vx8jlzcyea", // Otros agregados
  ];
  try {
    const activo = searchParams.get("activo");
    if (activo === "true" || activo === "false") {
      data = await prisma.categoriaProducto.findMany({
        where: {
          activo: true,
          id_cat_producto: {
            notIn: excludedCategoryIds,
          },
        },
      });
    } else {
      data = await prisma.categoriaProducto.findMany({
        where: {
          activo: true,
          id_cat_producto: {
            notIn: excludedCategoryIds,
          },
        },
      });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer las categorias:", error.message);
    }
    return new NextResponse("Error al leer las categorias", { status: 500 });
  }
}
