// ------------------------------------------------
// projects/dremnik/landing/src/app/portfolio/layout.tsx
//
// export default function PortfolioLayout()    L13
// children                                     L16
// ------------------------------------------------

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