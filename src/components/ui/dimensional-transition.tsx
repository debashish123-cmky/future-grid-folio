import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import * as THREE from 'three';
import { gsap } from 'gsap';

interface DimensionalTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

export const DimensionalTransition = ({ isActive, onComplete }: DimensionalTransitionProps) => {
  const [stage, setStage] = useState<'idle' | 'opening' | 'traveling' | 'closing'>('idle');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    renderer: THREE.WebGLRenderer | null;
    stars: THREE.Points[];
    animationId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    stars: [],
    animationId: null
  });

  useEffect(() => {
    if (isActive) {
      setStage('opening');
      initThreeScene();
      
      const timer1 = setTimeout(() => setStage('traveling'), 800);
      const timer2 = setTimeout(() => setStage('closing'), 2200);
      const timer3 = setTimeout(() => {
        setStage('idle');
        cleanupThreeScene();
        onComplete();
      }, 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        cleanupThreeScene();
      };
    }
  }, [isActive, onComplete]);

  const initThreeScene = () => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0005);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 100;
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create cosmic star field
    const starCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const radius = 200 + Math.random() * 800;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = new THREE.Color();
      const colorChoice = Math.random();
      if (colorChoice < 0.7) {
        color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
      } else if (colorChoice < 0.9) {
        color.setHSL(0.08, 0.5, 0.8);
      } else {
        color.setHSL(0.6, 0.5, 0.8);
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          float angle = time * 0.1;
          mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
          pos.xy = rot * pos.xy;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
          gl_FragColor = vec4(vColor, opacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    sceneRef.current = { scene, camera, renderer, stars: [stars], animationId: null };
    
    // Animate camera movement
    gsap.to(camera.position, {
      z: -500,
      duration: 3,
      ease: "power2.inOut"
    });

    animate();
  };

  const animate = () => {
    const { scene, camera, renderer, stars } = sceneRef.current;
    if (!scene || !camera || !renderer) return;

    sceneRef.current.animationId = requestAnimationFrame(animate);
    
    const time = Date.now() * 0.001;

    stars.forEach(starField => {
      if (starField.material.uniforms) {
        starField.material.uniforms.time.value = time;
      }
    });

    renderer.render(scene, camera);
  };

  const cleanupThreeScene = () => {
    const { scene, renderer, stars, animationId } = sceneRef.current;
    
    if (animationId) {
      cancelAnimationFrame(animationId);
    }

    stars.forEach(starField => {
      starField.geometry.dispose();
      starField.material.dispose();
    });

    if (renderer) {
      renderer.dispose();
    }

    sceneRef.current = { scene: null, camera: null, renderer: null, stars: [], animationId: null };
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Three.js Cosmic Background */}
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ background: 'linear-gradient(to bottom, #000000, #0a0a1a)' }}
          />
          
          {/* Horizon Title */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white tracking-[0.5em] font-mono"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            >
              HORIZON
            </motion.h1>
          </motion.div>
          
          {/* Status text */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.p
              className="text-white/70 font-mono text-sm tracking-wider uppercase"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {stage === 'opening' && 'Initializing cosmic gateway...'}
              {stage === 'traveling' && 'Traversing the horizon...'}
              {stage === 'closing' && 'Materializing destination...'}
            </motion.p>
            
            {/* Progress indicator */}
            <motion.div
              className="w-48 h-px bg-white/20 mt-4 mx-auto relative overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};