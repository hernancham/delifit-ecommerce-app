"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Usuario } from "@prisma/client";
import { useEffect, useState } from "react";

import Image from "next/image";
async function GetUserInfo(session: any) {
  const res = await axios.get<Usuario>(
    "/api/usuario/" + session.data.user.userId
  );
  return res.data;
}

export default function MiCuenta() {
  const session = useSession();
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (session.status === "authenticated") {
        const userInfo = await GetUserInfo(session);
        setUsuario(userInfo);
      }
    }
    fetchData();
  }, [session]);

  if (!usuario) {
    return <div className='mt-20'>No usuario :/</div>;
  }

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-neutral-700 flex flex-col items-center pt-20'>
      <h1 className='text-3xl font-bold mb-6 dark:text-gray-100 text-center'>
        Bienvenido, {usuario.nombre + " " + usuario.apellido}
      </h1>

      <h2 className='text-2xl font-semibold dark:text-white'>
        Puntos Actuales:
      </h2>
      <p className='mt-2 text-gray-600 dark:text-white mb-8'>
        Tienes <span className='font-bold'>{usuario.puntos}</span> puntos.
      </p>

      <div className='w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div
          className='bg-white shadow-lg rounded-lg p-8 cursor-pointer hover:bg-gray-50 text-center'
          onClick={() => router.push("/mi-cuenta/historial-pedidos")}
        >
          <Image
            src='/page-icons/order-history.png'
            alt='Historial de Pedidos'
            width={64}
            height={64}
            className='mx-auto py-2'
          />
          <h2 className='text-2xl font-semibold dark:text-black '>
            Historial de Pedidos
          </h2>
          <p className='mt-2 text-gray-600'>
            Mira tu historial de pedidos realizados.
          </p>
        </div>
        <div
          className='bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50 items-center text-center'
          onClick={() => router.push("/mi-cuenta/configuracion")}
        >
          <Image
            src='/page-icons/user-edit.png'
            alt='Configuración'
            width={64}
            height={64}
            className='mx-auto py-2'
          />
          <h2 className='text-2xl font-semibold dark:text-black'>
            Actualizar Datos Personales
          </h2>
          <p className='mt-2 text-gray-600'>
            Actualiza tu información personal.
          </p>
        </div>
      </div>
    </div>
  );
}
