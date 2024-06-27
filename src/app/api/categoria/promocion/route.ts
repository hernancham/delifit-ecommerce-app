import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let data;
  try {
    const activo = searchParams.get("activo");
    if (activo === "true" || activo === "false") {
      data = await prisma.categoriaPromocion.findMany({
        where: {
          activo: activo === "true",
        },
      });
    } else {
      data = await prisma.categoriaPromocion.findMany();
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al leer las categorias:", error.message);
    }
    return new NextResponse("Error al leer las categorias", { status: 500 });
  }
}
