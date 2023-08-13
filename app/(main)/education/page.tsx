import Link from "next/link";
import React from "react";

const timeline: {
  title: string;
  subtitle?: string;
  from: {
    start: string;
    end: string;
  };
}[] = [
  {
    title: "Pursuing Bachelor's Degree",
    subtitle:
      "Enrolled in the three-year Computer Science program at the University of Catania.",
    from: {
      start: "2021",
      end: "hoping 2024",
    },
  },
  {
    title: "High School Diploma",
    subtitle:
      "State Technical Industrial Institute, specializing in Computer Science & Telecommunications.",
    from: {
      start: "2016",
      end: "2021",
    },
  },
];

export default function Education() {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-lg font-medium">
        I have attended a technical institute specializing in computer science,
        and I am currently pursuing a degree in{" "}
        <u className="underline-offset-4">Computer Science</u> at the{" "}
        <Link
          href={"https://unict.it/"}
          target="_blank"
          className="text-blue-500 after:content-['_↗'] after:text-sm"
        >
          University of Catania
        </Link>
        .
      </p>

      <div className="flex flex-col gap-10">
        {timeline.map((item, i) => {
          return (
            <div key={i}>
              <div className="text-slate-500 pb-1">
                <span>
                  {item.from.start} — {item.from.end}
                </span>
              </div>
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-slate-500">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
