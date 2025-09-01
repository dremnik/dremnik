"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/* components */
import { Separator } from "@/components/ui/separator";
import { IconGithub, IconLinkedIn, IconTwitterX } from "@/components/ui/icons";

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
      <div className="z-50 fixed top-0 left-0 p-13">
        <Link href="/">
          <h2 className="text-[18.4px] font-founder-grotesk">Andrew Jones</h2>
        </Link>
      </div>

      <div className="z-50 fixed top-0 right-0 p-13 flex items-center space-x-5">
        <span className="text-primary font-mono text-[11.2px]">
          {currentTime}
        </span>
        <Separator orientation="vertical" className="!h-4" />
        <div className="flex items-center gap-3">
          <a
            href="#"
            target="_blank"
            className="text-foreground-soft hover:text-foreground transition-colors"
          >
            <IconTwitterX className="size-3" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            className="text-foreground-soft hover:text-foreground transition-colors"
          >
            <IconLinkedIn />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            className="text-foreground-soft hover:text-foreground transition-colors"
          >
            <IconGithub />
          </a>
        </div>
      </div>
    </>
  );
}
