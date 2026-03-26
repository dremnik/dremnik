// -------------------------------
// projects/dremnik/landing/src/components/header.tsx
//
// const LINKEDIN_URL          L20
// const GITHUB_URL            L21
// export function Header()    L23
// -------------------------------

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/* components */
import { Separator } from "@/components/ui/separator";
import { IconGithub, IconLinkedIn, IconTwitterX } from "@/components/ui/icons";
import { MobileMenu } from "@/components/mobile-menu";

const LINKEDIN_URL = "https://www.linkedin.com/in/andrew-jones-013154219";
const GITHUB_URL = "https://github.com/dremnik";

export function Header() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="z-50 fixed top-0 inset-x-0 p-6 md:p-13 bg-background md:bg-transparent pointer-events-none">
        <div className="flex items-center">
          <div className="flex-1 min-w-0 pointer-events-auto">
            <Link href="/">
              <h2 className="text-[18.4px] font-founder-grotesk">Andrew Jones</h2>
            </Link>
          </div>
          <div className="md:hidden flex-1 flex justify-center pointer-events-auto">
            <p className="font-mono text-[11.2px] text-mono inline-block translate-y-[0.75px]">dremnik</p>
          </div>
          <div className="flex-1 flex justify-end items-center space-x-5 pointer-events-auto">
            <div className="hidden md:flex items-center space-x-5">
              <span className="text-mono font-mono text-[11.2px]">
                {currentTime}
              </span>
              <Separator orientation="vertical" className="!h-4" />
              <div className="flex items-center space-x-5">
                <div className="flex items-center gap-3">
                  <a
                    href="https://x.com/dremnik"
                    target="_blank"
                    className="text-foreground-soft hover:text-foreground transition-colors"
                  >
                    <IconTwitterX className="size-3.5" />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    className="text-foreground-soft hover:text-foreground transition-colors"
                  >
                    <IconLinkedIn className="size-3.5" />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    className="text-foreground-soft hover:text-foreground transition-colors"
                  >
                    <IconGithub className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden pointer-events-auto">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
