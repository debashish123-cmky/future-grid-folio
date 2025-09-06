import { motion } from "framer-motion";
import { ArrowLeft, Mail, Github, Linkedin, Twitter, Briefcase, GraduationCap, Heart, Code, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

const Career = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Falling Pattern Background */}
      <FallingPattern 
        className="fixed inset-0 z-0" 
        color="hsl(var(--primary))"
        backgroundColor="hsl(var(--background))"
        blurIntensity="0.5em"
      />
      
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Navigation */}
        <div className="container mx-auto px-6 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="group backdrop-blur-sm bg-card/80 border border-border/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </div>

        {/* Hero Section with 3D Scene */}
        <section className="min-h-screen flex items-center px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="backdrop-blur-sm bg-card/30 p-8 rounded-xl border border-border/20"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground font-mono tracking-wider">
                  Career Journey
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Exploring the dimensions of technology, creativity, and innovation through immersive digital experiences.
                </p>
                <div className="flex gap-4">
                  <div className="backdrop-blur-sm bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                    <span className="text-primary font-semibold">5+ Years</span>
                  </div>
                  <div className="backdrop-blur-sm bg-secondary/10 px-4 py-2 rounded-lg border border-secondary/20">
                    <span className="text-secondary font-semibold">AI Focused</span>
                  </div>
                </div>
              </motion.div>

              {/* Right 3D Scene */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative h-[500px] backdrop-blur-sm bg-card/20 rounded-xl border border-border/20 overflow-hidden"
              >
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="hsl(var(--primary))"
                />
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-card/10 p-8 rounded-xl border border-border/20 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Experience</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Senior Developer</h3>
                  <p className="text-muted-foreground mb-2">Tech Company • 2022 - Present</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading frontend development initiatives, mentoring junior developers, and architecting 
                    scalable solutions using modern technologies like React, TypeScript, and cloud platforms.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Full Stack Developer</h3>
                  <p className="text-muted-foreground mb-2">Digital Agency • 2020 - 2022</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed end-to-end web applications, collaborated with design teams, and implemented 
                    responsive user interfaces that enhanced user experience across multiple platforms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-card/10 p-8 rounded-xl border border-border/20 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-secondary mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Computer Science</h3>
                  <p className="text-muted-foreground mb-2">University Name • 2016 - 2020</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Bachelor's degree focusing on software engineering, algorithms, and data structures. 
                    Graduated with honors and specialized in web technologies and user interface design.
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground mb-2">Online Platforms • Ongoing</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Constantly updating skills through courses in AI, machine learning, and emerging 
                    web technologies. Certified in various cloud platforms and modern development frameworks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Passion Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-card/10 p-8 rounded-xl border border-border/20 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-accent mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Passion & Interests</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Technology Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fascinated by emerging technologies like AI, blockchain, and quantum computing. 
                    Always exploring how these can shape the future of human interaction with technology.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Open Source</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contributing to open source projects and building tools that help other developers. 
                    Believing in the power of community-driven development and knowledge sharing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-card/10 p-8 rounded-xl border border-border/20 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-background/50 rounded-lg border border-border/30">
                  <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive analytics platform using machine learning to provide insights 
                    and predictions for business intelligence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">React</span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-sm">Python</span>
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded text-sm">TensorFlow</span>
                  </div>
                </div>
                <div className="p-6 bg-background/50 rounded-lg border border-border/30">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3D Web Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    An immersive web application using Three.js and WebGL to create interactive 
                    3D environments for storytelling and data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Three.js</span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-sm">WebGL</span>
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded text-sm">GSAP</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Footer */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center backdrop-blur-lg bg-card/10 p-8 rounded-xl border border-border/20 shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <User className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Let's Connect</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to collaborate on something amazing? Let's build the future together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button variant="outline" size="lg" className="backdrop-blur-sm">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-sm">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-sm">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-sm">
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </Button>
              </div>
              
              <p className="text-muted-foreground">
                © 2024 Career Journey. Crafted with passion and curiosity.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Career;