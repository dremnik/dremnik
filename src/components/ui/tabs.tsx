// ----------------------------------------
// projects/dremnik/src/components/ui/tabs.tsx
//
// function Tabs()                      L26
// function TabsList()                  L39
// interface TabsTriggerProps           L55
//   value                              L57
// const TabsTrigger                    L60
// function AnimatedTabsUnderline()     L82
// activeTab                            L86
// tabs                                 L87
// value                                L88
// ref                                  L89
// function TabsContent()              L129
// ----------------------------------------

"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative inline-flex h-9 w-fit items-center justify-center",
        className,
      )}
      {...props}
    />
  );
}

interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  value: string;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, value, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-slot="tabs-trigger"
    value={value}
    className={cn(
      "relative inline-flex items-center justify-center gap-1.5 px-2 py-1 text-sm font-normal font-sans-display whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      "text-muted-foreground data-[state=active]:text-foreground-soft",
      className,
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Trigger>
));

TabsTrigger.displayName = "TabsTrigger";

// New component for the animated underline
function AnimatedTabsUnderline({
  activeTab,
  tabs,
}: {
  activeTab: string;
  tabs: Array<{
    value: string;
    ref: React.RefObject<HTMLButtonElement | null>;
  }>;
}) {
  const [isReady, setIsReady] = useState(false);
  const activeTabData = tabs.find((tab) => tab.value === activeTab);

  useEffect(() => {
    // Check if refs are ready
    const checkRefs = () => {
      if (activeTabData?.ref.current) {
        setIsReady(true);
      } else {
        // Try again on next frame if refs aren't ready
        requestAnimationFrame(checkRefs);
      }
    };

    checkRefs();
  }, [activeTabData]);

  if (!isReady || !activeTabData || !activeTabData.ref.current) return null;

  return (
    <motion.div
      layoutId="underline"
      className="absolute bottom-0 h-0.5 bg-foreground-soft"
      style={{
        left: activeTabData.ref.current.offsetLeft,
        width: activeTabData.ref.current.offsetWidth,
      }}
      initial={false}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, AnimatedTabsUnderline };
