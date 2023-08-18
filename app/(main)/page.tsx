import NowPlaying from "@/components/now-playing";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function Introduction() {
  return (
    <div className="leading-relaxed flex flex-col gap-4 font-medium text-lg">
      <p>Greetings, {"I'm"} Salvatore.</p>
      <p>
        {"I'm"} 20 years old from southern Italy. — I proudly identify as a web
        developer and UI/UX designer.
      </p>
      <p>
        My profound fascination with computer science and technology has been a
        constant driving force.
      </p>
      <p>
        I channel my unwavering determination into the alchemical process of
        forging <u className="underline-offset-4">my passion</u> into the very
        cornerstone of my fulfilling journey towards a{" "}
        <u className="underline-offset-4">thriving career</u>.
      </p>

      <div className="flex flex-col pt-8">
        <div className="pb-4">
          <h2 className="text-muted-foreground">my other stuff</h2>
        </div>
        <NowPlaying />
      </div>
    </div>
  );
}
