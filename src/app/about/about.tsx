import {
  Blockquote,
  BlockquoteContent,
  BlockquoteCaption,
} from "@/components/ui/blockquote";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function About() {
  return (
    <div className="space-y-12 max-w-3xl mx-auto px-6">
      <div className="flex flex-col">
        <Avatar className="size-16 border border-muted mb-6">
          <AvatarImage
            src="/charles_maurice.png"
            alt="Charles Maurice"
            className="object-cover"
          />
          <AvatarFallback>CM</AvatarFallback>
        </Avatar>

        <h2 className="text-2xl font-normal mb-3 font-founder-grotesk">
          Charles Maurice
        </h2>
        <p className="text-primary text-xs font-mono">
          [ designer, engineer, student of life ]
        </p>
      </div>

      <div className="space-y-8">
        <Blockquote>
          <BlockquoteContent>
            Simplicity is the final achievement. After one has played a vast
            quantity of notes and more notes, it is simplicity that emerges
            as the crowning reward of art.
          </BlockquoteContent>
          <BlockquoteCaption>F. Chopin</BlockquoteCaption>
        </Blockquote>

        <p className="text-white/80 tracking-tight">
          [ As far as I can tell, the greatest feeling in the world is
          having put everything into one&apos;s work, and looking back on
          the day with the pride of having truly <em>done something</em>.
        </p>

        <p className="text-white/80 tracking-tight">
          Man does not live by bread alone. ]
        </p>
      </div>

      <div className="pt-8 border-t border-white/10">
        <h3 className="text-white/50 text-xs uppercase tracking-wider mb-4">
          top of mind
        </h3>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/80">
              design is the new bottleneck
            </span>
            <span className="text-white/40 text-sm">6.24.25</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/80">
              only those who change remain my kin
            </span>
            <span className="text-white/40 text-sm">2.8.25</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/80">work is a vector</span>
            <span className="text-white/40 text-sm">1.1.25</span>
          </div>
        </div>
      </div>
    </div>
  );
}