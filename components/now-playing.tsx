"use client";

import React, { useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { useItems } from "@/contexts/useItems";
import { Button } from "./ui/button";
import { SiApplemusic, SiSpotify } from "react-icons/si";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import CoverPlaceholder from "@/assets/now-playing/cover_loading.png";

export interface NowPlayingProps {
  title: string;
  description?: string;
  cover: string;

  spotify: string;
  appleMusic: string;
}

export default function NowPlaying() {
  const { now_playing } = useItems();

  const [isCoverLoading, setIsCoverLoading] = React.useState(true);

  return (
    <Card className="max-w-max">
      <CardContent className="px-3 py-3">
        <div className="flex gap-4 items-start h-[130px] text-sm">
          <div className="relative rounded-md overflow-clip">
            <AnimatePresence>
              {isCoverLoading && (
                <motion.div
                  initial={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <Image
                    src={CoverPlaceholder}
                    alt="Album cover"
                    width={130}
                    height={130}
                    priority
                    className="absolute top-0 left-0"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Image
              src={now_playing?.cover || ""}
              width={130}
              height={130}
              alt={now_playing?.title || ""}
              priority
              onLoad={() => setIsCoverLoading(true)}
              onLoadingComplete={() => setIsCoverLoading(false)}
              loader={({ src }) => {
                return isCoverLoading ? "/now-playing/cover_loading.png" : src;
              }}
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <AnimatePresence>
                {now_playing?.title ? (
                  <motion.p
                    className="font-medium"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                  >
                    {now_playing?.title}
                  </motion.p>
                ) : (
                  <motion.span
                    className="w-16 h-4 rounded-md bg-muted"
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {now_playing?.description ? (
                  <motion.p
                    className="text-sm text-gray-500"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                  >
                    {now_playing?.description}
                  </motion.p>
                ) : (
                  <motion.span
                    className="w-24 h-4 rounded-md bg-muted mt-1"
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-2">
              <Link href={now_playing?.spotify || ""} target="_blank">
                <Button size="sm" variant={"outline"} className="gap-2 w-full">
                  <SiSpotify /> Listen on Spotify
                </Button>
              </Link>
              <Link href={now_playing?.appleMusic || ""} target="_blank">
                <Button size="sm" variant={"outline"} className="gap-2 w-full">
                  <SiApplemusic /> Listen on Apple Music
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
