/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import Counter from "./Counter";

export default function StatsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      value: 3,
      suffix: "+",
      label: "YEARS",
      sublabel: "OF EXPERIENCE",
    },
    {
      value: 50,
      suffix: "+",
      label: "PROJECTS",
      sublabel: "DELIVERED",
    },
    {
      value: 20,
      suffix: "+",
      label: "CLIENTS",
      sublabel: "WORLDWIDE",
    },
    {
      value: 99,
      suffix: "%",
      label: "CLIENT",
      sublabel: "SATISFACTION",
    },
  ];

  return (
    <section className="w-full  py-12 lg:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 flex flex-col items-start justify-between min-h-[200px] hover:border-neutral-700 transition-colors"
            >
              <div className=" text-5xl lg:text-7xl font-beardays  font-bold tracking-tight">
                <span
                  className="inline-block"
                  style={{
                    WebkitTextStroke: "0.04px white",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {mounted ? (
                    <Counter
                      value={stat.value}
                      fontSize={72}
                      places={stat.value >= 100 ? [100, 10, 1] : [10, 1]}
                      gap={0}
                      textColor="transparent"
                      fontWeight="700"
                      horizontalPadding={0}
                      counterStyle={{
                        WebkitTextStroke: "0.04px white",
                        WebkitTextFillColor: "transparent",
                      }}
                      gradientHeight={0}
                    />
                  ) : (
                    <span>0</span>
                  )}
                  {stat.suffix}
                </span>
              </div>
              <div className="mt-auto text-right w-full">
                <p className="text-neutral-500 text-xs font-medium tracking-wider">
                  {stat.label}
                </p>
                <p className="text-neutral-500 text-xs font-medium tracking-wider">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
