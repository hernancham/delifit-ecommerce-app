import Link from "next/link";

export default function Page() {
  return (
    <section>
      <div className='mx-auto w-full max-w-7xl px-5 py-24 md:px-10 md:py-20'>
        <div className='mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10'>
          <h2 className='text-center font-bold text-black text-3xl lg:text-5xl dark:text-gray-50'>
            ¿Necesitas ayuda?
          </h2>
        </div>

        <div className='mt-10 flex flex-col lg:flex-row lg:flex-wrap justify-between'>
          {/* Columna 1: Inicio de sesión */}
          <div className='mx-4 flex max-w-3xl flex-col lg:shrink lg:grow lg:basis-1/4'>
            <h3 className='text-center font-bold text-beige-dark text-2xl dark:text-green_p-dark'>Inicio de sesión</h3>
            <details className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <summary className='font-bold text-graphite-deep text-l dark:text-gray-50 cursor-pointer'>
                Registro
              </summary>
              <p className='font-inter mt-4 text-graphite-deep dark:text-graphite-light font-light text-justify text-sm'>
                 Regístrate y podrás comprar en línea. Únete ahora para disfrutar de promociones especiales 
                 y acumular puntos con cada compra, todo desde la comodidad de tu casa.
              </p>
            </details>
            <details className='relative my-0 w-full rounded-md border border-gray-300 px-12 py-8'>
              <summary className='font-bold text-graphite-deep text-l dark:text-gray-50 cursor-pointer'>
                Login
              </summary>
              <p className='font-inter mt-4 text-graphite-deep dark:text-graphite-light font-light text-justify text-sm'>
                Inicia sesión para acceder y gestionar tu cuenta personalizada, donde podrás realizar pedidos, 
                actualizar tus datos y disfrutar de una experiencia de compra eficiente.
              </p>
            </details>
          </div>

          {/* Columna 2: Dashboard */}
          <div className='mx-4 flex max-w-3xl flex-col lg:shrink lg:grow lg:basis-1/4'>
            <h3 className='text-center font-bold text-beige-dark text-2xl dark:text-green_p-dark'>Cuenta</h3>
            <details className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <summary className='font-bold text-graphite-deep text-l dark:text-gray-50 cursor-pointer'>
                Actualizar datos personales
              </summary>
              <p className='font-inter mt-4 text-graphite-deep dark:text-graphite-light font-light text-justify text-sm'>
                Puedes actualizar tus datos personales en la sección de Configuración dentro de tu cuenta, 
                o solicitar al administrador que lo haga por ti.
              </p>
            </details>
            <details className='relative my-0 w-full rounded-md border border-gray-300 px-12 py-8'>
              <summary className='font-bold text-graphite-deep text-l dark:text-gray-50 cursor-pointer'>
                Historial de pedidos 
              </summary>
              <p className='font-inter mt-4 text-graphite-deep dark:text-graphite-light font-light text-justify text-sm'>
                Accede a tu historial de pedidos para ver un registro detallado de todas tus compras anteriores. 
              </p>
            </details>
          </div>

          {/* Columna 3: Menú */}
          <div className='mx-4 flex max-w-3xl flex-col lg:shrink lg:grow lg:basis-1/4'>
            <h3 className='text-center font-bold text-beige-dark text-2xl dark:text-green_p-dark'>Promociones</h3>
            <details className='relative my-3 w-full rounded-md border border-gray-300 px-12 py-8'>
              <summary className='font-bold text-graphite-deep text-l dark:text-gray-50 cursor-pointer'>
                Descuentos
              </summary>
              <p className='font-inter mt-3 text-graphite-deep dark:text-graphite-light font-light text-justify text-sm'>
                Disfruta de descuentos en días festivos y por medio de puntos por cada compra realizada.
              </p>
            </details>
            <details className='relative w-full rounded-md border border-gray-300 px-12 py-8'>
              <summary className='font-bold text-graphite-deep text-l dark:text-gray-50 cursor-pointer'>
                Sistema de puntos
              </summary>
              <p className='font-inter mt-3 text-graphite-deep dark:text-graphite-light font-light text-justify text-sm'>
              Regístrate para acceder al sistema de puntos y disfruta de beneficios exclusivos. Obtén puntos 
              automáticamente por cada compra realizada en nuestro local.
              </p>
            </details>
          </div>
        </div>
        
        <p className='font-inter mx-auto mt-12 text-center text-graphite-deep dark:text-graphite-light'>
          ¿No pudiste resolver tus dudas?{" "}
          <Link
            href='https://wa.me/51917774573'
            className='text-black font-bold hover:text-graphite-deep dark:text-gray-50 dark:hover:text-green_p-dark'
          >
            contactános.
          </Link>
        </p>
      </div>
    </section>
  );
}
