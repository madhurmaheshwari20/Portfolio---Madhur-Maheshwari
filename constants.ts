
import { Project } from './types';

export interface JourneyItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  badge: string;
  highlightTitle: string;
  accentText: string;
  points: string[];
  image: string | string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'intelligrade',
    title: 'IntelliGrade',
    category: 'EdTech / AI Strategy',
    description: 'AI that grades entire handwritten answer sheets, returns results within 24 hours, and tells every student exactly where they went wrong.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    tags: ['EdTech', 'LLM', 'Product Design'],
    caseStudy: {
      problem: 'Teachers are drowning in paperwork, spending up to 60% of their time just grading sheets. This "manual trap" means students often wait weeks for feedback, which arrives too late to help them actually learn from their mistakes.',
      solution: 'We created Intelligrade, an AI that doesn\'t just digitize paper but handles the actual thinking. It checks 100% of scripts instantly and gives teachers a "Classroom Intelligence Dashboard" that shows exactly where the whole class is getting confused.',
      outcome: 'We can slash grading costs by nearly 70% and give teachers half of their time back to focus on teaching. Results that used to take three weeks now happen the same day, creating a much faster and more helpful learning loop for students.',
    }
  },
  {
    id: 'zepto',
    title: 'Zepto Fashion Scale-up',
    category: 'E-commerce / Scale-up Strategy',
    description: "Launch plan to crack high-margin lifestyle categories on Zepto, featuring the VIP Trial Service, True-Size Mapping, and SOR consignment models.",
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Strategy', 'Operations', 'Product Management'],
    caseStudy: {
      problem: "Quick commerce grocery delivery suffers from ultra-thin margins (AOV ₹500 with a 10% take-rate). Furthermore, market share consolidation from agile competitors pushes Zepto to identify high-margin consumer verticals to sustain growth.",
      solution: "An end-to-end launch blueprint for Zepto Fashion. This covers high-value apparel (targeting an average of ₹2,000+ per order) supported by a 4-pillar product strategy: the doorstep VIP Trial Service, True-Size Mapping API, local dark-store hub-and-spoke logic, and low-liability Sale-or-Return inventory partnerships.",
      outcome: "Secures a massive 7.2x order fee revenue growth (delivering ₹360 in take fees vs ₹50 in groceries), completely mitigating returns drag and inventory writing risks, and retooling Zepto's average order value to sustainable levels.",
    }
  },
  {
    id: 'ola-bus',
    title: 'Ola Intercity Bus',
    category: 'Product Strategy & Mobility',
    description: 'Your Door To Destination.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    tags: ['Mobility', 'Service Design', 'Integrated UX'],
    caseStudy: {
      problem: 'Long-distance travel in India is stressful and messy. Travelers have to figure out their own way to the bus stop, worry about safety, and settle for whatever greasy food they find at a random roadside break.',
      solution: 'We proposed India’s first integrated platform where one booking covers everything: a cab to your door, a premium bus seat, and even pre-scheduled meals delivered fresh at the right stops. We added live GPS sharing and an SOS button to ensure every passenger feels safe throughout the night.',
      outcome: 'By selling "convenience" instead of just a seat, Ola can earn 3-4 times more per customer than a standard ticket site. It builds deep loyalty by taking the anxiety out of travel, ensuring users don\'t just book once, but every time they head out of town.',
    }
  },
  {
    id: 'famapp',
    title: 'FamApp GTM Evolution',
    category: 'Go-To-Market Strategy',
    description: 'Money Management Made Fun.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    tags: ['FinTech', 'User Acquisition', 'Strategy'],
    caseStudy: {
      problem: 'While millions of teens signed up for FamApp, many got stuck at the "parental hurdle" or found the KYC process too confusing to finish. It felt like just another pocket money app rather than a tool that truly helped them grow their dreams.',
      solution: 'We moved away from boring forms toward a lifestyle-first approach by introducing "FamZones" for student hangouts and "Squad Wallets" for easy group spending. We also proposed a "Spark Grant" to fund student projects, making the app an active partner in their ambitions.',
      outcome: 'These changes aim to turn a one-time signup into a daily habit, significantly lowering the number of users who drop off during onboarding. By adding features like metro bookings and bill splits, the app becomes the "go-to" for every aspect of student life.',
    }
  }
];

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: 'postgrad',
    year: "2025 — Present",
    role: "PGP in Tech & Business Management",
    company: "Masters’ Union",
    description: "Currently pursuing a PGP at Masters’ Union, where I have been building strong foundations in Product Management, Go-To-Market strategy, and business problem solving through hands-on projects and case-based learning. Alongside academic work, I launched a dropshipping venture (Mirayaa) and also worked on building a short kurta clothing brand inspired by pre-colonial Indian attire, aiming to revive elements of traditional Indian culture through modern everyday wear.",
    badge: "POST GRADUATION CHALLENGE",
    highlightTitle: "Masters’ Union – PGP in",
    accentText: "Tech & Business Management",
    points: [],
    image: [
      "https://lh3.googleusercontent.com/d/1q9G4C0O19H6qO3klW-z8Num0cg0MwARF",
      "https://lh3.googleusercontent.com/d/1EckPHamAdGxblAuabDNuBbZMUQzTUVPU"
    ]
  },
  {
    id: 'schbang',
    year: "2022 — 2024",
    role: "Senior Project Executive - APM",
    company: "Schbang",
    description: "At Schbang, I managed end-to-end execution for a ₹1.25 crore portfolio, working with clients across industries such as finance, green energy, and manufacturing. I led cross-functional teams to deliver digital products and features while improving user experience, conversion funnels, and customer journeys across platforms.",
    badge: "PROFESSIONAL CAREER",
    highlightTitle: "Schbang – Senior Project",
    accentText: "Executive - APM",
    points: [],
    image: "https://lh3.googleusercontent.com/d/1c8p8UsUIe_WG3Zsj5M0c3N2aPeIcgPIa"
  },
  {
    id: 'cibil',
    year: "2021 — 2022",
    role: "IT Consultant",
    company: "TransUnion CIBIL",
    description: "At TransUnion CIBIL, I worked on the SaaS platform helping financial institutions integrate credit solutions through APIs and digital workflows. I collaborated with multiple clients to implement solutions, improve product adoption, and support faster onboarding and KYC processes. My contributions were recognized with two R&R Awards for improving client adoption processes and delivering impactful solutions across projects.",
    badge: "PROFESSIONAL CAREER",
    highlightTitle: "TransUnion CIBIL –",
    accentText: "IT Consultant",
    points: [],
    image: "https://lh3.googleusercontent.com/d/1ijrIapJdrRjndF6-_T1jVXOYcP_pV31E"
  },
  {
    id: 'undergrad',
    year: "2017 — 2021",
    role: "Engineering Student",
    company: "MIT Pune",
    description: "Started my engineering journey in Computer Science where I built a strong foundation in technology, problem solving, and product thinking. During my final year, I co-developed Organic Buddy, a platform designed to support farmers by enabling equipment sharing, organic farming learning resources, and an AI-based crop disease diagnosis tool. The project focused on reducing farming costs and improving access to sustainable agricultural practices.",
    badge: "FOUNDATIONAL EDUCATION",
    highlightTitle: "Graduation – B.Tech",
    accentText: "Computer Science",
    points: [],
    image: "https://lh3.googleusercontent.com/d/1zlaBZ6QawyY_ozAKOsPoSfBClCKEgD6X"
  }
];

export const PM_BIO_PARAGRAPHS = [
  "A keen learner full of dreams; my curiosity keeps me versatile. Currently, I am a PGP student in Technology and Business Management at Masters’ Union.",
  "Prior to that, I worked as an APM at Schbang, where I managed E2E website & app development for multiple clients. And as an IT Consultant at Transunion CIBIL.",
  "I am an engineer by training, having completed my B.Tech from Maharashtra Institute of Technology, Pune."
];

export const PM_BIO = PM_BIO_PARAGRAPHS.join(' ');
