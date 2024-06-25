-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('User', 'Mod', 'Admin');

-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('DNI', 'Pasaporte', 'Carnet de Extranjería', 'Otro');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" TEXT NOT NULL,
    "image" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "tipo_doc" "TipoDocumento" NOT NULL,
    "puntos" INTEGER NOT NULL DEFAULT 0,
    "rol" "UserRole" NOT NULL DEFAULT 'User',
    "validacion" BOOLEAN NOT NULL DEFAULT false,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_telefono_key" ON "Usuario"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_documento_key" ON "Usuario"("documento");
