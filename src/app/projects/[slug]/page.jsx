"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ImagePlus,
  Bot,
  Github,
  ExternalLink,
  FileText,
  ArrowLeft,
} from "lucide-react";

const projects = [
  {
    slug: "diagnoskin",
    title: "Diagnoskin",
    icon: ImagePlus,

    desc:
      "AI-powered skin disease assistant with CNN classification, NLP chatbot, and explainable AI pipeline.",

    tags: ["FastAPI", "Next.js", "CNN", "NLP"],

    cover:
      "/images/diagnoskin-cover.jpg",

    youtube:
      "/video/diagnoskin.mp4",

    pdf:
      "/documents/diagnoskin.pdf",

    github:
      "https://github.com/Mr4sR/BE_GarudaCoders_py",

    demo:
      "https://diagnoskin.vercel.app",

    detail:
     "Diagnoskin is a capstone project developed during Coding Camp 2025 by the Garuda Coders team. The platform combines computer vision and natural language processing to provide AI-assisted skin disease detection and educational healthcare support. My primary responsibility was developing the image classification model and the intelligent chatbot system. The deep learning model was trained to classify nine skin diseases: Dermatitis, Impetigo, Chickenpox, Scabies, Warts, Acne, Herpes, Ringworm, and Urticaria. Users can upload a skin image and receive a predicted disease category with a confidence score. To enhance the user experience, I also developed an intent-based chatbot capable of understanding questions related to disease definitions, symptoms, causes, treatments, and prevention methods. The chatbot integrates prediction results with contextual health information, enabling more personalized responses.The system uses FastAPI for AI inference services and Next.js for the frontend application. The machine learning models are deployed through Hugging Face, while the web application is delivered through a modern web deployment workflow. The result is an integrated AI healthcare assistant that combines image analysis and conversational support within a single platform",
    gallery: [
      "/images/diagnoskin-gal1.png",
      "/images/diagnoskin-gal2.png",
      "/images/diagnoskin-gal3.png",
    ],

    features: [
      "Deep learning-based skin disease classification",
      "Support for 9 skin disease categories",
      "Intent-based healthcare chatbot",
      "Definition, symptom, cause, treatment, and prevention assistance",
      "Image upload and real-time prediction",
      "Confidence-aware diagnosis workflow",
      "FastAPI backend for model inference",
      "Next.js responsive frontend",
      "Hugging Face model deployment",
    ],
  },

  {
    slug: "poxpox-bot",
    title: "PoxPox Bot",

    icon: Bot,

    desc:
      "Intelligent rash classification chatbot that provides medical-style explanations and guidance.",

    tags: ["Flask", "TensorFlow", "PyTorch", "Next.js"],

    cover:
      "/images/poxpox-cover.png",

    youtube:
      "/video/poxpox.mp4",

    pdf:
      "/documents/poxpox.pdf",

    github:
      "https://drive.google.com/drive/folders/1bLxCiSalqtJs8rFWOqjhsR9hYmwqV4Yj?usp=drive_link",

    demo:
      "#",

   detail:
      "This project was inspired by research conducted by the Artificial Intelligence and Big Data Research Center of Universitas Padjadjaran. As part of my undergraduate final project, I developed an AI-powered system for the classification of exanthematous viral diseases using the MSID dataset and a multi-intent chatbot. The system combines deep learning-based image classification with an intelligent chatbot capable of understanding various user intents, providing disease information, symptoms, causes, prevention strategies, and treatment recommendations in an accessible and user-friendly manner.",
    gallery: [
      "/images/poxpox-gal1.png",
      "/images/poxpox-gal2.png",
      "/images/poxpox-gal3.jpg",
    ],

    features: [
      "Exanthematous viral disease recognition",
      "MSID dataset classification",
      "MobileNetV3 deep learning model",
      "Multi-intent conversational AI",
      "Symptom and disease explanation",
      "Personalized health recommendations",
    ],
  },
  {
    slug: "spatial",
    title: "Spatial Regression Dashboard",

    icon: "#",

    desc:
      "Spatial statistical analysis and visualization dashboard for regional pattern exploration and regression modeling.",

    tags: ["R Shiny", "Spatial Regression", "GIS", "Leaflet"],

    cover:
      "/images/spatial-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://drive.google.com/drive/folders/1MewJiVDaIcXebkTh1cwrIZ-96936VVus",

    demo:
      "https://spatialanalysis.netlify.app/",

    detail:
      "This project was developed as part of my Spatial Analysis coursework. The dashboard was built using R Shiny to facilitate spatial data exploration, visualization, and regression modeling through an interactive web interface. Users can upload spatial map files (SHP, JSON, or RDS) and attribute datasets (CSV or XLSX), perform spatial regression analyses, and visualize results directly on interactive maps. The application supports multiple spatial econometric models, enabling users to investigate spatial dependencies and regional variations efficiently.",

    gallery: [
      "/images/spatial-gal1.jpg",
      "/images/spatial-gal2.jpg",
      "/images/spatial-gal3.jpg",
      
    ],

    features: [
      "Interactive spatial data visualization",
      "Support for SHP, JSON, and RDS map files",
      "CSV and XLSX data integration",
      "Spatial Lag regression model",
      "Multiple spatial econometric models",
      "Automated spatial analysis workflow",
    ],
  },
  {
    slug: "negativebinomial",
    title: "Negative Binomial Model",

    icon: "#",

    desc:
       "Statistical modeling for count-based prediction using Negative Binomial regression and time-series features.",

    tags:  [
        "R",
        "Statistics",
        "Negative Binomial Regression",
        "GLM",
        "Data Analysis"
      ],


    cover:
      "/images/negativebinomial-cover.jpg",

    youtube:
      "/video/negativebinomial.mp4",

    pdf:
      "#",

    github:
      "https://drive.google.com/drive/folders/1Kv_mnR0oRFUm11Pne16OQy5RaYrhU0yT?usp=drive_link",

    demo:
      "https://scik.org/index.php/cmbn/article/view/8929",

    detail:
          "This project was completed as a university coursework assignment in collaboration with my classmates. The study investigates factors affecting stunting among toddlers in West Java using Negative Binomial Regression. The analysis compares Poisson and Negative Binomial models to address overdispersion in count data. Variables examined include low birth weight, exclusive breastfeeding, vitamin A supplementation, hospitals, and health centers. The results showed that low birth weight and vitamin A supplementation were significant determinants of stunting, while the Negative Binomial model provided the best fit for the data.",
    gallery: [
      "/images/negativebinomial-gal1.jpg",
      "/images/negativebinomial-gal2.jpg",
      "/images/negativebinomial-gal3.jpg",
      
    ],

    features: [
      "Negative Binomial Regression modeling",
      "Poisson Regression comparison",
      "Overdispersion testing",
      "Multicollinearity analysis using VIF",
      "Model selection using AIC",
      "Stunting determinant analysis in West Java",
      "Statistical inference and interpretation",
      "Collaborative university coursework project"
    ],
  },
  {
    slug: "personalwebsite",
    title: "Personal Website",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/personalwebsite-cover.jpg",

    youtube:
      "/video/personalwebsite.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
    {
    slug: "netplix",
    title: "Netplix",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/netplix-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
  {
    slug: "bioinformatik",
    title: "Bioinformatics Analysis of Chronic Urticaria",

    icon: "#",

    desc:
      "Bioinformatics analysis of Chronic Urticaria using GEO microarray datasets, GEO2R, and R to identify differentially expressed genes and molecular pathways.",

    tags: [
      "R",
      "Bioinformatics",
      "GEO2R",
      "Microarray",
      "Gene Expression",
      "limma"
    ],

    cover:
      "/images/bioinformatik-cover.png",

    youtube:
      "/video/bioinformatik.mp4",

    pdf:
      "#",

    github:
      "https://drive.google.com/drive/folders/140_Iyzl-0ZZkkYDCZ1NGntbavvRfcx2Y?usp=drive_link",

    demo:
      "https://www.ncbi.nlm.nih.gov/geo/geo2r/",

    detail:
      "This project reanalyzes public microarray datasets (GSE57178 and GSE72540) from the Gene Expression Omnibus (GEO) to investigate the molecular mechanisms of Chronic Urticaria. Differentially Expressed Genes (DEGs) were identified using GEO2R and analyzed further in R with packages such as GEOquery, limma, ggplot2, ComplexHeatmap, and EnhancedVolcano. The workflow included DEG identification, volcano plot visualization, heatmap generation, enrichment analysis, protein-protein interaction network analysis, and immune infiltration investigation. Results revealed key hub genes including IL6, PTGS2, ICAM1, TLR4, and CD14, as well as significant enrichment in NF-kB, TNF, and JAK-STAT signaling pathways.",

    gallery: [
      "/images/bioinformatik-gal1.png",
      "/images/bioinformatik-gal2.png",
      "/images/bioinformatik-gal3.png",
    ],

    features: [
      "GEO microarray data acquisition",
      "Differential Gene Expression (DEG) analysis",
      "Volcano plot visualization",
      "Heatmap and UMAP analysis",
      "Gene Ontology enrichment analysis",
      "KEGG pathway analysis",
      "Protein-Protein Interaction (PPI) network analysis",
      "Immune infiltration analysis using CIBERSORT"
    ],
  },
  {
    slug: "clustering",
    title: "Clustering Analysis of Indonesian Provinces",

    icon: "#",

    desc:
      "Cluster analysis of Indonesian provinces using K-Means and Fuzzy C-Means algorithms with spatial visualization in R.",

    tags: [
      "R",
      "Clustering",
      "K-Means",
      "Fuzzy C-Means",
      "DBSCAN",
      "GIS"
    ],

    cover:
      "/images/clustering-cover.jpg",

    youtube:
      "/video/clustering.mp4",

    pdf:
      "#",

    github:
      "https://drive.google.com/drive/folders/1xLnzgVv9VD5DKI0CduozTvuV2RmaT-fN?usp=drive_link",

    demo:
      "https://prosiding.statistics.unpad.ac.id/?journal=prosidingsns&page=article&op=view&path%5B%5D=336",

    detail:
      "This project analyzes the characteristics of Indonesian provinces using clustering techniques in R. The analysis utilizes labor and economic indicators including unemployment rate (TPT), labor force participation rate (TPAK), gender ratio, and provincial minimum wage (UMP). Data were standardized before applying K-Means and Fuzzy C-Means clustering algorithms. The optimal number of clusters was determined using the Elbow Method and Silhouette Analysis. Additional evaluations included correlation analysis, cluster visualization, and spatial mapping using GIS data to identify regional patterns across Indonesia. The project demonstrates how unsupervised learning can be used to uncover similarities and differences among provinces for policy and development insights.",

    gallery: [
      "/images/clustering-gal1.jpg",
      "/images/clustering-gal2.jpg",
      "/images/clustering-gal3.jpg",
    ],

    features: [
      "Data standardization and preprocessing",
      "Elbow Method for optimal cluster selection",
      "Silhouette Analysis for cluster validation",
      "K-Means clustering",
      "Fuzzy C-Means clustering",
      "Correlation heatmap visualization",
      "Cluster distribution mapping using GIS",
      "Spatial visualization of Indonesian provinces"
    ],
  },
  {
    slug: "cafeorder",
    title: "Cafe Order System",

    icon: "#",

    desc:
      "Full-stack cafe ordering platform with menu management, authentication, and order processing.",

    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS"
    ],

    cover:
      "/images/cafeorder-cover.jpg",

    youtube:
      "/video/cafeorder.mp4",

    pdf:
      "#",

    github:
      "https://drive.google.com/drive/folders/1EtRKO2VKa3qnU70j56aLfmUxL5bskXBO?usp=drive_link",

    demo:
      "#",

    detail:
      "Cafe Order System is a full-stack web application developed to streamline food and beverage ordering in cafes. The frontend is built with Next.js, providing a responsive and modern user interface, while the backend uses Express.js and MongoDB for API services and data storage. The system supports secure user authentication using JWT and bcrypt, menu management, order tracking, and customer order processing. The project demonstrates full-stack development, RESTful API integration, and database management.",

    gallery: [
      "/images/cafeorder-gal1.jpg",
      "/images/cafeorder-gal2.jpg",
      "/images/cafeorder-gal3.jpg",
    ],

    features: [
      "User authentication with JWT",
      "Password encryption using bcrypt",
      "Menu management system",
      "Order creation and tracking",
      "RESTful API architecture",
      "MongoDB database integration",
      "Responsive Next.js frontend",
      "Admin and customer workflows"
    ],
  },
    {
    slug: "intersectawebsite",
    title: "Intersecta Website",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "#",

    youtube:
      "#",

    pdf:
      "#",

    github:
      "",

    demo:
      "#",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [

    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
  {
    slug: "faceapp",
    title: "Face Recognition & Liveness Detection",

    icon: "#",

    desc:
      "AI-powered face recognition system with multimodal liveness detection using facial landmarks, blink detection, head movement analysis, and voice verification.",

    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "MediaPipe",
      "Computer Vision",
      "Face Recognition",
      "AI"
    ],

    cover:
      "/images/faceapp-cover.jpg",

    youtube:
      "/video/faceapp.mp4",

    pdf:
      "#",

    github:
      "https://drive.google.com/drive/folders/1XL5PPySaqPa2dq2FUPy1MPv2od4pHPQ1?usp=sharing",

    demo:
      "#",

    detail:
      "This project is an AI-based face recognition system built with Next.js and MediaPipe Face Landmarker. The application performs facial recognition using facial landmark embeddings and cosine similarity matching. To prevent spoofing attacks, the system incorporates multimodal liveness verification including blink detection, head movement validation, mouth movement analysis, and voice authentication. Real-time webcam processing, facial landmark visualization, and adaptive threshold calibration are used to improve recognition accuracy and security.",

    gallery: [
      "/images/faceapp-gal1.jpg",

    ],

    features: [
      "Real-time face recognition",
      "Facial landmark extraction with MediaPipe",
      "Blink detection using Eye Aspect Ratio (EAR)",
      "Head movement verification",
      "Mouth movement detection",
      "Voice authentication challenge",
      "Multimodal liveness detection",
      "Adaptive threshold calibration",
      "Webcam-based real-time processing",
      "Face similarity matching with cosine similarity"
    ],
  },
  {
    slug: "robloxmap",
    title: "Roblox Map Builder",
    icon: "#",
    desc:
      "3D interactive Roblox map project combining game design, scripting, and environment modeling using Roblox Studio, Blender, and Lua scripting.",

    tags: [
      "Roblox Studio",
      "Blender",
      "Lua",
      "3D Modeling",
      "Game Development",
      "Interactive Design"
    ],

    cover: "/images/roblox-cover.jpg",
    youtube: "/video/roblox.mp4",
    pdf: "#",

    github: "#",
    demo: "#",

    detail:
      "This project is a 3D interactive Roblox map builder developed as a game environment and simulation experience. The project combines Roblox Studio for world building, Blender for 3D asset modeling, and Lua scripting for gameplay logic and interactivity. Additional tools such as Microsoft Trellis and Cube3D Interactive were used to enhance scene structuring and spatial interaction design. The workflow also integrates Croma for visual tuning and environment aesthetics. The final result is a playable and interactive map that demonstrates game design, spatial thinking, and scripting ability.",

    gallery: [
      "/images/roblox-gal1.jpg",
      "/images/roblox-gal2.jpg",
      "/images/roblox-gal3.jpg"
    ],

    features: [
      "3D interactive Roblox environment",
      "Game world built using Roblox Studio",
      "Custom 3D assets created in Blender",
      "Lua scripting for gameplay mechanics",
      "Interactive map navigation system",
      "Optimized scene structure and performance",
      "Visual enhancement and lighting tuning",
      "Cross-tool pipeline workflow (Roblox + Blender + scripting)"
    ],
  },
];

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const safeSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const project = projects.find(
    (p) => p.slug === safeSlug
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">

      {/* BACK BUTTON */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      {/* HEADER */}
      <div className="mb-12">

        <h1 className="text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg opacity-70">
          {project.desc}
        </p>

        {/* LINKS */}
        <div className="mt-6 flex flex-wrap gap-3">


          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-muted"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-muted"
          >
            <FileText className="h-4 w-4" />
            Documentation
          </a>
        </div>
      </div>

      {/* COVER */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          Overview
        </h2>

        <img
          src={project.cover}
          alt={project.title}
          className="w-full rounded-3xl border object-cover"
        />
      </section>

      {/* DESCRIPTION */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          About This Project
        </h2>

        <p className="leading-8 opacity-80 text-justify">
          {project.detail}
        </p>
      </section>

      {/* VIDEO */}
      {project.youtube && (
        <section className="mb-16">
          <h2 className="mb-5 text-2xl font-bold">
            Demo Video
          </h2>

          <div className="overflow-hidden rounded-3xl border">
            <iframe
              src={project.youtube}
              className="aspect-video w-full"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          Features
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border p-4"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          Gallery
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="h-64 overflow-hidden rounded-2xl border"
            >
              <img
                src={image}
                alt={`${project.title}-${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="rounded-xl border px-4 py-2"
            >
              {tag}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}