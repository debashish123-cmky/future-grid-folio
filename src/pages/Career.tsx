import { motion } from "framer-motion";
import { ArrowLeft, Mail, Github, Linkedin, Twitter, Briefcase, GraduationCap, Heart, Code, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { Timeline } from "@/components/ui/timeline";
import { CareerSection } from "@/components/career/career-section";
import GradientMenu from "@/components/ui/gradient-menu";

const Career = () => {
  const navigate = useNavigate();

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
      
      {/* Vertical Navigation */}
      <GradientMenu />

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Hero Section with Integrated 3D Scene */}
        <section className="min-h-screen flex items-center px-6 ml-20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="backdrop-blur-xl bg-card/20 border border-border/30 rounded-2xl p-8 shadow-2xl overflow-hidden relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="relative z-10">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-mono tracking-wider">
                    Career Journey
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Exploring the dimensions of technology, creativity, and innovation through immersive digital experiences.
                  </p>
                  <div className="flex gap-3">
                    <div className="backdrop-blur-sm bg-primary/10 px-3 py-2 rounded-lg border border-primary/20">
                      <span className="text-primary font-semibold text-sm">5+ Years</span>
                    </div>
                    <div className="backdrop-blur-sm bg-accent/10 px-3 py-2 rounded-lg border border-accent/20">
                      <span className="text-accent font-semibold text-sm">AI Focused</span>
                    </div>
                  </div>
                </div>

                {/* Right 3D Scene - Integrated */}
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Spotlight
                    className="-top-20 left-0 md:left-30 md:-top-10"
                    fill="hsl(var(--primary))"
                  />
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full scale-150"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <CareerSection id="experience" className="ml-20">
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Experience</h2>
          </div>
          <Timeline items={experienceData} />
        </CareerSection>

        {/* Education Section */}
        <CareerSection id="education" className="ml-20">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-accent mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
          </div>
          <Timeline items={educationData} />
        </CareerSection>

        {/* Passion Section */}
        <CareerSection id="passion" className="ml-20">
          <div className="flex items-center mb-8">
            <Heart className="w-8 h-8 text-secondary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Passion & Interests</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground">Technology Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fascinated by emerging technologies like AI, blockchain, and quantum computing. 
                Always exploring how these can shape the future of human interaction with technology.
              </p>
            </motion.div>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground">Open Source</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contributing to open source projects and building tools that help other developers. 
                Believing in the power of community-driven development and knowledge sharing.
              </p>
            </motion.div>
          </div>
        </CareerSection>

        {/* Projects Section */}
        <CareerSection id="projects" className="ml-20">
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-border/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Dashboard</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive analytics platform using machine learning to provide insights 
                and predictions for business intelligence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm border border-primary/20">React</span>
                <span className="px-2 py-1 bg-accent/20 text-accent rounded text-sm border border-accent/20">Python</span>
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-sm border border-secondary/20">TensorFlow</span>
              </div>
            </motion.div>
            <motion.div 
              className="p-6 bg-background/20 backdrop-blur-sm rounded-lg border border-border/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">3D Web Experience</h3>
              <p className="text-muted-foreground mb-4">
                An immersive web application using Three.js and WebGL to create interactive 
                3D environments for storytelling and data visualization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm border border-primary/20">Three.js</span>
                <span className="px-2 py-1 bg-accent/20 text-accent rounded text-sm border border-accent/20">WebGL</span>
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-sm border border-secondary/20">GSAP</span>
              </div>
            </motion.div>
          </div>
        </CareerSection>

        {/* Contact Footer */}
        <CareerSection id="contact" className="ml-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to collaborate on something amazing? Let's build the future together.
            </p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" size="lg" className="backdrop-blur-sm border-border/30 hover:bg-primary/10">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm border-border/30 hover:bg-primary/10">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm border-border/30 hover:bg-primary/10">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm border-border/30 hover:bg-primary/10">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </Button>
            </motion.div>
            
            <p className="text-muted-foreground">
              © 2024 Debashish. Crafted with passion and curiosity.
            </p>
          </div>
        </CareerSection>
      </motion.div>
    </div>
  );
};

export default Career;