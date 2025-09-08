import { motion } from "framer-motion";
import { ArrowLeft, Mail, Github, Linkedin, Twitter, Briefcase, GraduationCap, Heart, Code, User, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { SplineScene } from "@/components/ui/splite";
import { Timeline } from "@/components/ui/timeline";
import { CareerSection } from "@/components/career/career-section";
import { LimelightNav } from "@/components/ui/limelight-nav";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { AnimatedSocialIcons } from "@/components/ui/floating-action-button";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";
import { GlowCard } from "@/components/ui/spotlight-card";
import OrbitingSkills from "@/components/ui/orbiting-skills";

const Career = () => {
  const navigate = useNavigate();

  const socialIcons = [
    { 
      Icon: Github,
      href: "https://github.com",
      className: "hover:bg-accent"
    },
    { 
      Icon: Twitter,
      href: "https://twitter.com" 
    },
    { 
      Icon: Linkedin,
      href: "https://linkedin.com" 
    },
    { 
      Icon: Mail,
      href: "mailto:contact@example.com" 
    }
  ];

  const experienceData = [
    {
      title: "Senior AI Developer",
      company: "Tech Innovations Inc.",
      duration: "2022 - Present",
      description: "Leading AI development initiatives, implementing machine learning solutions, and mentoring junior developers in cutting-edge technologies."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2020 - 2022",
      description: "Developed end-to-end web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver scalable solutions."
    },
    {
      title: "Frontend Developer",
      company: "StartupTech",
      duration: "2019 - 2020",
      description: "Built responsive user interfaces and implemented modern design systems. Focused on performance optimization and user experience enhancement.",
      isLast: true
    }
  ];

  const projectsData = [
    {
      title: "AI-Powered Dashboard",
      description: "A comprehensive analytics platform using machine learning to provide insights and predictions for business intelligence.",
      technologies: ["React", "Python", "TensorFlow"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/user/ai-dashboard",
      glowColor: "blue" as const
    },
    {
      title: "3D Web Experience",
      description: "An immersive web application using Three.js and WebGL to create interactive 3D environments for storytelling.",
      technologies: ["Three.js", "WebGL", "GSAP"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/user/3d-web",
      glowColor: "purple" as const
    },
    {
      title: "Real-time Chat Platform",
      description: "A scalable messaging platform with real-time communication, file sharing, and advanced chat features.",
      technologies: ["Node.js", "Socket.io", "React"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/user/chat-platform",
      glowColor: "green" as const
    }
  ];

  const educationData = [
    {
      title: "Master's in Computer Science",
      company: "Technology University",
      duration: "2017 - 2019",
      description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on neural network optimization and deep learning architectures."
    },
    {
      title: "Bachelor's in Software Engineering",
      company: "Engineering College",
      duration: "2013 - 2017",
      description: "Comprehensive study of software development principles, algorithms, and system design. Graduated summa cum laude with focus on web technologies.",
      isLast: true
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Falling Pattern Background */}
      <FallingPattern 
        className="fixed inset-0 z-0" 
        color="hsl(var(--primary))"
        backgroundColor="hsl(var(--background))"
        blurIntensity="0.8em"
      />

      {/* Glass morphism overlay */}
      <div className="fixed inset-0 z-[1] backdrop-blur-sm bg-gradient-to-br from-background/30 via-background/10 to-background/30" />
      
      {/* Top Right Navigation - Fixed positioning */}
      <div className="fixed top-6 right-6 z-[100]">
        <LimelightNav 
          items={[
            { id: 'home', icon: <User />, label: 'Home', onClick: () => navigate('/') },
            { id: 'career', icon: <Briefcase />, label: 'Career' },
            { id: 'contact', icon: <Mail />, label: 'Contact' },
          ]}
        />
      </div>

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Hero Section with Integrated 3D Scene */}
        <section className="min-h-screen flex items-center px-6">
          <div className="container mx-auto max-w-full">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="backdrop-blur-xl bg-card/10 border border-border/20 rounded-3xl p-12 shadow-2xl relative min-h-[90vh] w-full"
            >
              <CursorSpotlight className="absolute inset-0 rounded-3xl" size={600}>
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full relative z-10">
                  {/* Left Content */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="text-3xl md:text-4xl text-muted-foreground font-light">
                        I'm Debashish —
                      </h1>
                      <div className="text-5xl md:text-7xl font-bold text-foreground font-mono tracking-wide leading-tight">
                        <span className="text-primary">[Developer]</span> → <span className="text-accent">[AI Enthusiast]</span> → <span className="text-secondary">[Innovator]</span>
                      </div>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                      Exploring the dimensions of technology, creativity, and innovation through immersive digital experiences.
                    </p>
                    <div className="flex gap-6">
                      <div className="backdrop-blur-sm bg-primary/10 px-6 py-4 rounded-xl border border-primary/20">
                        <span className="text-primary font-semibold text-lg">5+ Years</span>
                      </div>
                      <div className="backdrop-blur-sm bg-accent/10 px-6 py-4 rounded-xl border border-accent/20">
                        <span className="text-accent font-semibold text-lg">AI Focused</span>
                      </div>
                    </div>
                  </div>

                  {/* Right 3D Scene - Optimized and Uncrpped */}
                  <div className="relative h-[70vh] w-full rounded-2xl overflow-visible">
                    <SplineScene 
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full scale-125 origin-center"
                    />
                  </div>
                </div>
              </CursorSpotlight>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <CareerSection id="experience">
          <div className="backdrop-blur-xl bg-card/10 border border-border/20 rounded-3xl p-8 md:p-12 min-h-screen w-full flex flex-col justify-center">
            <div className="flex items-center mb-12">
              <Briefcase className="w-10 h-10 text-primary mr-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Professional Experience</h2>
            </div>
            <Timeline items={experienceData} />
          </div>
        </CareerSection>

        {/* Projects Section */}
        <CareerSection id="projects">
          <div className="backdrop-blur-xl bg-card/10 border border-border/20 rounded-3xl p-8 md:p-12 min-h-screen w-full flex flex-col justify-center">
            <div className="flex items-center mb-12">
              <Code className="w-10 h-10 text-primary mr-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlowCard 
                    glowColor={project.glowColor}
                    customSize
                    className="h-full min-h-[400px] w-full"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-1 space-y-4">
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs border border-primary/20 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-primary hover:bg-primary/90"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </CareerSection>

        {/* Technology Stack Section */}
        <CareerSection id="tech-stack">
          <div className="backdrop-blur-xl bg-card/10 border border-border/20 rounded-3xl p-8 md:p-12 min-h-screen w-full flex flex-col justify-center">
            <div className="flex items-center mb-12 justify-center">
              <Code className="w-10 h-10 text-accent mr-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Technology Stack</h2>
            </div>
            <div className="flex justify-center">
              <OrbitingSkills />
            </div>
          </div>
        </CareerSection>

        {/* Education Section */}
        <CareerSection id="education">
          <div className="backdrop-blur-xl bg-card/10 border border-border/20 rounded-3xl p-8 md:p-12 min-h-screen w-full flex flex-col justify-center">
            <div className="flex items-center mb-12">
              <GraduationCap className="w-10 h-10 text-secondary mr-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Education</h2>
            </div>
            <Timeline items={educationData} />
          </div>
        </CareerSection>

        {/* Contact Footer */}
        <CareerSection id="contact">
          <div className="backdrop-blur-xl bg-card/10 border border-border/20 rounded-3xl p-12 min-h-screen w-full flex flex-col justify-center">
            <div className="text-center space-y-12">
              <div className="space-y-8">
                <GooeyText
                  texts={["Liked my work", "and overall", "experience?"]}
                  morphTime={1.5}
                  cooldownTime={1}
                  className="h-32"
                  textClassName="text-4xl md:text-6xl font-bold"
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                    Ready to collaborate on something amazing? Let's build the future together.
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <AnimatedSocialIcons 
                  icons={socialIcons}
                  iconSize={28}
                />
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                © 2024 Debashish. Crafted with passion and curiosity.
              </motion.p>
            </div>
          </div>
        </CareerSection>
      </motion.div>
    </div>
  );
};

export default Career;