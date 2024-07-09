"use client";
import React from "react";

import Link from "next/link";

import { Menu } from "lucide-react";

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
          <Menu className='h-6 w-6 stroke-current' />
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='bg-white'
      >
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <nav className='grid gap-6 text-lg font-medium'>
          <ul>
            {navbarLinks.map((nl, i) => {
              return (
                <li
                  key={i}
                  className='hover:underline'
                >
                  <Link
                    href={nl.path}
                    className='text-muted-foreground hover:text-foreground'
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
