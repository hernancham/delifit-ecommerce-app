"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { Logo } from "./Logo";
import { SheetMenu } from "./SheetMenu";
import { NavMenu } from "./NavMenu";
import { ThemeToggler } from "./ThemeToggler";
import { SignInButton, SignUpButton } from "./AuthButton";
import { OptionsAuth } from "./OptionsAuth";
import { Session } from "next-auth";

const navbarLinks = [
  { path: "/menu", label: "Menu" },
  { path: "/menu/productos", label: "Productos" },
  { path: "/menu/promociones", label: "Promociones" },
  { path: "/menu/carrito", label: "Carrito" },
  { path: "/preguntas-frecuentes", label: "FAQ" },
];

export const Header = ({ session }: { session: Session | null }) => {
  return (
    <header
      className={cn(
        "left-0 top-0 mx-auto flex w-full flex-row items-center bg-lime-500 bg-opacity-10 px-2 sm:px-4 md:px-8 lg:px-16",
        {
          "fixed z-50 bg-opacity-5 backdrop-blur-sm": true,
        }
      )}
    >
      <div className='flex w-auto flex-none flex-row items-center justify-start'>
        <SheetMenu navbarLinks={navbarLinks} />
        <Logo />
      </div>
      <div className='grow'>
        <NavMenu navbarLinks={navbarLinks} />
      </div>
      <div className='flex w-auto flex-none flex-row items-center justify-end'>
        {/* <Auth Buttons /> */}
        <ThemeToggler />
        {session ? (
          <OptionsAuth user={session.user} />
        ) : (
          <div className=' flex gap-2 m-4'>
            <SignInButton />
            <SignUpButton />
          </div>
        )}
      </div>
    </header>
  );
};
