import Link from "next/link";

import { PROJECTS } from "@/lib/projects";
import { PROJECT_ICONS } from "@/components/ui/icons";

// ------------------------------------------
// projects/dremnik/landing/src/app/portfolio/portfolio.tsx
//
// export default function Portfolio()    L12
// ------------------------------------------

export default function Portfolio() {
  return (
    <div className="max-w-[var(--content-width)] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-y-10 md:gap-x-12 md:gap-y-16">
        {PROJECTS.map((project) => {
          const icon = PROJECT_ICONS[project.slug as keyof typeof PROJECT_ICONS];
          return (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Icon container */}
              <div className="w-20 h-20 mb-4 flex items-center justify-center text-foreground text-4xl rounded-2xl transition-transform group-hover:scale-105">
                <span className="select-none">
                  {typeof icon === "string" ? icon : icon}
                </span>
              </div>

              {/* Project name */}
              <h3 className="text-foreground font-medium text-[15.2px] mb-1 group-hover:text-foreground transition-colors">
                {project.name}
              </h3>

              {/* Year */}
              <span className="text-accent-foreground text-sm">
                {project.year}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
