// -----------------------------------
// projects/dremnik/src/components/mobile-menu.tsx
//
// const NAV_LINKS                 L25
// export function MobileMenu()    L31
// -----------------------------------

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { IconMenu, IconGithub, IconLinkedIn, IconTwitterX } from "@/components/ui/icons";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const LINKEDIN_URL = "https://www.linkedin.com/in/andrew-jones-013154219";
  const GITHUB_URL = "https://github.com/dremnik";

  // Auto-close when route changes
  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Current time like header
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-xs p-2 text-foreground hover:text-foreground-soft focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          <IconMenu className="size-4" />
        </button>
      </DialogTrigger>
      <DialogContent
        fullScreen
        showCloseButton={false}
        overlayClassName="backdrop-blur-sm bg-black/40"
        className="flex flex-col"
      >
        <DialogTitle className="sr-only">Site menu</DialogTitle>
        <div className="px-6 md:px-13 pt-6 md:pt-13 pb-4">
          <div className="flex items-center">
            <div className="flex-1 min-w-0">
              <Link href="/">
                <h2 className="text-[16.5px] font-spezia tracking-[-0.04em]">Andrew Jones</h2>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="font-mono text-[11.2px] text-primary inline-block translate-y-[0.75px]">dremnik</span>
            </div>
            <div className="flex-1 flex justify-end">
              <DialogClose
                aria-label="Close menu"
                className="rounded-xs p-2 opacity-70 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring"
              >
                <XIcon className="size-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
          </div>
        </div>
        <nav className="px-6 md:px-13 pb-8 pt-2">
          <ul className="flex flex-col items-start gap-4">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/about"
                  ? pathname === "/about" || pathname === "/"
                  : pathname.startsWith(href);
              return (
                <li key={href}>
                  <DialogClose asChild>
                    <Link
                      href={href}
                      className={`inline-block text-[20px] leading-[44px] font-sans-display ${
                        isActive
                          ? "text-foreground-soft after:block after:w-full after:h-[3px] after:bg-foreground-soft after:-mt-1 after:rounded-[1px]"
                          : "text-muted-foreground hover:text-foreground-soft"
                      }`}
                    >
                      {label}
                    </Link>
                  </DialogClose>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-auto mx-auto px-6 md:px-13 pb-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://x.com/dremnik"
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
            <Separator orientation="horizontal" className="!w-4" />
            <span className="text-primary font-mono text-[11.2px]">
              {currentTime}
            </span>
          </div>
        </div>
        <div className="pb-[env(safe-area-inset-bottom)]" />
      </DialogContent>
    </Dialog>
  );
}


