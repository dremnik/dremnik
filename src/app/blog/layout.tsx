// -------------------------------------------
// projects/dremnik/src/app/blog/layout.tsx
//
// export default function BlogLayout()    L13
// children                                L16
// -------------------------------------------

'use client';

import { Nav } from '@/components/nav';
import { TabsContent } from '@/components/ui/tabs';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Nav>
      <TabsContent value="blog">
        {children}
      </TabsContent>
    </Nav>
  );
}