"use client";
import React from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";

interface TypeNavLink {
  path: string;
  label: string;
}

export function SheetMenu({ navbarLinks }: { navbarLinks: TypeNavLink[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size='icon'
          className='m-2 shrink-0 rounded-lg bg-slate-50 bg-opacity-5 lg:hidden'
        >
          <Menu className='h-8 w-8 stroke-current' />
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='bg-green-100 dark:bg-teal-950 p-8'
      >
        <SheetHeader className='flex justify-between items-center'>
          <Logo />
        </SheetHeader>
        <nav className='mt-8 grid gap-8 text-xl font-medium'>
          <ul className='space-y-4'>
            {navbarLinks.map((nl, i) => {
              return (
                <li
                  key={i}
                  className='hover:underline'
                >
                  <Link
                    href={nl.path}
                    className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  >
                    {nl.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
