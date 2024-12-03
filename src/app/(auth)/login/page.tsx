import Link from "next/link";
import { CardAuth } from "@/components/custom/CardAuth";
import { LoginForm } from "./_components/LoginForm";
// constants
import { registerRoute } from "@/config/authRoutes";

export default function Page() {
  return (
    <div className='min-h-screen text-mcd-black lg:grid lg:grid-cols-2'>
      <div className='relative hidden lg:flex lg:items-center lg:justify-center'>
        <div className="bg-[url('/assets/login-img.svg')] bg-center bg-cover w-full h-full rounded-lg border border-gray-300 overflow-hidden"></div>
        <div className='absolute inset-0 bg-black opacity-15 rounded-lg'></div>
      </div>
      <main className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center max-lg:mt-28'>
          <section className='w-full max-w-md'>
            <CardAuth
              header={
                <div className="bg-[url('/assets/esisfactu-logo.svg')] bg-center bg-cover w-20 h-20"></div>
              }
              title='Iniciar sesión'
              description='Bienvenido de nuevo, entra y empieza a disfrutar'
              footer={
                <span>
                  ¿Aún no tienes cuenta?{" "}
                  <Link
                    href={registerRoute}
                    className='text-graphite-deep hover:text-black dark:text-graphite-light dark:hover:text-graphite text-lg'
                  >
                    Registrarse
                  </Link>
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
