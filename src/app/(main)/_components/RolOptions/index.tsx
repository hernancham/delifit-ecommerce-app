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
        {status === "authenticated" && (
          <>
            {rolEmpleado === UserRole.ADMIN && (
              <CardOptions
                url='/dashboard'
                title='Administrador'
                image='/page-icons/admin.png'
                description='Panel de administrador'
                footer='Ir al panel'
              />
            )}
            {rolEmpleado === UserRole.MESERO && (
              <>
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
            {rolEmpleado === UserRole.CAJERO && (
              <CardOptions
                url='/cajero/dashboard'
                title='Cajero'
                image='/page-icons/cashier.png'
                description='Panel de cajero'
                footer='Ir al panel'
              />
            )}
            {rolEmpleado === UserRole.COCINERO && (
              <CardOptions
                url='/cocinero/dashboard'
                title='Cocinero'
                image='/page-icons/chef.png'
                description='Panel de cocinero'
                footer='Ir al panel'
              />
            )}
          </>
        )}
      </div>
    </>
  );
};
