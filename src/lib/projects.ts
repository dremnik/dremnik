export type Project = {
  slug: string;
  name: string;
  year: number;
  tagline: string;
  description: string;
  tags: string[] | { name: string; url?: string }[];
  github?: string;
  url?: string;
  gallery?: {
    videos?: string[]; // Format: "youtube:videoId" or "file:/path/to/video.mp4"
    images?: {
      src: string;
      title: string;
      width?: number;
      height?: number;
      ref?: boolean;
    }[]; // Manual image configuration with titles and dimensions
    caption?: string;
  };
};

const KERNL_DESCRIPTION = `kernl is an ongoing experiment to answer the question of the interface for AGI. My reflections towards the end of 2024 had led me to a few central ideas (I discuss some of them here: [design is the new bottleneck](/blog/design-is-the-new-bottleneck)):

1. AI is on a steep trajectory of improvement in its capacity to perform general tasks and coherently plan sequences of actions with many tools.
2. Thus a human shift from direct-contributive → executive functions (planning, strategy, synthesis, coordination, ...).
3. And the need for a tool which will allow us to effectively organize and coordinate the work of many contributors (which now happen to be AI).

Of course, the need to coordinate contributors is not new, and there are precedents for how this might be done—though none of them is yet sufficient (imo).

There are a few other personal motivations in the design:

* Minimalism + noise reduction. Other tools have felt very cluttered and distracting to me over the years, often getting in the way too much. And this presents the endlessly fascinating challenge of maintaining identity / character with the absolute minimum of visual elements.
* Vim-inspired keyboard navigation. Vim is the highest bandwidth interface we currently have between human → computer; and the constant need of the mouse restricts the design space substantially (and anyways, we have to assume that the shift to executive functions will favor those who are willing to invest in higher bandwidth interfaces—no need to design for the LCD).
`;

// ==========

const MICROPROJECTS_DESCRIPTION = `A Next.js template inspired by everything I've learned building web apps, designed for rapidly launching SaaS products with all the standard boilerplate. This template arose out of the need to address the growing trend in AI + SaaS applications shifting away from traditional per-seat subscriptions toward pay-by-usage models, making it easier for founders and developers to get to market quickly.

With AI making development so much faster, I expect we will start to see more of what could be called "App Studios", which are basically software studios that look more like game studios, developing suites of complementary apps instead of a single offering being their entrypoint into the market. Iteration speed will be a defining feature (imo) of the best ones, and boilertplate reduction is an obvious means to that end.

Key features:

* **Authentication with Clerk**. Secure, scalable auth system with support for multi-user workspaces.
* **Multi-Tenancy**. Workspace-based separation of data to enable team and enterprise use cases.
* **Billing & Payments**. Stripe integration supporting both subscriptions and usage-based billing for metered AI workloads.`;

// ==========

const REVERIE_DESCRIPTION = `rêverie is a concept design project with the aim of imagining what the next generation of content creation might look like in an AI-native creative suite. I spent a lot of time editing videos for fun when I was younger, so this is something which has interested me for quite a long time.

The idea is something like a hybrid of Adobe's Creative Cloud and Midjourney's generative tools. There seems to be a gap between content management on the one hand, and the tools which are pushing the envelope of creation on the other.

The mind works in an associative web of ideas + concepts, not unlike the latent space of a multi-modal model. If this gap could be bridged by multimodal embeddings, it would enable a new pace of creation via features like Midjourney's search by image: one image calls to mind all the others in the same region of the latent space..
`;

// ==========

const EMBLEM_DESCRIPTION = `Emblem is an AI operating system for investors—combining deal management, portfolio monitoring, and automated reporting into a single platform. It is designed to accelerate and automate investor workflows end-to-end.

Emblem gives firms a single, integrated platform to run their core workflows:

* **Deal Management**. Track pipelines, manage relationships, and centralize diligence—all in one place.
* **Portfolio Monitoring**. Eliminating spreadsheet chaos with a single source of truth for portfolio company financials. CFOs can submit data directly, which flows seamlessly into the platform.
* **Automated Reporting**. Generate IC decks, investment memos, portfolio tearsheets, and updates instantly—branded and polished to your firm’s standards.

With Emblem, firms reduce friction across deals, monitoring, and reporting—freeing teams to focus on sourcing, strategy, and value creation instead of chasing data and formatting slides.`;

// ==========

const PROPICS_DESCRIPTION = `ProPics is a personal AI photography service that allows you to upload pictures of yourself and generate both professional headshots + dating pictures.

This was my first taste of using AI in an app, when some friends and I discovered Dreambooth, which allowed you to fine-tune a stable diffusion model on a likeness with a relatively small number of sample images.

On the tech side, here was my first exposure to some of the distributed systems considerations concerning transactional state across workflows that could be relatively long-running (the fine-tuning jobs), and the challenges that arise from the kind of constraint.`;

// ==========

const ESONUT_DESCRIPTION = `esonut was an all-in-one platform for ESO—covering wikis, builds, tools, and interactive game resources. It was my first big project and a blast to create. My friends and I were playing this game quite a lot at the time (during COVID especially).

It was my first real taste of the joy in design, and the freedom of having no constraints. Its sole purpose was to be a project of fun & learning, a way to get our toes wet in the world of programming, and it satisfied all of these objectives thoroughly.

Core features:

**Wiki & Game Database**

* Deep dives into ESO content—classes, skills, sets, champion points, crafting, companions, and more.
* Access to interactive resources like maps, zone info, and collectibles such as mounts and pets.
* Stay informed on events, daily/weekly tasks, vendors, and server status.

**Build Tools & Editor**

* Create, customize, and share player builds using the Build Editor.
* Explore pre-made builds categorized by role (Tank, Healer, DPS, One‑Bar, PvE, PvP, subclassing).
* Simulate crafting and progression with dedicated tools for scribing, alchemy, champions, and potion making.

**Community Forum & Messaging**

* Forums where players could discuss aspects of the game—strategies, builds, news, etc.
* Ability to share and discuss builds made with the build editor.
`;

export const PROJECTS: Project[] = [
  {
    slug: "kernl",
    name: "kernl",
    year: 2025,
    tagline: "A vim-centric AI workspace",
    description: KERNL_DESCRIPTION,
    tags: [
      { name: "rust", url: "https://www.rust-lang.org/" },
      { name: "tauri", url: "https://tauri.app/" },
      { name: "k8s", url: "https://kubernetes.io/" },
    ],
    // url: "https://kernl.sh",
    // github: "dremnik/kernl",
    gallery: {
      videos: ["file:/projects/kernl/demo.mp4"], // Format: "youtube:videoId" or "file:/path/to/video.mp4"
      images: [
        {
          src: "/projects/kernl/1 — Tasks — List View.png",
          title: "Tasks List",
          width: 3840,
          height: 2398,
          ref: true,
        },
        {
          src: "/projects/kernl/2 — Tasks — Grid View.png",
          title: "Tasks Grid",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/3 — Tasks — Indiv.png",
          title: "Individual Task",
          width: 3840,
          height: 4484,
        },
        {
          src: "/projects/kernl/4 — Library.png",
          title: "Library",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/5 — Document View.png",
          title: "Document",
          width: 3840,
          height: 3366,
        },
        {
          src: "/projects/kernl/6 – Document – Outline view.png",
          title: "Document — Outline",
          width: 3840,
          height: 2368,
        },
        {
          src: "/projects/kernl/7 — Composer.png",
          title: "Composer",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/8 — Home Nav.png",
          title: "Home Navigation",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/9 — Project — Overview.png",
          title: "Project — Overview",
          width: 3840,
          height: 5114,
        },
        {
          src: "/projects/kernl/10 — Projects — Objectives.png",
          title: "Projects — Objectives",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/11 – Spaces.png",
          title: "Spaces",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/12 — Cycle — Progress.png",
          title: "Cycle",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/13 – Calendar – Month View.png",
          title: "Calendar — Month",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/14 — Inbox — MASTER.png",
          title: "Inbox",
          width: 3840,
          height: 2398,
        },
        {
          src: "/projects/kernl/15 — History — Boxes.png",
          title: "History",
          width: 3840,
          height: 2396,
        },
      ],
    },
  },
  {
    slug: "microprojects",
    name: "microprojects",
    year: 2025,
    tagline: "Next.js template with boilerplate for a multi-tenant AI SaaS.",
    description: MICROPROJECTS_DESCRIPTION,
    tags: [
      { name: "next.js", url: "https://nextjs.org/" },
      { name: "clerk", url: "https://clerk.com/" },
      { name: "stripe", url: "https://stripe.com/" },
    ],
    // url: "https://microprojects.app",
    github: "dremnik/microprojects",
    gallery: {
      videos: [],
      images: [
        {
          src: "/projects/microprojects/1 - Login.png",
          title: "Login",
          width: 3018,
          height: 1888,
          ref: true,
        },
        {
          src: "/projects/microprojects/2 - Create workspace.png",
          title: "Create workspace",
          width: 3018,
          height: 1888,
        },
        {
          src: "/projects/microprojects/3 - Workspace settings.png",
          title: "Workspace settings",
          width: 3018,
          height: 1888,
        },
        {
          src: "/projects/microprojects/4 - Billing.png",
          title: "Billing",
          width: 3018,
          height: 1888,
        },
        {
          src: "/projects/microprojects/5 - Users.png",
          title: "Manage users",
          width: 3018,
          height: 1888,
        },
      ],
    },
  },
  {
    slug: "reverie",
    name: "rêverie",
    year: 2025,
    tagline: "AI canvas and multimodal library for creatives",
    description: REVERIE_DESCRIPTION,
    tags: [],
    gallery: {
      videos: [],
      images: [
        {
          src: "/projects/reverie/1 - Moodboard.png",
          title: "Moodboard",
          width: 3028,
          height: 2038,
          ref: true,
        },
        {
          src: "/projects/reverie/2 - Moodboard - Modal.png",
          title: "Mooboard - Asset Modal",
          width: 3028,
          height: 2038,
        },
        {
          src: "/projects/reverie/3 - Editor.png",
          title: "Multimodal Editor",
          width: 3028,
          height: 1928,
        },
        {
          src: "/projects/reverie/4 - Moodboard - with text.png",
          title: "Moodboard - With Note",
          width: 3028,
          height: 2038,
        },
        {
          src: "/projects/reverie/5 - My Library.png",
          title: "Asset Library",
          width: 3028,
          height: 2038,
        },
        {
          src: "/projects/reverie/6 - Library - Collections.png",
          title: "Library - Collections",
          width: 3028,
          height: 2038,
        },
        {
          src: "/projects/reverie/7 - Collection - Favorites.png",
          title: "Collection - Favorites",
          width: 3028,
          height: 2038,
        },
      ],
    },
  },
  {
    slug: "emblem",
    name: "Emblem",
    year: 2023,
    tagline: "AI operating system for investors — PE, VC, IB",
    description: EMBLEM_DESCRIPTION,
    tags: [
      { name: "next.js", url: "https://nextjs.org/" },
      { name: "mastra", url: "https://mastra.ai/" },
      { name: "fastify", url: "https://fastify.dev/" },
    ],
    url: "https://emblem.pe",
    gallery: {
      videos: [],
      images: [
        {
          src: "/projects/emblem/0 - Universal Chat - Tasks.png",
          title: "Universal Chat - Tasks",
          width: 3024,
          height: 1964,
          ref: true,
        },
        {
          src: "/projects/emblem/1 - UC - Emblem Agents.png",
          title: "Universal Chat - Emblem Agents",
          width: 3024,
          height: 1964,
        },
      ],
    },
  },
  {
    slug: "propics",
    name: "ProPics",
    year: 2023,
    tagline: "Professional AI headshots using Dreambooth",
    description: PROPICS_DESCRIPTION,
    tags: [
      { name: "firebase", url: "https://firebase.google.com/" },
      {
        name: "argo workflows",
        url: "https://argoproj.github.io/workflows/",
      },
      { name: "tensorflow", url: "https://www.tensorflow.org/" },
      { name: "dreambooth", url: "https://dreambooth.github.io/" },
    ],
    url: "https://propics.ai",
    gallery: {
      videos: [],
      images: [],
    },
  },
  {
    slug: "esonut",
    name: "esonut",
    year: 2021,
    tagline: "Wiki for The Elder Scrolls Online",
    description: ESONUT_DESCRIPTION,
    tags: [
      { name: "next.js", url: "https://nextjs.org/" },
      { name: "go", url: "https://golang.org/" },
      { name: "rust", url: "https://www.rust-lang.org/" },
    ],
    github: "dremnik/esonut",
    gallery: {
      videos: [],
      images: [
        {
          src: "/projects/esonut/1 - Landing.png",
          title: "Landing Page",
          width: 3840,
          height: 8000,
        },
        {
          src: "/projects/esonut/2 - Login.png",
          title: "Login",
          width: 3840,
          height: 2148,
          ref: true,
        },
        {
          src: "/projects/esonut/3 - User Profile.png",
          title: "User Profile",
          width: 3840,
          height: 2900,
        },
        {
          src: "/projects/esonut/4 - User Profile - Builds.png",
          title: "User Profile - Builds",
          width: 3840,
          height: 3400,
        },
        {
          src: "/projects/esonut/5 - Sets - Monster Sets.png",
          title: "Sets - Monster Sets",
          width: 3840,
          height: 9300,
        },
        {
          src: "/projects/esonut/6 - Sets - Individual Set.png",
          title: "Sets - Individual Set",
          width: 3840,
          height: 3844,
        },
        {
          src: "/projects/esonut/7 - Skills - Necromancer.png",
          title: "Skills - Necromancer",
          width: 3840,
          height: 7700,
        },
        {
          src: "/projects/esonut/8 - Skill - Lava Whip.png",
          title: "Skill - Lava Whip",
          width: 3840,
          height: 3578,
        },
        {
          src: "/projects/esonut/9 - Build Editor.png",
          title: "Build Editor",
          width: 3840,
          height: 2792,
        },
        {
          src: "/projects/esonut/10 - Build Creator - Gear.png",
          title: "Build Creator - Gear",
          width: 3840,
          height: 2838,
        },
        {
          src: "/projects/esonut/11 - Build Creator - Skills.png",
          title: "Build Creator - Skills",
          width: 3840,
          height: 4000,
        },
        {
          src: "/projects/esonut/12 - Build Creator - CP.png",
          title: "Build Creator - CP",
          width: 3840,
          height: 3744,
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
