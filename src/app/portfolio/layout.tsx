'use client';

import { Nav } from '@/components/nav';
import { TabsContent } from '@/components/ui/tabs';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Nav>
      <TabsContent value="portfolio">
        {children}
      </TabsContent>
    </Nav>
  );
}