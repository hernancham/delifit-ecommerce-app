"use client";

import Link from "next/link";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
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
        className='border-green_p-light dark:border-graphite-deep sm:max-w-xs bg-green_p-light dark:bg-graphite-deep'
      >
        <SheetHeader>
          <SheetTitle>
            <LogoLink />
          </SheetTitle>
        </SheetHeader>
        <nav className='grid gap-6 text-lg font-medium my-10'>
          {navLinks.map((link) => {
            if (link.position === "top") {
              return (
                <SheetClose
                  asChild
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  >
                    <link.icon />
                    {link.name}
                  </Link>
                </SheetClose>
              );
            }
          })}
        </nav>
        <Separator />
        <nav className='grid gap-6 text-lg font-medium my-10'>
          {navLinks.map((link) => {
            if (link.position === "bottom") {
              return (
                <SheetClose
                  asChild
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                  >
                    <link.icon />
                    {link.name}
                  </Link>
                </SheetClose>
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
