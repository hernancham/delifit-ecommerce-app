"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

interface TypeNavLink {
  path: string;
  label: string;
}

export function NavMenu({ navbarLinks }: { navbarLinks: TypeNavLink[] }) {
  const usePathName = usePathname();

  return (
    <nav className='hidden text-lg font-medium lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:text-sm'>
      <ul className='block lg:flex lg:space-x-8 xl:space-x-12'>
        {navbarLinks.map((nl, i) => {
          return (
            <li
              key={i}
              className=''
            >
              <Link
                href={nl.path}
                className={cn(
                  "flex py-2 text-base lg:mr-0 lg:inline-flex",
                  usePathName === nl.path
                    ? "text-lime-500 dark:text-white"
                    : "text-black hover:text-lime-500 dark:text-white/70 dark:hover:text-white"
                )}
              >
                {nl.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
