"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Badge } from "@/components/ui/badge";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import {
  TrendingUp,
  Activity,
  Layers,
  Coffee,
  Code2,
  ScanFace,
  Brain,
  BarChart3,
  Gamepad2,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  X,
  Mail,
  Moon,
  Sun,
  Sparkles,
  ArrowRight,
  PlayCircle,
  PauseCircle,
  Terminal,
  Wand2,
  Globe,
  Cpu,
  Camera,
  Bot,
  ImagePlus,
  Keyboard,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
// === Unique micro-interactions ===
function useTheme() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);
  return { theme, setTheme };
}

function Magnetic({ children, strength = 10 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-strength, strength], [2, -2]);
  const rotateY = useTransform(x, [-strength, strength], [-2, 2]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (e) => {
      const rect = node.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      animate(x, Math.max(-strength, Math.min(strength, relX)), { duration: 0.15 });
      animate(y, Math.max(-strength, Math.min(strength, relY)), { duration: 0.15 });
    };
    const onLeave = () => {
      animate(x, 0, { duration: 0.2 });
      animate(y, 0, { duration: 0.2 });
    };
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, x, y]);

  return (
    <motion.div ref={ref} style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}>
      {children}
    </motion.div>
  );
}

function BlobsBackground() {
  // Animated, reactive gradient blobs for a hypnotic feel
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-16 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/40 to-cyan-500/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-500/40 to-amber-500/40 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-emerald-500/30 to-blue-500/30 blur-2xl animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255, 255, 255, 0.98),transparent_40%)]" />
    </div>
  );
}

function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] mix-blend-soft-light" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.6\"/></svg>')" }} />
  );
}

function FloatingDock({ onOpenCommand }) {
  return (
    <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-2xl border bg-foreground text-background shadow-2xl backdrop-blur-lg">
      <div className="flex items-center gap-2 px-10 py-2">
          <Button variant="ghost" className="rounded-xl  cursor-pointer" onClick={onOpenCommand}>
            <Keyboard className="mr-0 h-4 w-4" />Command <kbd className="rounded bg-muted px-1.5 py-0.5  text-foreground text-xs">⌘/Ctrl</kbd>+ <kbd className="rounded bg-muted px-1.5 py-0.5  text-foreground text-xs">K</kbd>
          </Button>
      </div>
    </motion.div>
  );
}

function Hero({ theme, setTheme, onOpenCommand }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
  const handler = (e) => {
    if (e.altKey && e.key.toLowerCase() === "t") {
      e.preventDefault();
      setTheme((t) => (t === "dark" ? "light" : "dark"));
    }
    if (e.altKey && e.key.toLowerCase() === "m") {
    e.preventDefault();

    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
}

  };
  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, [onOpenCommand, setTheme]);

// TAMBAHKAN INI
useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
  setPlaying(false);
}, [theme]);

const words = ["AI", "Design", "Research", "Builder", "Machine Learning", "Statistic"];

  return (
    <section id="home" className="relative grid min-h-[92vh] place-items-center px-6 pt-20 ">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,transparent,hsl(var(--background)/0.2))]" />
      <div className="mx-auto max-w-6xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background text-foreground px-4 py-2 text-sm backdrop-blur-xl">
            <Wand2 className="h-4 w-4" />
            <span>Press<kbd className="rounded bg-muted px-1.5 py-0.5  text-foreground text-xs">⌘/Alt</kbd> + <kbd className="rounded bg-muted text-foreground px-1.5 py-0.5 text-xs">T</kbd> for theme</span>
            <span>|<kbd className="rounded bg-muted px-1.5 py-0.5  text-foreground text-xs">⌘/Alt</kbd> + <kbd className="rounded bg-muted text-foreground px-1.5 py-0.5 text-xs">M</kbd> for music</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Andri —
            </span>
            <br />
            transforming data into insights and ideas into AI-powered applications.
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base opacity-80 md:text-lg">
            Data Analyst and AI Developer specializing in machine learning, deep learning, computer vision, and intelligent chatbot systems. Passionate about transforming
            data into actionable insights and building AI-powered solutions for real-world problems.
          </p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="icon" variant="ghost" className="rounded-2xl" onClick={() => {
                const audio = audioRef.current;
                if (!audio) return;
                if (audio.paused) { audio.play(); setPlaying(true); } else { audio.pause(); setPlaying(false); }
              }} aria-label="Toggle ambient audio">
                {playing ? <PauseCircle className="h-8 w-8" /> : <PlayCircle className="h-8 w-8" />}
              </Button>
    
              <Button size="icon" variant="ghost" className="rounded-2xl" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-8 w-8" /> : <Moon className="h-8 w-8" />}
              </Button>
  
            <audio
              ref={audioRef}
              src={
                theme === "dark"
                  ? "/audio/dark.mp3"
                  : "/audio/light.mp3"
              }
              loop
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            {words.map((w, i) => (
              <motion.span key={w} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="rounded-full border px-3 py-1 opacity-80">
                {w}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-background/60 shadow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        {subtitle && <p className="text-sm opacity-70">{subtitle}</p>}
      </div>
    </div>
  );
}

function About() {
  const facts = [
    { icon: Brain, label: "Machine Learning", text: "CNN • NLP • Computer Vision" },

    { icon: Globe, label: "Web Development", text: "Next.js • Laravel • Django/Flask" },

    { icon: BarChart3, label: "Data Science & Statistics", text: "Time Series • Sentiment Analysis • Spatial Modeling • Forecasting" },

    { icon: Gamepad2, label: "Game Development", text: "Roblox • Lua • 3D Modeling" },
  ];
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading icon={BookOpen} title="About" subtitle="Who I am & how I think" />
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <Card className="rounded-2xl">
            <CardContent className="p-6 text-base leading-relaxed opacity-90">
               I build across AI, data, and interactive systems, including computer vision models, NLP chatbots, sentiment-based prediction systems, and financial analytics. I also explore game development and creative coding, including Roblox scripting and simulation-based systems, combining logic, data, and interactivity into real applications.
            </CardContent>
          </Card>
          <div className="grid gap-4">
            {facts.map(({ icon: I, label, text }) => (
              <Card key={label} className="rounded-2xl">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-muted">
                    <I className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">{label}</div>
                    <div className="text-sm opacity-70">{text}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, tags = [], icon: Icon, desc, slug }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="group border p-4 rounded-xl">
      
      {Icon && <Icon className="h-6 w-6 opacity-70 mb-2" />}

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-sm opacity-70 mt-2">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((t) => (
          <span key={t} className="text-xs border px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>

      {slug && (
        <Link href={`/projects/${slug}`}>
          <button className="mt-4 text-sm underline opacity-80 hover:opacity-100">
            Visit →
          </button>
        </Link>
      )}

    </motion.div>
  );
}

function Projects() {
  const data = [
    {
      slug: "diagnoskin",
      title: "Diagnoskin",
      icon: ImagePlus,
      desc: "AI-powered skin disease assistant with CNN classification, NLP chatbot, and explainable AI pipeline.",
      tags: ["FastAPI", "Next.js", "CNN", "NLP"],
      cta: "#",
    },
    {
      slug: "poxpox-bot",
      title: "PoxPox Bot",
      icon: Bot,
      desc: "Intelligent rash classification chatbot that provides medical-style explanations and guidance.",
      tags: ["Flask", "TensorFlow", "PyTorch", "Next.js"],
      cta: "#",
    },
    {
      slug: "spatial",
      title: "Spatial Analytics Dashboard",
      icon: BarChart3,
      desc: "Spatial statistical analysis and visualization dashboard for regional pattern exploration and regression modeling.",
      tags: ["R Shiny", "Spatial Regression", "GIS", "Leaflet"],
      cta: "#",
    },
    {
      slug: "negativebinomial",
      title: "Negative Binomial Model",
      icon: TrendingUp,
      desc: "Statistical modeling for count-based prediction using Negative Binomial regression and time-series features.",
      tags: ["R", "Statistics", "Negative Binomial Regression","GLM","Data Analysis"],
      cta: "#",
    },
    {
      slug: "personalwebsite",
      title: "Personal Website",
      icon: Globe,
      desc:  "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",
      tags: ["Next.js","HTML","CSS","JavaScript","GitHub","Netlify"],
      cta: "#",
    },
    {
      slug: "netplix",
      title: "Netplix",
      icon: PlayCircle,
      desc: "Streaming platform UI clone with modern responsive design and dynamic content rendering.",
      tags: ["Next.js", "UI/UX", "Frontend"],
      cta: "#",
    },
    {
      slug: "bioinformatik",
      title: "Bioinformatics Analysis",
      icon: Activity,
      desc: "Data analysis pipeline for biological sequences and statistical pattern discovery in genomic datasets.",
      tags: ["R","Bioinformatics","GEO2R","Microarray","Gene Expression","limma"],
      cta: "#",
    },
    {
      slug: "clustering",
      title: "Clustering Analysis",
      icon: Layers,
      desc: "Unsupervised learning project exploring clustering techniques for pattern discovery in multivariate data.",
      tags: ["R","Clustering","K-Means","Fuzzy C-Means","GIS"],
      cta: "#",
    },
    {
      slug: "cafeorder",
      title: "Cafe Order System",
      icon: Coffee,
      desc: "Simple full-stack ordering system with database integration and real-time order processing.",
      tags: ["Next.js","Node.js","Express.js","MongoDB","JWT","Tailwind CSS"],
      cta: "#",
    },
    {
      slug: "intersectawebsite",
      title: "Intersecta Website",
      icon: Code2,
      desc: "Modern company landing page with responsive UI and optimized performance.",
      tags: ["Next.js", "UI Design", "Frontend"],
      cta: "#",
    },
    {
      slug: "faceapp",
      title: "Face Recognition System",
      icon: ScanFace,
      desc: "Real-time face recognition system using deep learning-based computer vision models.",
      tags: ["OpenCV", "CNN", "Python"],
      cta: "#",
    },
    {
      slug: "robloxmap",
      title: "Roblox Map Builder",
      icon: Gamepad2,
      desc: "3D environment and gameplay map design system for Roblox experiences using Lua scripting.",
      tags: ["Roblox", "Lua", "Game Design"],
      cta: "Visit Project",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <SectionHeading
          icon={Sparkles}
          title="Projects"
          subtitle="Things I’ve shipped & loved"
        />

        {/* SCROLL GRID BOX */}
        <div className="relative">
          
          <div
            className="
              grid gap-6
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              max-h-[80vh]
              overflow-y-auto
              pr-2
              scroll-smooth
              scrollbar-hide
            "
          >
            {data.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          {/* optional fade bottom (biar keliatan scrollable) */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background" />

        </div>

      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  return (
    <section id="newsletter" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Card className="rounded-2xl">
          <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-semibold">Stay in the loop</div>
              <p className="text-sm opacity-70">No spam. Just occasional behind‑the‑scenes notes.</p>
            </div>
            <div className="flex w-full gap-2 md:w-auto">
              <Input placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl" />
              <Button className="rounded-xl" onClick={() => setState("sent")}>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
        <AnimatePresence>
          {state === "sent" && (
            <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3 text-sm opacity-80">
              Thanks! Check your inbox to confirm.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Contact() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormState("success");
          formRef.current.reset();
        },
        () => {
          setFormState("error");
        }
      );
  };


  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <SectionHeading
          icon={Mail}
          title="Contact"
          subtitle="Let’s build something addictive"
        />

        <div className="grid gap-6 md:grid-cols-2">

          {/* FORM */}
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <form ref={formRef} onSubmit={sendEmail} className="grid gap-3">

                <Input name="name" placeholder="Your name" required />

                <Input name="email" type="email" placeholder="Email" required />

                <Textarea name="message" placeholder="Message..." required />

                <Button type="submit" disabled={formState === "sending"}>
                  {formState === "sending" ? "Sending..." : "Send"}
                </Button>

                {formState === "success" && (
                  <p className="text-green-500 text-sm">Message sent 🚀</p>
                )}

                {formState === "error" && (
                  <p className="text-red-500 text-sm">Failed to send ❌</p>
                )}

              </form>

            </CardContent>
          </Card>

          {/* INFO + SOCIAL */}
          <Card className="rounded-2xl">
            <CardContent className="p-6 flex flex-col gap-4">

              <p className="text-sm opacity-80">
                Or contact me directly:
              </p>

              <a href="mailto:kurokoandriyas@gmail.com" className="text-sm underline">
                kurokoandriyas@gmail.com
              </a>

              {/* SOCIAL ICONS */}
              <div className="flex gap-3 mt-4 flex-wrap">

                <a
                  href="https://github.com/LouuRey"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition hover:scale-105"
                  style={{ backgroundColor: "#181717", color: "white" }}
                >
                  <Github className="h-6 w-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-andriyas-musa-munthalib-745198253/"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition hover:scale-105"
                  style={{ backgroundColor: "#0A66C2", color: "white" }}
                >
                  <Linkedin className="h-6 w-6" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UC3RrRpy_-rZ2zjPY1jvcm0g"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition hover:scale-105"
                  style={{ backgroundColor: "#FF0000", color: "white" }}
                >
                  <Youtube className="h-6 w-6" />
                </a>

                <a
                  href="https://www.tiktok.com/@kodokafk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition hover:scale-105"
                  style={{ backgroundColor: "#000000", color: "white" }}
                >
                  <FaTiktok className="h-6 w-6" />
                </a>

                <a
                  href="https://www.instagram.com/andriyasmm/"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition hover:scale-105"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    color: "white",
                  }}
                >
                  <Instagram className="h-6 w-6" />
                </a>

              </div>

            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 pb-16">
      <div className="mx-auto max-w-6xl border-t py-6 text-sm opacity-70">
        © {new Date().getFullYear()} Andri. Crafted with taste.
      </div>
    </footer>
  );
}

function CommandK({ open, setOpen }) {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "newsletter", label: "Newsletter" },
    { id: "contact", label: "Contact" },
  ];
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Sections">
          {sections.map((s) => (
            <CommandItem key={s.id} onSelect={() => { setOpen(false); document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }); }}>
              <ChevronRight className="mr-2 h-4 w-4" /> {s.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export default function AddictivePersonalSite() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground antialiased">
      <BlobsBackground />
      <NoiseOverlay />
      <CommandK open={open} setOpen={setOpen} />
      <Hero theme={theme} setTheme={setTheme} onOpenCommand={() => setOpen(true)} />
      <About />
      <Projects />
      <Newsletter />
      <Contact />
      <Footer />
      <FloatingDock onOpenCommand={() => setOpen(true)} />
    </div>
  );
}