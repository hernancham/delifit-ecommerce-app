"use client";
import axios from "axios";
import { FormUpdate } from "../_components/FormUpdate";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Usuario } from "@prisma/client";

async function GetUserInfo(session: any) {
  const res = await axios.get<Usuario>(
    "/api/usuario/" + session.data.user.userId
  );
  return res.data;
}

export default function Configuracion() {
  const session = useSession();
  const [usuario, setUsuario] = useState<Usuario>();

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
    <div>
      <FormUpdate usuario={usuario} />
    </div>
  );
}
