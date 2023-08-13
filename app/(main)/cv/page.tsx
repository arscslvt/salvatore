"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function CV() {
  const handleCVDownload = () => {
    console.log("download");

    window.open("/cv.pdf", "_blank");
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="font-medium">To read my CV continue on read.cv.</p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href={"https://read.cv/salvatore"}
            target="_blank"
            className="max-w-max"
          >
            <Button variant={"default"}>
              <span className="after:content-['_↗'] after:text-xs after:ml-1">
                Continue on{" "}
                <span className="underline underline-offset-4">read.cv</span>
              </span>
            </Button>
          </Link>
          <Button variant="secondary" onClick={handleCVDownload}>
            Just download it
          </Button>
        </div>
      </div>
    </div>
  );
}
