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

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <div>
                <p className='font-medium text-gray-900 dark:text-white'>
                  Services
                </p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='text-gray-700 transition hover:opacity-75 dark:text-white'
                    >
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='text-gray-700 transition hover:opacity-75 dark:text-white'
                    >
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='text-gray-700 transition hover:opacity-75 dark:text-white'
                    >
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='text-gray-700 transition hover:opacity-75 dark:text-white'
                    >
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='text-gray-700 transition hover:opacity-75 dark:text-white'
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className='font-medium text-gray-900 dark:text-white'>
                  Company
                </p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='text-gray-700 transition hover:opacity-75 dark:text-white'
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='text-gray-700 transition hover:opacity-75 dark:text-white'
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='text-gray-700 transition hover:opacity-75 dark:text-white'
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>
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
