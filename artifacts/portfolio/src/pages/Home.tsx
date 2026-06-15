import React, { useEffect, useState } from "react";
import profilePhoto from "@assets/1767216109601_1781552455595.jpg";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronRight,
  Terminal,
  Cloud,
  Shield,
  Database,
  Cpu,
  Award,
  BookOpen,
  Users,
  BarChart2
} from "lucide-react";
import { 
  SiTerraform, 
  SiDocker, 
  SiKubernetes, 
  SiPython, 
  SiGnubash,
  SiGrafana,
  SiJira,
  SiGithubactions
} from "react-icons/si";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function SectionHeading({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: React.ElementType }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={FADE_UP}
      className="mb-12 md:mb-20"
    >
      <div className="flex items-center gap-4 mb-4">
        {Icon && <div className="p-3 bg-primary/10 rounded-xl text-primary"><Icon size={24} /></div>}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-primary mt-6 rounded-full" />
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-primary">PB.</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
          </div>
          <a href="mailto:poojaborade7022@gmail.com" className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Cloud Architecture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        
        <div className="container relative z-10 px-6">
          <motion.div 
            style={{ y, opacity }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-tight">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Azure Cloud.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I am <strong className="text-foreground font-semibold">Pooja Borade</strong>, an Azure Solutions Architect & IT Engineer building secure, scalable, and zero-trust cloud infrastructures.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#experience" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                View Experience <ChevronRight size={18} />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/poojan644" target="_blank" rel="noreferrer" className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/pooja-madhukar-borade-618618210/" target="_blank" rel="noreferrer" className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:poojaborade7022@gmail.com" className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
            >
              <h2 className="text-3xl font-bold mb-6">Technical depth meets polished communication.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a certified Azure Solutions Architect Expert, I design robust, secure cloud environments aligned with the Well-Architected Framework. My passion lies in transforming complex infrastructure requirements into elegant, automated solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Beyond the terminal, I'm an active Toastmasters leader, serving as VP of Education. I believe that the best architectures are only as good as our ability to communicate them. I bridge the gap between deep technical implementation and strategic business value.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-blue-400 to-primary/30 blur-sm opacity-60" />
                <img
                  src={profilePhoto}
                  alt="Pooja Borade"
                  className="relative w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-2xl border-2 border-primary/30 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <motion.div variants={FADE_UP} className="p-6 bg-secondary/50 rounded-2xl border border-border/50 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">4+</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Certifications</p>
            </motion.div>
            <motion.div variants={FADE_UP} className="p-6 bg-secondary/50 rounded-2xl border border-border/50 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">MS</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Info Tech</p>
            </motion.div>
            <motion.div variants={FADE_UP} className="p-6 bg-secondary/50 rounded-2xl border border-border/50 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">4</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Cloud Projects</p>
            </motion.div>
            <motion.div variants={FADE_UP} className="p-6 bg-secondary/50 rounded-2xl border border-border/50 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">VPE</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Toastmasters</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/20 border-y border-border/50">
        <div className="container px-6 mx-auto">
          <SectionHeading title="Experience" subtitle="Where I've applied my expertise." icon={Terminal} />
          
          <div className="space-y-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />
              
              <div className="md:grid grid-cols-2 gap-16 relative">
                <div className="hidden md:block absolute left-[50%] top-2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 border-4 border-background" />
                
                <div className="md:text-right pb-4 md:pb-0">
                  <h3 className="text-2xl font-bold text-foreground">Graduate Research Assistant</h3>
                  <p className="text-primary font-medium text-lg mb-2">Lawrence Technological University</p>
                  <p className="text-sm text-muted-foreground">Aug 2025 – May 2026 | Southfield, MI</p>
                </div>
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3"><ChevronRight size={20} className="text-primary shrink-0" /> Conducted extensive literature reviews and academic paper analysis focusing on strategic frameworks.</li>
                    <li className="flex gap-3"><ChevronRight size={20} className="text-primary shrink-0" /> Executed SWOT and SOAR analyses to formulate actionable strategic recommendations.</li>
                    <li className="flex gap-3"><ChevronRight size={20} className="text-primary shrink-0" /> Prepared research publications, managing content refinement and citation management.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid grid-cols-2 gap-16 relative">
                <div className="hidden md:block absolute left-[50%] top-2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 border-4 border-background" />
                
                <div className="md:text-right pb-4 md:pb-0">
                  <h3 className="text-2xl font-bold text-foreground">Azure Solution Architect</h3>
                  <p className="text-primary font-medium text-lg mb-2">Project-Based Experience</p>
                  <p className="text-sm text-muted-foreground">Oct 2024 – Present</p>
                </div>
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3"><ChevronRight size={20} className="text-primary shrink-0" /> Designed and implemented secure, scalable Azure cloud architectures aligned with the Azure Well-Architected Framework.</li>
                    <li className="flex gap-3"><ChevronRight size={20} className="text-primary shrink-0" /> Built a Zero Trust DevSecOps platform integrating Azure AD, RBAC, and identity-based access controls.</li>
                    <li className="flex gap-3"><ChevronRight size={20} className="text-primary shrink-0" /> Developed a SOC lakehouse using Azure Databricks and Power BI for centralized logging and real-time analytics.</li>
                    <li className="flex gap-3"><ChevronRight size={20} className="text-primary shrink-0" /> Implemented CLI-based Azure landing zones using Infrastructure as Code (Terraform) with RBAC and policies.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container px-6 mx-auto">
          <SectionHeading title="Technical Arsenal" subtitle="Tools and platforms I use to build scalable solutions." icon={Cpu} />
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group">
              <Cloud className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Cloud & Architecture</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border flex items-center gap-2"><Cloud className="text-[#0089D6]" /> Azure Core</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">VNets & NSGs</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Landing Zones</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Hybrid Connectivity</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">App Service</span>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group">
              <Shield className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Identity & Security</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Zero Trust</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Azure AD</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">RBAC</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Conditional Access</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">SSO / OAuth / SAML</span>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group">
              <Terminal className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Infrastructure & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border flex items-center gap-2"><SiTerraform className="text-[#844FBA]" /> Terraform</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border flex items-center gap-2"><SiDocker className="text-[#2496ED]" /> Docker</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border flex items-center gap-2"><SiKubernetes className="text-[#326CE5]" /> AKS</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border flex items-center gap-2"><SiGithubactions className="text-[#0080FF]" /> CI/CD</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border flex items-center gap-2"><Github /> GitHub Actions</span>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group">
              <Database className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Data & Monitoring</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Azure Databricks</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border flex items-center gap-2"><BarChart2 className="text-[#F2C811]" /> Power BI</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border flex items-center gap-2"><BarChart2 className="text-[#E97627]" /> Tableau</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Azure Monitor</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Log Analytics</span>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group md:col-span-2">
              <div className="flex gap-4 items-center mb-6">
                <SiPython className="text-[#3776AB] text-3xl" />
                <SiGnubash className="text-[#4EAA25] text-3xl" />
                <SiJira className="text-[#0052CC] text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Programming & Operations</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Python</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">SQL</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Windows Server</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Linux (Ubuntu)</span>
                <span className="px-3 py-1 bg-background rounded-md text-sm font-medium border border-border">Agile / Scrum</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/20 border-y border-border/50">
        <div className="container px-6 mx-auto">
          <SectionHeading title="Featured Architecture" subtitle="Detailed deep-dives into cloud implementations." icon={Database} />
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-background rounded-xl border border-border/50 overflow-hidden flex flex-col h-full group hover:border-primary/50 transition-colors">
              <div className="h-48 bg-secondary/50 flex items-center justify-center p-6 border-b border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
                <Shield size={64} className="text-primary relative z-10" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Zero Trust DevSecOps Platform</h3>
                  <a href="https://github.com/poojan644/Zero-Trust-DevSecOps-Platform-on-Azure" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                </div>
                <p className="text-muted-foreground mb-6 flex-1">
                  Built robust CI/CD pipelines integrating Azure AD, RBAC, and Zero Trust principles. Designed VNets, subnets, and NSGs for highly segmented and secure workloads. Deployed containerized applications using Docker and AKS for extreme scalability.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Azure AD</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">AKS</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Zero Trust</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-background rounded-xl border border-border/50 overflow-hidden flex flex-col h-full group hover:border-primary/50 transition-colors">
              <div className="h-48 bg-secondary/50 flex items-center justify-center p-6 border-b border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-background to-background" />
                <Terminal size={64} className="text-blue-500 relative z-10" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Azure Secure Landing Zone</h3>
                  <a href="https://github.com/poojan644/azure-secure-landing-zone-cli" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                </div>
                <p className="text-muted-foreground mb-6 flex-1">
                  Implemented Infrastructure as Code for a highly scalable CLI-based Azure landing zone. Established robust network security with VNets, subnets, and NSGs while enforcing governance through RBAC, Azure Policy, and tagging strategies.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Terraform</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Azure CLI</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Governance</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-background rounded-xl border border-border/50 overflow-hidden flex flex-col h-full group hover:border-primary/50 transition-colors">
              <div className="h-48 bg-secondary/50 flex items-center justify-center p-6 border-b border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-background to-background" />
                <Cloud size={64} className="text-cyan-500 relative z-10" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Azure Secure Web App Architecture</h3>
                  <a href="https://github.com/poojan644/azure-secure-webapp-zero-trust" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                </div>
                <p className="text-muted-foreground mb-6 flex-1">
                  Architected a secure web application implementing Zero Trust methodologies. Configured identity-based authentication, conditional access, and least-privilege controls to significantly reduce the application's attack surface.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">App Service</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Conditional Access</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-background rounded-xl border border-border/50 overflow-hidden flex flex-col h-full group hover:border-primary/50 transition-colors">
              <div className="h-48 bg-secondary/50 flex items-center justify-center p-6 border-b border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-background to-background" />
                <Database size={64} className="text-yellow-500 relative z-10" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">SOC Lakehouse Analytics</h3>
                  <a href="https://github.com/poojan644/soc-lakehouse-databricks-powerbi" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                </div>
                <p className="text-muted-foreground mb-6 flex-1">
                  Engineered centralized security analytics leveraging Azure Databricks and Power BI. Built ingestion and processing pipelines for real-time threat monitoring, culminating in interactive dashboards for security operations.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Databricks</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Power BI</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">Security</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 relative">
        <div className="container px-6 mx-auto">
          <SectionHeading title="Certifications" subtitle="Validated expertise across industry standards." icon={Award} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="p-6 rounded-xl bg-gradient-to-br from-secondary to-background border border-primary/20 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <Cloud size={48} className="text-[#0089D6] mb-6" />
              <h3 className="font-bold text-lg mb-2">Azure Solutions Architect Expert</h3>
              <p className="text-sm text-muted-foreground mt-auto">Microsoft Certified</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="p-6 rounded-xl bg-gradient-to-br from-secondary to-background border border-primary/20 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <Cloud size={48} className="text-[#0089D6] mb-6" />
              <h3 className="font-bold text-lg mb-2">Azure Administrator Associate</h3>
              <p className="text-sm text-muted-foreground mt-auto">Microsoft Certified</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="p-6 rounded-xl bg-gradient-to-br from-secondary to-background border border-primary/20 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <Cloud size={48} className="text-[#0089D6] mb-6" />
              <h3 className="font-bold text-lg mb-2">Azure Fundamentals (AZ-900)</h3>
              <p className="text-sm text-muted-foreground mt-auto">Microsoft Certified</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="p-6 rounded-xl bg-gradient-to-br from-secondary to-background border border-border/50 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <Shield size={48} className="text-primary mb-6" />
              <h3 className="font-bold text-lg mb-2">Digital Transformation Engineer</h3>
              <p className="text-sm text-muted-foreground mt-auto">Zscaler Certified</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Leadership Section */}
      <section className="py-24 bg-secondary/20 border-t border-border/50">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Education" icon={BookOpen} />
              <div className="space-y-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
                  <h3 className="text-xl font-bold text-foreground">Master of Science in Information Technology</h3>
                  <p className="text-primary font-medium">Lawrence Technological University, MI</p>
                  <p className="text-sm text-muted-foreground mt-1">Aug 2024 – May 2026</p>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
                  <h3 className="text-xl font-bold text-foreground">Bachelor of Engineering in Information Technology</h3>
                  <p className="text-primary font-medium">University of Mumbai, India</p>
                  <p className="text-sm text-muted-foreground mt-1">Aug 2019 – Jul 2023</p>
                </motion.div>
              </div>
            </div>

            <div>
              <SectionHeading title="Leadership" icon={Users} />
              <div className="space-y-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
                  <h3 className="text-xl font-bold text-foreground">Vice President of Education (VPE)</h3>
                  <p className="text-primary font-medium">Santa Clara Entrepreneurs Toastmasters Club</p>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
                  <h3 className="text-xl font-bold text-foreground">Club Secretary</h3>
                  <p className="text-primary font-medium">San Jose AI Simplifiers Toastmasters Club</p>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
                  <h3 className="text-xl font-bold text-foreground">Member</h3>
                  <p className="text-primary font-medium">Information Systems Audit and Control Association (ISACA)</p>
                  <p className="text-sm text-muted-foreground mt-2">Active member engaging with cybersecurity, IT governance, and cloud risk management communities.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="py-24 relative">
        <div className="container px-6 mx-auto text-center">
          <SectionHeading title="Get in Touch" subtitle="Have a project in mind or want to connect?" icon={Mail} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="max-w-xl mx-auto mt-8"
          >
            <p className="text-muted-foreground mb-8 text-lg">
              I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello — my inbox is always open.
            </p>
            <a
              href="mailto:poojaborade7022@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity group"
            >
              <Mail size={22} />
              poojaborade7022@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter text-primary">PB.</span>
            <p className="text-muted-foreground mt-2">Azure Solutions Architect Expert Professional</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/poojan644" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pooja-madhukar-borade-618618210/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:poojaborade7022@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
