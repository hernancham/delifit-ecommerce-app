import Link from "next/link";
import { CardAuth } from "@/components/custom/CardAuth";

// constants
import { loginRoute, registerRoute } from "@/config/authRoutes";
import { RegisterForm } from "./_components/RegisterForm";

export default function Page() {
  return (
    <div className='min-h-screen text-mcd-black lg:grid lg:grid-cols-2'>
      <div className='relative hidden lg:flex lg:items-center lg:justify-center'>
        <div className="bg-[url('/media/img1_register.jpg')] bg-center bg-cover w-full h-full rounded-lg border border-gray-300 overflow-hidden"></div>
        <div className='absolute inset-0 bg-black opacity-15 rounded-lg'></div>
      </div>
      <main className='flex items-center justify-center '>
        <div className='flex flex-col items-center justify-center'>
          <section className='w-full max-w-md'>
            <CardAuth
              header={
                <div className="bg-[url('/delifit-logos/delifit-logo.svg')] bg-center bg-cover w-20 h-20"></div>
              }
              title='Registrar cuenta'
              description='Crea una cuenta para empezar a disfrutar de nuestros servicios'
              footer={
                <span>
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    href={loginRoute}
                    className='text-graphite-deep hover:text-black dark:text-graphite-light dark:hover:text-graphite'
                  >
                    Iniciar sesión
                  </Link>
                </span>
              }
            >
              <RegisterForm />
            </CardAuth>
          </section>
        </div>
      </main>
    </div>
  );
}
