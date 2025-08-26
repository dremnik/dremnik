import { Tabs, TabsList, TabsTrigger, AnimatedTabsUnderline } from "@/components/ui/tabs";
import React, { useRef, useState } from "react";

interface NavProps {
  defaultValue: string;
  children: React.ReactNode;
}

export function Nav({ defaultValue, children }: NavProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const portfolioRef = useRef<HTMLButtonElement>(null);
  const blogRef = useRef<HTMLButtonElement>(null);

  const tabs = [
    { value: "about", ref: aboutRef },
    { value: "portfolio", ref: portfolioRef },
    { value: "blog", ref: blogRef },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col items-center pt-10 pb-16">
        <p className="font-mono text-xs text-primary mb-6">dremnik</p>
        <Tabs 
          defaultValue={defaultValue} 
          className="w-full max-w-3xl"
          onValueChange={setActiveTab}
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
