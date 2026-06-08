// ============================================================================
//  YOUR CONTENT — this is the ONLY file you need to touch day to day.
//  - To change text: edit the strings.
//  - To add a photo: paste a URL into the "" quotes (e.g. "https://...jpg").
//    Empty "" shows a dashed placeholder box on the site so you can see where
//    each image goes. Layout/code never needs touching.
//  - Image hosting tip: drop files in the /public folder and reference them as
//    "/myphoto.jpg", OR paste any public URL (Cloudinary, Imgur, GitHub, etc.).
// ============================================================================

export const profile = {
  name: "Joshua Fernandes",
  role: "Visual Designer & Builder",
  // Hero is split so the second line can be italic/emphasised:
  heroLine: "crafting quiet, cinematic",
  heroEmphasis: "digital experiences.",
  heroSub: "I design and build things that feel right.",

  // ---- VERIFY THESE TWO (read from your Figma, double-check spelling) ----
  email: "joshfer057@gmail.com",
  instagramHandle: "@joshfernanrizzz",
  instagramUrl: "https://instagram.com/joshfernanrizzz",
  intakeUrl: "https://forms.gle/66PhsVsbruZehSte9",
  // -----------------------------------------------------------------------

  // CONTACT FORM BACKEND: create a free form at https://formspree.io,
  // copy the form ID (the bit after /f/ in your endpoint) and paste it here.
  // Leave "" to fall back to a plain mailto: link instead.
  formspreeId: "mzdqejaa",
};

export const about = {
  // Your photo — paste a URL or use "/me.jpg" from the public folder.
  portrait: "assets/home/personal.png",
  body: "I am Joshua Fernandes, a student designer and front-end enthusiast based in India. Currently, I'm focused on designing and developing apps that solve problems. I'm experienced with UI/UX design, creating user flows and screens and also with tools like Canva for designing posts for social media.",
  ctaHeading: "Let's build something exceptional.",
  ctaBody:
    "I'm currently available for freelance projects and collaborative opportunities. If you have a problem to solve, let's talk.",
};

// ============================================================================
//  PROJECTS
//  Each project shows as a card on the home page and gets its own detail page
//  at /work/<slug>. Two layout types:
//    type: "case-study"  -> Overview / Challenge / Solution / Images / Features
//    type: "gallery"     -> Context paragraph + a photo grid
//  Reorder this array to reorder the cards. Delete a block to remove a project.
// ============================================================================

export const projects = [
  {
    slug: "drill-py",
    title: "Drill.Py",
    type: "case-study",
    accent: "#3fb27f", // green
    cardSubtitle: "A Duolingo-style Python learning app for data science",
    tags: ["Pandas", "Numpy", "Matplotlib"],
    cover: "/assets/drillpy/drill.py logo.png", // card thumbnail
    tagline: "Making data science approachable. One drill at a time.",
    heroShots: ["/assets/drillpy/hero_1.png", "/assets/drillpy/hero_2.png"], // the wide app screenshots at the top of the page
    overview:
      "Drill.Py is a mobile learning app built for people who want to get into data science but find traditional resources overwhelming. Instead of long tutorials or documentation, it breaks NumPy, Pandas, and Matplotlib down into short, focused drills, the same way Duolingo teaches language. Built in React Native with Expo, it uses a sequential unlock flow, a hearts system, and instant answer validation to keep learners engaged without dumbing the subject down.",
    challenge:
      "Most beginner resources for data science are either too passive (videos, articles) or too unstructured (open-ended notebooks). There was no middle ground, something that gives you real practice with immediate feedback, in small enough pieces that you can make progress in ten minutes. The challenge was designing a learning flow that felt genuinely rewarding without sacrificing the depth that makes the subject worth learning.",
    solution:
      "A drill first interface where every session is a short, focused set of multiple choice questions across a single topic. Topics unlock one at a time so there's always a clear next step. The hearts system adds just enough stakes to keep each session focused. Completing a topic reveals the next, and a progress bar and completion card give learners something concrete to feel good about, making consistency the natural outcome rather than a willpower exercise.",
    images: [
      "/assets/drillpy/web_drill_1.png",
      "/assets/drillpy/web_drill_2.png",
      "/assets/drillpy/web_drill_3.png",
      "/assets/drillpy/web_drill_4.png",
    ], // 2x2 image grid
    keyFeatures: [
      { title: "", image: "/assets/drillpy/key_1.png" },
      { title: "", image: "/assets/drillpy/key_2.png" },
      { title: "", image: "/assets/drillpy/key_3.png" },
    ],
  },

  {
    slug: "grip",
    title: "Grip",
    type: "case-study",
    titleFont: '"Playfair Display", serif',
    accent: "#c9a227", // gold
    cardSubtitle: "A gamified workout tracker built to make consistency stick",
    tags: ["Flutter", "Gamification", "Mobile"],
    cover: "assets/grip/grip.png",
    tagline:
      "Tracking your lifts is the easy part. Grip makes you want to come back.",
    heroShots: ["/assets/grip/grip_hero_1.png", "/assets/grip/grip_hero_2.png"],
    overview:
      "Grip is a Flutter based workout tracking app built around the idea that consistency is a design problem, not a willpower problem. It tracks your lifts, logs your streaks, flags your personal records, and puts you in a league system that makes long-term progress feel like a game. Built for people who train seriously but want their tools to match that energy. Not a plain spreadsheet, not a bloated fitness platform.",
    challenge:
      "Most workout trackers do the bare minimum — log a set, log a rep, move on. They give you data but no reason to care about it. The challenge was designing something that captures the real feeling of training: the satisfaction of a new PR, the quiet discipline of a streak, the competitive edge of seeing where you rank. The app needed to feel motivating without being gimmicky, and structured without being rigid.",
    solution:
      "Grip is built around three feedback loops that reinforce each other streaks reward showing up, PR tracking rewards pushing harder, and leagues reward sustained progress over time. The UI is dark and minimal, designed to feel at home in a gym environment rather than a wellness app. Every session gives you something to look at beyond just numbers: a streak to protect, a record to chase, a rank to climb.",
    images: [
      "/assets/grip/grip_img_1.png",
      "/assets/grip/grip_img_2.png",
      "/assets/grip/grip_img_3.png",
      "/assets/grip/grip_img_4.png",
    ],
    keyFeatures: [
      { title: "Feature one", image: "/assets/grip/Gkey_1.png" },
      { title: "Feature two", image: "/assets/grip/Gkey_2.png" },
      { title: "Feature three", image: "/assets/grip/Gkey_3.png" },
    ],
  },

  {
    slug: "hope-2025",
    title: "Hope 2025",
    type: "gallery",
    accent: "#7a1f2b", // maroon
    cardSubtitle: "Wilson College event (social media)",
    tags: ["Branding", "Social", "Canva"],
    cover: "assets/hope/Hope_2025.png",
    tagline:
      "Event branding and social campaign for Wilson College's Hope 2023.",
    context:
      "HOPE (Help Our People Elevate) is Wilson College's flagship Institutional Social Responsibility (ISR) event where learning goes beyond textbooks to build socially aware and compassionate leaders. i was a part of the editorials team in this event mainly working on creating content but along with that i majored in designing the posts for the hopeful chronicles instagram page. These are some of my work below. Links to the full post are mentioned.",
    // Each item: image = the picture · title = short name shown beneath it ·
    // link = the real post URL opened when a viewer clicks the image.
    items: [
      {
        image: "/assets/hope/hope_1.png",
        title: "OC meet post",
        link: "https://www.instagram.com/p/DM3CeYxqcRK/?img_index=1",
      },
      {
        image: "/assets/hope/hope_2.png",
        title: "Executives post",
        link: "https://www.instagram.com/p/DNdG9A6qmfJ/?img_index=1",
      },
      {
        image: "/assets/hope/hope_3.png",
        title: "Nukkad Natak post",
        link: "https://www.instagram.com/hopeful.chronicles/p/DONpMMdCveC/",
      },
      {
        image: "/assets/hope/hope_4.png",
        title: "Banner Reveal post",
        link: "https://www.instagram.com/hopeful.chronicles/p/DOOJNZnkh5d/",
      },
      {
        image: "/assets/hope/hope_5.png",
        title: "Mosiac Practice post",
        link: "https://www.instagram.com/hopeful.chronicles/p/DOgAy9TknSh/",
      },
    ],
  },

  {
    slug: "imperial",
    title: "Imperial",
    type: "gallery",
    accent: "#0d6473", // teal
    cardSubtitle: "Wilson College event (visual graphics)",
    tags: ["Visual Design", "Print", "Canva"],
    cover: "assets/imperial/imperial logo.png",
    tagline: "Visual graphics suite for the Imperial event at Wilson College.",
    context:
      "Imperial is a BMS college event. there are renowned personalities that have a panel discussion over a certain topic that is selected as a central theme. I was a volunteer in the graphics department and created these concepts that were incorporated",
    items: [
      {
        image: "/assets/imperial/imperial_1.png",
        title: "imperial 26 oc meet banner (animation)",
        link: "https://canva.link/jynkremtq58vv42",
      },
      {
        image: "/assets/imperial/imperial_2.png",
        title: "Imperial brochere design concepts",
        link: "https://canva.link/tvs6yfb0xzjpiv8",
      },
      {
        image: "/assets/imperial/imperial_3.png",
        title: "Title Sponsers",
        link: "https://canva.link/mpt2yh0ztxla3k0",
      },
      {
        image: "/assets/imperial/imperial_4.png",
        title: "Imperial logo concept design",
        link: "https://canva.link/cyujvak5f58o8gc",
      },
      {
        image: "/assets/imperial/imperial_5.png",
        title: "Imperial Main title card",
        link: "https://canva.link/n083q8wufpkbeou",
      },
    ],
  },

  {
    slug: "other",
    title: "Other",
    type: "gallery",
    accent: "#b5533a", // rust
    cardSubtitle: "Collection of other minor designs",
    tags: ["Mixed"],
    cover: "assets/other/other.png",
    tagline: "A collection of smaller design pieces and experiments.",
    context:
      "Write a short intro for this catch-all collection of minor designs.",
    items: [
      {
        image: "/assets/other/other_1_.png",
        title: "Framer website design for drill.py. (img in canva for display)",
        link: "https://canva.link/6vkcd60trqtvag9",
      },
      {
        image: "/assets/other/other_2.png",
        title: "Drill.Py reel video edit",
        link: "https://canva.link/ri4ibhoyggsc79h",
      },
      {
        image: "/assets/other/other_3.png",
        title: "Drill.Py Post design",
        link: "https://canva.link/rvlwysm002zywxz",
      },
      {
        image: "/assets/other/league_icons.png",
        title: "Grip league icons design",
        link: "https://canva.link/9988bd10r1132tc",
      },
    ],
  },
];
