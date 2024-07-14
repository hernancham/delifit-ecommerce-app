import Link from "next/link";

import { CardAuth } from "@/components/custom/CardAuth";
import { LoginForm } from "./_components/LoginForm";
// constants
import { registerRoute } from "@/config/authRoutes";

export default function Page() {
  return (
    <div className='grid min-h-screen text-mcd-black antialiased lg:grid-cols-2'>
      <div className='relative hidden bg-neutral-100 lg:block'>
        <div className="bg-[url('/media/img1_login.jpg')] bg-center bg-cover w-full h-full top-0 left-0 pointer-events-none absolute inset-0 aspect-w-4 aspect-h-3"></div>
      </div>
      <main className='flex items-center justify-center'>
        <div className='flex items-center justify-center'>
          <section>
            <CardAuth
              title='Iniciar sesión'
              description='Bienvenido de nuevo, entra y empieza a disfrutar'
              footer={
                <span>
                  ¿Aún no tienes cuenta?{" "}
                  <Link href={registerRoute}>Registrarse</Link>
                </span>
              }
            >
              <LoginForm />
            </CardAuth>
          </section>
        </div>
      </main>
    </div>
  );
}
