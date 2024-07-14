"use client";

import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navLinks } from "@/config/navLinks";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SideNav() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const pathname = usePathname();
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className='pr-4'>
      <div
        className={cn(
          isSidebarExpanded ? "w-[200px]" : "w-[68px]",
          "border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-full bg-primary-foreground"
        )}
      >
        <aside className='flex h-full flex-col w-full break-words px-4   overflow-x-hidden columns-1 bg-green_p-light dark:bg-graphite-deep'>
          {/* Top */}
          <div className='mt-4 relative pb-2 '>
            <div className='flex flex-col space-y-1'>
              {navLinks.map((item, idx) => {
                if (item.position === "top") {
                  return (
                    <Fragment key={idx}>
                      <div className='space-y-1'>
                        <SideNavItem
                          label={item.name}
                          path={item.href}
                          active={pathname === item.href}
                          isSidebarExpanded={isSidebarExpanded}
                        >
                          <item.icon
                            size={20}
                            className=''
                          />
                        </SideNavItem>
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
          {/* Bottom */}
          <div className='sticky bottom-0  mt-auto whitespace-nowrap mb-4 transition duration-200 block'>
            {navLinks.map((item, idx) => {
              if (item.position === "bottom") {
                return (
                  <Fragment key={idx}>
                    <div className='space-y-1'>
                      <SideNavItem
                        label={item.name}
                        path={item.href}
                        active={pathname === item.href}
                        isSidebarExpanded={isSidebarExpanded}
                      >
                        <item.icon
                          size={20}
                          className=''
                        />
                      </SideNavItem>
                    </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </aside>
        <div className='mt-[calc(calc(90vh)-40px)] relative'>
          <button
            type='button'
            className='absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-neutral-100 dark:bg-secondary'
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export const SideNavItem: React.FC<{
  label: string;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
  children: React.ReactNode;
}> = ({ label, path, active, isSidebarExpanded, children }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={cn(
            "h-full relative flex items-center whitespace-nowrap rounded-md",
            active
              ? "font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white"
              : "hover:bg-neutral-200  hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
          )}
        >
          <div className='relative font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100'>
            {children}
            <span>{label}</span>
          </div>
        </Link>
      ) : (
        <TooltipProvider delayDuration={70}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={path}
                className={cn(
                  "h-full relative flex items-center whitespace-nowrap rounded-md",
                  active
                    ? "font-base text-sm  bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white"
                    : "hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                )}
              >
                <div className='relative font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100'>
                  {children}
                  <span className='sr-only'>{label}</span>
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side='left'
              className='px-3 py-1.5 text-xs'
              sideOffset={10}
            >
              <span>{label}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};
