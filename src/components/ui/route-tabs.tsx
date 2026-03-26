// ----------------------------------
// projects/dremnik/landing/src/components/ui/route-tabs.tsx
//
// type RouteTab                  L24
// value                          L25
// href                           L26
// label                          L27
// exact                          L28
// export function RouteTabs()    L31
// tabs                           L35
// className                      L36
// ----------------------------------

"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type RouteTab = {
  value: string; // e.g. "about"
  href: string; // e.g. "/"
  label: string;
  exact?: boolean;
};

export function RouteTabs({
  tabs,
  className,
}: {
  tabs: RouteTab[];
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  const active = useMemo(() => {
    // First check for exact matches
    const exact = tabs.find((t) => t.exact && pathname === t.href);
    if (exact) return exact.value;

    // Then check for path matches, but avoid the root path "/" matching everything
    const pathMatch = tabs.find((t) => {
      if (t.href === "/" && pathname !== "/") return false;
      return pathname.startsWith(t.href);
    });

    return pathMatch?.value ?? tabs[0]?.value;
  }, [pathname, tabs]);

  return (
    <Tabs
      value={active}
      onValueChange={(val) => {
        const next = tabs.find((t) => t.value === val);
        if (next) router.push(next.href);
      }}
      className={cn("w-full max-w-3xl", className)}
    >
      <TabsList className="flex justify-center gap-8 w-full">
        {tabs.map((t) => {
          const isActive = active === t.value;
          return (
            <TabsTrigger
              key={t.value}
              value={t.value}
              asChild
              className="text-[15.4px] px-0 pb-2 rounded-none font-sans-display font-normal text-muted-foreground data-[state=active]:text-foreground-soft relative"
              aria-current={isActive ? "page" : undefined}
            >
              <Link href={t.href} prefetch>
                {t.label}
                {isActive && (
                  <motion.div
                    layoutId="route-tabs-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
