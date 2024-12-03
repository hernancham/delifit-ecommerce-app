"use client";

import { UserRole, Usuario } from "@prisma/client";
import { useSession } from "next-auth/react";
import { CardOptions } from "./CardOptions";
import { useEffect, useState } from "react";
import axios from "axios";

async function GetUserInfo(session: any) {
  const res = await axios.get<Usuario>("/api/usuario/" + session.user.userId);
  return res.data;
}

export const RolOptions = () => {
  const { data: session, status } = useSession();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const rolEmpleado = usuario?.rol;

  useEffect(() => {
    async function fetchData() {
      if (status === "authenticated") {
        const userInfo = await GetUserInfo(session);
        setUsuario(userInfo);
      }
    }
    fetchData();
  }, [session]);

  return (
    <>
      {/* {status === "unauthenticated" && <div>No estas logueado</div>}
      {status === "loading" && <div>Cargando...</div>} */}
      <div className='w-full max-w-3xl grid grid-cols-1 gap-6'>
        {status === "authenticated" ? (
          <>
            {rolEmpleado === UserRole.ADMIN && (
              <>
                <div className='text-2xl font-bold text-center text-sky-800 dark:text-sky-200'>
                  Bienvenido {usuario?.nombre}
                </div>
                <p className='font-bold text-center'>
                  Tienes el Rol de {rolEmpleado}
                </p>
                <CardOptions
                  url='/dashboard/usuarios'
                  title='Administrador'
                  image='/page-icons/admin.png'
                  description='Panel de administrador'
                  footer='Ir al panel'
                />
              </>
            )}
            {rolEmpleado === UserRole.MESERO && (
              <>
                <div className='text-2xl font-bold text-center text-sky-800 dark:text-sky-200'>
                  Bienvenido {usuario?.nombre}
                </div>
                <p className='font-bold text-center'>
                  Tienes el Rol de {rolEmpleado}
                </p>
                <CardOptions
                  url='/menu/productos'
                  title='Productos'
                  image='/page-icons/products.png'
                  description='Panel de productos'
                  footer='Ir al panel'
                />
                <CardOptions
                  url='/menu/carrito'
                  title='Carrito'
                  image='/page-icons/cart.png'
                  description='Panel de carrito'
                  footer='Ir al panel'
                />
              </>
            )}
            {rolEmpleado === UserRole.USER && (
              <>
                <div className='text-2xl font-bold text-center text-sky-800 dark:text-sky-200'>
                  Bienvenido {usuario?.nombre}
                </div>
                <p className='font-bold text-center'>
                  Tienes el Rol de {rolEmpleado}
                </p>
                <p className='text-xl font-bold text-center text-teal-700 dark:text-teal-300'>
                  por el momento el Usuario comun no tiene opciones
                </p>
              </>
            )}
          </>
        ) : (
          <div className='flex flex-col justify-center items-center mt-20'>
            <div className='text-2xl font-bold text-center text-red-800 dark:text-red-200'>
              Inicia sesión o registrate para ver tus opciones
            </div>
            <img
              src='/assets/online-store-img.svg'
              alt='Tienda'
              className='w-full h-full'
            />
          </div>
        )}
      </div>
    </>
  );
};
