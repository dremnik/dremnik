"use client";

import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  AnimatedTabsUnderline,
} from "@/components/ui/tabs";

interface NavProps {
  children: React.ReactNode;
}

export function Nav({ children }: NavProps) {
  const pathname = usePathname();
  
  // Initialize activeTab based on current URL to prevent flash
  const getInitialTab = () => {
    if (pathname === "/") return "about";
    const tabName = pathname.slice(1);
    if (tabName === "about" || tabName === "portfolio" || tabName === "blog") {
      return tabName;
    }
    return "about"; // fallback
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const portfolioRef = useRef<HTMLButtonElement>(null);
  const blogRef = useRef<HTMLButtonElement>(null);

  const tabs = [
    { value: "about", ref: aboutRef },
    { value: "portfolio", ref: portfolioRef },
    { value: "blog", ref: blogRef },
  ];

  // Sync activeTab with URL on mount and pathname changes
  useEffect(() => {
    // If user is on root path, redirect to /about
    if (pathname === "/") {
      window.history.replaceState(null, '', '/about');
      setActiveTab("about");
      return;
    }
    
    // Extract tab name from pathname (e.g., "/about" -> "about")
    const tabName = pathname.slice(1);
    if (tabName && (tabName === "about" || tabName === "portfolio" || tabName === "blog")) {
      setActiveTab(tabName);
    }
  }, [pathname]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const route = `/${value}`;
    if (route !== pathname) {
      // Update URL without navigation using History API
      window.history.replaceState(null, '', route);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center pt-10 pb-16">
        <p className="font-mono text-xs text-primary mb-6">dremnik</p>
        <Tabs
          value={activeTab}
          className="w-full max-w-3xl"
          onValueChange={handleTabChange}
        >
          <TabsList className="mb-16 flex justify-center gap-8 w-full">
            <TabsTrigger
              ref={aboutRef}
              value="about"
              className="text-[15.4px] px-0 pb-2 rounded-none font-sans-display font-normal text-muted-foreground data-[state=active]:text-foreground-soft"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              ref={portfolioRef}
              value="portfolio"
              className="text-[15.4px] px-0 pb-2 rounded-none font-sans-display font-normal text-muted-foreground data-[state=active]:text-foreground-soft"
            >
              Portfolio
            </TabsTrigger>
            <TabsTrigger
              ref={blogRef}
              value="blog"
              className="text-[15.4px] px-0 pb-2 rounded-none font-sans-display font-normal text-muted-foreground data-[state=active]:text-foreground-soft"
            >
              Blog
            </TabsTrigger>
            <AnimatedTabsUnderline activeTab={activeTab} tabs={tabs} />
          </TabsList>

          {children}
        </Tabs>
      </div>
      <div className="pb-32"></div>
    </div>
  );
}
