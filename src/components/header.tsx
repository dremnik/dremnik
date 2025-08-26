import { Separator } from "@/components/ui/separator";
import { IconGithub, IconLinkedIn, IconTwitterX } from "@/components/ui/icons";

export function Header() {
  return (
    <>
      <div className="z-50 fixed top-0 left-0 p-12">
        <h2 className="text-white text-[18.4px] font-normal font-founder-grotesk">
          Charles Maurice
        </h2>
      </div>

      <div className="z-50 fixed top-0 right-0 p-12 flex items-center space-x-5">
        <span className="text-primary font-mono text-[11.2px]">20:12</span>
        <Separator orientation="vertical" className="!h-4" />
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-foreground-soft hover:text-foreground transition-colors"
          >
            <IconTwitterX className="size-3" />
          </a>
          <a
            href="#"
            className="text-foreground-soft hover:text-foreground transition-colors"
          >
            <IconLinkedIn />
          </a>
          <a
            href="#"
            className="text-foreground-soft hover:text-foreground transition-colors"
          >
            <IconGithub />
          </a>
        </div>
      </div>
    </>
  );
}
