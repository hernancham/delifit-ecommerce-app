"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Funciones() {
  const router = useRouter();
  return (
    <div className='bg-green_p-dark dark:bg-gray-800 p-4 md:p-8'>
      <h1 className='font-semibold text-2xl md:text-4xl text-center py-6'>
        ¿Cómo funciona?
      </h1>

      <div className='grid gap-5 md:grid-cols-3 md:gap-10'>
        <div className='bg-white shadow-md dark:bg-gray-700 rounded-lg p-6 border-t-4 border-lime-900 mb-6 md:mb-0'>
          <div className='flex items-center mb-4'>
            <div className='bg-lime-700 dark:bg-gray-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4'>
              1
            </div>
            <h2 className='text-lg md:text-xl font-bold text-black dark:text-white'>
              Crea tu cuenta
            </h2>
          </div>
          <div className='ml-4'>
            <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
              Dinos con quién tenemos el gusto de atender y poder hacer
              seguimiento de tu pedido.
            </p>
            <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
              Podrás hacer tu pago al contado, Yape o Plin, así que no dejes
              pasar mañana lo que puedes hacer hoy.
            </p>
          </div>
        </div>

        <div className='bg-white shadow-md dark:bg-gray-700 rounded-lg p-6 border-t-4 border-lime-900 mb-6 md:mb-0'>
          <div className='flex items-center mb-4'>
            <div className='bg-lime-700 dark:bg-gray-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4'>
              2
            </div>
            <h2 className='text-lg md:text-xl font-bold text-black dark:text-white'>
              Elige tus platos y personalízalos
            </h2>
          </div>
          <div className='ml-4'>
            <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
              Puedes elegir entre todos los platos y postres preparados con los
              mejores ingredientes.
            </p>
            <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
              Además de eso tendrá la opción de poder personalizar ciertos
              productos, logrando así una mejor experiencia de acuerdo a tus
              gustos.
            </p>
          </div>
          <div className='flex justify-center items-end'>
            <button
              onClick={() => router.push("/menu")}
              className='bg-white dark:bg-gray-600 text-black dark:text-white border border-stone-700 px-4 py-2 rounded-sm flex items-center justify-center hover:bg-lime-800 hover:text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12h6m2 0a2 2 0 00-2-2h-1V7a2 2 0 00-4 0v3H9a2 2 0 00-2 2m12 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m5 3h2'
                />
              </svg>
              Ver platos y precios
            </button>
          </div>
        </div>

        <div className='bg-white shadow-md dark:bg-gray-700 rounded-lg p-6 border-t-4 border-lime-900 mb-6 md:mb-0'>
          <div className='flex items-center mb-4'>
            <div className='bg-lime-700 dark:bg-gray-600 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4'>
              3
            </div>
            <h2 className='text-lg md:text-xl font-bold text-black dark:text-white'>
              ¡Listo! Disfruta
            </h2>
          </div>
          <div className='ml-4'>
            <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
              Despreocúpate de tus comidas para siempre y recibe puntualmente
              tus comidas recién cocinadas de tu preferencia en la puerta de tu
              casa o en nuestro propio local.
            </p>
          </div>
        </div>
      </div>

      {/* Espacio adicional debajo del último div en dispositivos grandes */}
      <div className='md:hidden mb-6'></div>
      <div className='hidden md:block mb-10'></div>
    </div>
  );
}

export default Funciones;
