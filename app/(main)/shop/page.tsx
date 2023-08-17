"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useItems } from "@/contexts/useItems";
import Item from "@/types/item";
import Image from "next/image";
import React from "react";

import { SiFiverr } from "react-icons/si";

export default function Shop() {
  const { items } = useItems();

  return (
    <div>
      <div className="mb-12 sm:pt-1">
        <p className="text-sm text-slate-500 text-center">
          This page is still under construction, some goodies may not be
          available.
        </p>
      </div>

      <div>
        {items.map((item: Item, i: number) => (
          <Item item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

const Item = ({ item }: { item: Item }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="w-full md:w-52 flex flex-col gap-2">
      <Tooltip>
        {!isActive && (
          <TooltipContent className="hidden md:block">
            Long press to scale
          </TooltipContent>
        )}
        <TooltipTrigger asChild>
          <div
            className="md:w-full rounded-sm overflow-clip md:active:scale-[200%] md:active:rounded-none transition-all duration-500 active:select-none"
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
          >
            <Image
              src={item?.image || ""}
              alt={item?.slug || ""}
              width={720}
              height={480}
              className="w-full h-full active:pointer-events-none"
            />
          </div>
        </TooltipTrigger>
      </Tooltip>
      <div>
        {item.categories && (
          <div className="flex flex-wrap gap-2 py-2">
            {item?.categories?.map((category, i) => (
              <Badge key={i} className="rounded-none" variant={"secondary"}>
                {category}
              </Badge>
            ))}
          </div>
        )}
        <h1 className="font-medium">{item.title}</h1>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-500">
          from ${item.startingPrice}
        </span>
        <Button size={"sm"} disabled={item.fiverr_link ? false : true}>
          {item.fiverr_link ? (
            <>
              View on
              <SiFiverr className="h-9 w-max ml-[4px] inline-flex pb-[1px] text-green-400" />
            </>
          ) : (
            "Not available"
          )}
        </Button>
      </div>
    </div>
  );
};
