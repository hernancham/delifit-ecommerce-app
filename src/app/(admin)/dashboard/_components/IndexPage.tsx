"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HomeIcon } from "lucide-react";

import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function formatString(inputString: string) {
  return inputString
    .split("-") // Dividir el string en palabras utilizando el guion como separador
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizar la primera letra de cada palabra
    .join(" "); // Unir las palabras nuevamente en un solo string con un espacio como separador
}

export function IndexPage() {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  return (
    <Breadcrumb className='hidden md:flex'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='/'>
              <HomeIcon className='w-4 h-4' />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathArray.map((item, index) => {
          const partialPath = "/" + pathArray.slice(0, index + 1).join("/");
          return (
            <Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href={partialPath}
                    className=''
                  >
                    {formatString(item)}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
