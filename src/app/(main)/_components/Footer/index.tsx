import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <>
      <footer
        id='Contactanos'
        className='border-t-4 border-graphite-deep bg-green_p-light dark:border-green_p-light dark:bg-graphite-deep w-full'
      >
        <div className='px-4 py-16 sm:px-8 lg:px-4'>
          <div className='flex flex-wrap justify-center sm:justify-between'>
            <div className='w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0 text-left'>
              <div className='mx-auto max-w-xs'>
                <p>
                  <span className='text-xs uppercase tracking-wide text-gray-900 dark:text-white'>
                    Llamar a
                  </span>
                  <br />
                  <Link
                    href='tel:917774573'
                    className='block text-2xl font-medium text-gray-900 hover:opacity-75 dark:text-green_p-dark sm:text-3xl'
                  >
                    {siteConfig.phone}
                  </Link>
                </p>
                <br />
                <div className='mx-auto max-w-xs'>
                  <p className='text-lg font-semibold text-gray-900 dark:text-white'>
                    ENCUÉNTRANOS
                  </p>
                  <p className='text-sm text-gray-700 dark:text-graphite mb-2'>
                    Intersección de calle Destua con calle Zela
                  </p>
                  <p className='text-sm text-gray-700 dark:text-graphite mb-2'>
                    BULEVAR PLAZA, Tacna - Tacna - Perú
                  </p>
                  <p className='text-sm text-gray-700 dark:text-graphite'>
                    <Link
                      href='mailto:delifit.tacna@gmail.com'
                      className='text-beige-dark hover:text-sky-700 dark:text-green_p-dark dark:hover:text-green_p-deep'
                    >
                      delifit.tacna@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0 text-left'>
              <div className='mx-auto max-w-xs'>
                <div className='mx-auto max-w-xs'>
                  <div className='mx-auto max-w-xs'>
                    <p className='text-lg font-semibold text-gray-900 dark:text-white'>
                      HORARIO DE ATENCIÓN
                    </p>
                    <ul className='mt-4 space-y-1 text-sm text-gray-700 dark:text-graphite'>
                      {siteConfig.availability.map((aval, i) => (
                        <li key={i}>{aval}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0'>
              <div className='mx-auto max-w-xs text-center'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2828976403366!2d-70.25250708892564!3d-18.012070081391542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acfba7602a723%3A0xafcaeeb2e74d2269!2sDelifit%20Tacna!5e0!3m2!1ses!2spe!4v1720482199609!5m2!1ses!2spe'
                  width={260}
                  height={210}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center my-8'>
            <SocialLinks GroupLink={siteConfig.social} />
          </div>

          <div className='mt-12 border-t border-black pt-12 dark:border-green_p-light'>
            <div className='sm:flex sm:items-center sm:justify-between'>
              <ul className='flex flex-wrap gap-4 text-xs justify-center'>
                <li>
                  <Link
                    href='/terminos-y-condiciones'
                    className='text-gray-800 text-base transition hover:opacity-75 dark:text-white py-4'
                  >
                    Términos y condiciones
                  </Link>
                </li>
              </ul>
              <p className='flex flex-wrap gap-4 text-base text-center justify-center  text-gray-800 dark:text-white py-4'>
                &copy; 2024. Delifitness E.I.R.L Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
