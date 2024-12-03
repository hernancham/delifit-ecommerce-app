-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('User', 'Admin', 'Mesero', 'Cajero', 'Cocinero');

-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('DNI', 'Pasaporte', 'Carnet de Extranjería', 'Otro');

-- CreateEnum
CREATE TYPE "TipoMedida" AS ENUM ('Paquete', 'Botella', 'Caja', 'Unidad', 'Kilogramo', 'Gramo', 'Litro', 'Mililitro', 'Metro', 'Centimetro', 'Milimetro');

-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('Procesando', 'Pendiente', 'Aceptado', 'Rechazado', 'Enviado');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "tipo_doc" "TipoDocumento" NOT NULL,
    "puntos" INTEGER NOT NULL DEFAULT 0,
    "rol" "UserRole" NOT NULL DEFAULT 'User',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "validacion" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "CategoriaInsumo" (
    "id_cat_insumo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "CategoriaInsumo_pkey" PRIMARY KEY ("id_cat_insumo")
);

-- CreateTable
CREATE TABLE "Insumo" (
    "id_insumo" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "medida" "TipoMedida" NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_cat_insumo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Insumo_pkey" PRIMARY KEY ("id_insumo")
);

-- CreateTable
CREATE TABLE "InsumoOnProducto" (
    "id_insumo" TEXT NOT NULL,
    "id_producto" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "InsumoOnProducto_pkey" PRIMARY KEY ("id_insumo","id_producto")
);

-- CreateTable
CREATE TABLE "CategoriaProducto" (
    "id_cat_producto" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "CategoriaProducto_pkey" PRIMARY KEY ("id_cat_producto")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id_producto" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio_base" DOUBLE PRECISION NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_cat_producto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "ProductoOnPromocion" (
    "id_producto" TEXT NOT NULL,
    "id_promocion" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProductoOnPromocion_pkey" PRIMARY KEY ("id_producto","id_promocion")
);

-- CreateTable
CREATE TABLE "CategoriaPromocion" (
    "id_cat_promocion" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "CategoriaPromocion_pkey" PRIMARY KEY ("id_cat_promocion")
);

-- CreateTable
CREATE TABLE "Promocion" (
    "id_promocion" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio_base" DOUBLE PRECISION NOT NULL,
    "precio_oferta" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "estado_promocion" BOOLEAN NOT NULL DEFAULT false,
    "dia_promocion" TEXT[],
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_cat_promocion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Promocion_pkey" PRIMARY KEY ("id_promocion")
);

-- CreateTable
CREATE TABLE "ListaProducto" (
    "cantidad" INTEGER NOT NULL,
    "precio_cantidad" DOUBLE PRECISION NOT NULL,
    "id_producto" TEXT NOT NULL,
    "id_pedido" TEXT NOT NULL,

    CONSTRAINT "ListaProducto_pkey" PRIMARY KEY ("id_producto","id_pedido")
);

-- CreateTable
CREATE TABLE "ListaPromocion" (
    "cantidad" INTEGER NOT NULL,
    "precio_cantidad" DOUBLE PRECISION NOT NULL,
    "id_promocion" TEXT NOT NULL,
    "id_pedido" TEXT NOT NULL,

    CONSTRAINT "ListaPromocion_pkey" PRIMARY KEY ("id_promocion","id_pedido")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id_pedido" TEXT NOT NULL,
    "id_personal" TEXT,
    "id_usuario" TEXT NOT NULL,
    "subtotal" DOUBLE PRECISION DEFAULT 0,
    "desc_promocion" DOUBLE PRECISION DEFAULT 0,
    "desc_puntos" DOUBLE PRECISION DEFAULT 0,
    "impuesto" DOUBLE PRECISION DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "estado_pedido" "EstadoPedido" NOT NULL DEFAULT 'Procesando',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_telefono_key" ON "Usuario"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_documento_key" ON "Usuario"("documento");

-- AddForeignKey
ALTER TABLE "Insumo" ADD CONSTRAINT "Insumo_id_cat_insumo_fkey" FOREIGN KEY ("id_cat_insumo") REFERENCES "CategoriaInsumo"("id_cat_insumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumoOnProducto" ADD CONSTRAINT "InsumoOnProducto_id_insumo_fkey" FOREIGN KEY ("id_insumo") REFERENCES "Insumo"("id_insumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsumoOnProducto" ADD CONSTRAINT "InsumoOnProducto_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_id_cat_producto_fkey" FOREIGN KEY ("id_cat_producto") REFERENCES "CategoriaProducto"("id_cat_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoOnPromocion" ADD CONSTRAINT "ProductoOnPromocion_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoOnPromocion" ADD CONSTRAINT "ProductoOnPromocion_id_promocion_fkey" FOREIGN KEY ("id_promocion") REFERENCES "Promocion"("id_promocion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promocion" ADD CONSTRAINT "Promocion_id_cat_promocion_fkey" FOREIGN KEY ("id_cat_promocion") REFERENCES "CategoriaPromocion"("id_cat_promocion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaProducto" ADD CONSTRAINT "ListaProducto_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id_pedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaProducto" ADD CONSTRAINT "ListaProducto_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaPromocion" ADD CONSTRAINT "ListaPromocion_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id_pedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaPromocion" ADD CONSTRAINT "ListaPromocion_id_promocion_fkey" FOREIGN KEY ("id_promocion") REFERENCES "Promocion"("id_promocion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
