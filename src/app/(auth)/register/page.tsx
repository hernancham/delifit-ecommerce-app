import Link from "next/link";

import { CardAuth } from "@/components/custom/CardAuth";
import { RegisterForm } from "./_components/RegisterForm";
// constants
import { loginRoute } from "@/config/authRoutes";

export default function Page() {
  return (
    <div className='grid min-h-screen text-mcd-black antialiased lg:grid-cols-2'>
      <div className='relative hidden bg-neutral-100 lg:block'>
        <div className="bg-[url('/media/img1_register.jpg')] bg-center bg-cover w-full h-full absolute inset-0"></div>
      </div>
      <main className='flex items-center justify-center'>
        <CardAuth
          title='Registrar cuenta'
          description='Crea una cuenta para empezar a disfrutar de nuestros servicios'
          footer={
            <span>
              ¿Ya tienes una cuenta?{" "}
              <Link href={loginRoute}>Iniciar sesión</Link>
            </span>
          }
        >
          <RegisterForm />
        </CardAuth>
      </main>
    </div>
  );
}
