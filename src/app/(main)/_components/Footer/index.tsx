"use client";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <>
      <footer className='border-t-4 border-lime-600 bg-lime-50 dark:bg-lime-950 lg:grid lg:grid-cols-5 '>
        <div className='relative block h-32 lg:col-span-2 lg:h-full'>
          <Image
            src='food-safety.svg'
            alt=''
            className='absolute inset-0 h-full w-full object-cover'
            width={1548}
            height={1024}
          />
        </div>

        <div className='px-8 py-16 sm:px-12 lg:col-span-3 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            <div>
              <p>
                <span className='text-xs uppercase tracking-wide text-gray-500 dark:text-white'>
                  Llamar a
                </span>

                <Link
                  href='#'
                  className='block text-2xl font-medium text-gray-900 hover:opacity-75 dark:text-white sm:text-3xl'
                >
                  {siteConfig.phone}
                </Link>
              </p>

              <ul className='mt-8 space-y-1 text-sm text-gray-700 dark:text-white'>
                {siteConfig.availability.map((aval, i) => (
                  <li key={i}>{aval}</li>
                ))}
                <li>{siteConfig.description}</li>
              </ul>

              <SocialLinks GroupLink={siteConfig.social} />
            </div>
            <div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2828976403366!2d-70.25250708892564!3d-18.012070081391542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acfba7602a723%3A0xafcaeeb2e74d2269!2sDelifit%20Tacna!5e0!3m2!1ses!2spe!4v1720482199609!5m2!1ses!2spe'
                width={280}
                height={210}
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>

          <div className='mt-12 border-t border-black pt-12  dark:border-gray-100'>
            <div className='sm:flex sm:items-center sm:justify-between'>
              <ul className='flex flex-wrap gap-4 text-xs'>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:opacity-75 dark:text-white'
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:opacity-75 dark:text-white'
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:opacity-75 dark:text-white'
                  >
                    Cookies
                  </a>
                </li>
              </ul>

              <p className='mt-8 text-xs text-gray-500 dark:text-white sm:mt-0'>
                &copy; 2022. Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
