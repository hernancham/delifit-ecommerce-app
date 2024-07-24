"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Usuario } from "@prisma/client";
import { useEffect, useState } from "react";
import { User } from "next-auth";
async function GetUserInfo(user: User) {
  const res = await axios.get<Usuario>("/api/usuario/" + user.userId);
  return res.data;
}

export default function MiCuenta({ user }: { user: User }) {
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    async function fetchData() {
      const userInfo = await GetUserInfo(user);
      setUsuario(userInfo);
    }
    fetchData();
  }, [user]);

  if (!usuario) {
    return <div className='mt-20'>No usuario :/</div>;
  }

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-neutral-700 flex flex-col items-center pt-20'>
      <h1 className='text-3xl font-bold mb-6 dark:text-gray-100'>
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
          className='bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50'
          onClick={() => router.push("/historial-pedidos")}
        >
          <h2 className='text-2xl font-semibold dark:text-black'>
            Historial de Pedidos
          </h2>
          <p className='mt-2 text-gray-600'>
            Mira tu historial de pedidos realizados.
          </p>
        </div>
        <div
          className='bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50'
          onClick={() => router.push("/configuracion")}
        >
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
