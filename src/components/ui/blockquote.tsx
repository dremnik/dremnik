import * as React from "react";
import { cn } from "@/lib/utils";

const Blockquote = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <figure ref={ref} className={cn("mt-6", className)} {...props} />
));
Blockquote.displayName = "Blockquote";

const BlockquoteContent = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement> & { cite?: string }
>(({ className, cite, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn("border-l-2 pl-4 italic tracking-tight", className)}
    cite={cite}
    {...props}
  />
));
BlockquoteContent.displayName = "BlockquoteContent";

const BlockquoteCaption = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <figcaption
    ref={ref}
    className={cn("mt-3 pl-6 text-sm text-white/50", className)}
    {...props}
  >
    {children && <cite className="not-italic">{children}</cite>}
  </figcaption>
));
BlockquoteCaption.displayName = "BlockquoteCaption";

export { Blockquote, BlockquoteContent, BlockquoteCaption };
