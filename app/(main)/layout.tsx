"use client";

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import ItemsProvider from "@/contexts/useItems";
import { TooltipProvider } from "@/components/ui/tooltip";

const routes: {
  name: string;
  path: string;
}[] = [
  {
    name: "introduction",
    path: "/",
  },
  {
    name: "education",
    path: "/education",
  },
  {
    name: "my cv",
    path: "/cv",
  },
  {
    name: "shop & services",
    path: "/shop",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <ItemsProvider>
        <div className="h-screen w-screen flex flex-col md:flex-row">
          <div className="md:h-full flex flex-col gap-4 flex-1 max-w-xs px-8 md:px-12 pt-12 md:pt-28">
            <div>
              <Link href={"/"} className="w-max">
                <h1 className="font-medium text-lg max-w-max w-max">
                  salvatore aresco
                </h1>
              </Link>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                {routes.map((route, i) => {
                  const isActive = pathname === route.path;

                  return (
                    <Link href={route.path} key={i} className="last:mt-4">
                      <li
                        className={
                          !isActive
                            ? "text-slate-500 hover:underline hover:underline-offset-4"
                            : ""
                        }
                      >
                        {route.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="flex-1 justify-end flex-col hidden md:flex">
              <Footer />
            </div>
          </div>
          <div className="flex-1 pt-16 md:pt-28 px-8 md:px-18 lg:px-24 xl:px-36">
            {children}
          </div>
          <div className="flex-1 justify-end flex-col flex md:hidden px-8 pt-10">
            <Footer />
          </div>
        </div>
      </ItemsProvider>
    </TooltipProvider>
  );
}

const Footer = () => {
  return (
    <div className="flex flex-col pb-8 gap-1">
      <p className="text-sm text-slate-500">
        all rights reserved, © {new Date().getFullYear()}.
      </p>
      <div className="text-sm gap-2 flex flex-wrap">
        <Link
          href={"https://instagram.com/arscslvt"}
          className="hover:after:content-['_↗'] after:text-xs"
        >
          Instagram
        </Link>
        <span className="text-slate-300">—</span>
        <Link
          href={"https://x.com/arscslvt"}
          className="hover:after:content-['_↗'] after:text-xs"
        >
          X <span className="text-xs text-slate-500">(formerly Twitter)</span>
        </Link>
        <span className="text-slate-300">—</span>
        <Link
          href={"https://www.linkedin.com/in/salvatorearesco"}
          className="hover:after:content-['_↗'] after:text-xs"
        >
          LinkedIn
        </Link>
        <span className="text-slate-300">.</span>
      </div>
    </div>
  );
};
