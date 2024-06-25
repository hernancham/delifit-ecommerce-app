"use client";

import Link from "next/link";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";

import { LogoLink } from "./LogoLink";

import { navLinks } from "@/config/navLinks";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size='icon'
          variant='outline'
          className='sm:hidden'
        >
          <PanelLeft className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='sm:max-w-xs'
      >
        <SheetHeader>
          <SheetTitle>
            <LogoLink />
          </SheetTitle>
          <SheetDescription>Explore la opciones de navegación</SheetDescription>
        </SheetHeader>
        <nav className='grid gap-6 text-lg font-medium my-10'>
          {navLinks.map((link) => {
            if (link.position === "top") {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <link.icon />
                  {link.name}
                </Link>
              );
            }
          })}
        </nav>
        <Separator />
        <nav className='grid gap-6 text-lg font-medium my-10'>
          {navLinks.map((link) => {
            if (link.position === "bottom") {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <link.icon />
                  {link.name}
                </Link>
              );
            }
          })}
        </nav>
        <SheetFooter>
          <SheetClose>
            <Button className='w-full'>Cerrar Menu</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
