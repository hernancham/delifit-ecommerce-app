"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Usuario } from "@prisma/client";
import { useEffect, useState } from "react";

async function GetUserInfo(session: any) {
  const res = await axios.get<Usuario>(
    "/api/usuario/" + session?.data?.user.userId
  );
  return res.data;
}

export default function MiCuenta() {
  const router = useRouter();
  const session = useSession();
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
    return <div>Loading...</div>;
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center pt-20'>
      <h1 className='text-3xl font-bold mb-6'>Bienvenido, {usuario.nombre}</h1>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-2xl font-semibold'>Puntos Actuales</h2>
        <p className='mt-2 text-gray-600'>
          Tienes <span className='font-bold'>{usuario.puntos}</span> puntos.
        </p>
      </div>
      <div className='w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div
          className='bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50'
          onClick={() => router.push("/historial-pedidos")}
        >
          <h2 className='text-2xl font-semibold'>Historial de Pedidos</h2>
          <p className='mt-2 text-gray-600'>
            Mira tu historial de pedidos realizados.
          </p>
        </div>
        <div
          className='bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50'
          onClick={() => router.push("/configuracion")}
        >
          <h2 className='text-2xl font-semibold'>
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
