import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mic, ShieldCheck, Sparkles, BookOpen, Brain, Leaf, MessageCircle, Palette, Heart, Star } from 'lucide-react';

export function HomePage2() {
  const [currentLang, setCurrentLang] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const languages = [
    { text: 'Hindi' },
    { text: 'Tamil' },
    { text: 'Bengali' }
  ];

  useEffect(() => {
    const currentText = languages[currentLang].text;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentLang((prev) => (prev + 1) % languages.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentLang]);

  /* Scroll animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e =>
          e.target.classList.toggle('animate-in', e.isIntersecting)
        ),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);



  
  /* 🌐 THREE.JS */
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


      function createTextSprite(text, color) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = 512;
      canvas.height = 512;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "bold 180px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Add glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = 30;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Fill with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, adjustBrightness(color, -30));
      ctx.fillStyle = gradient;
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      // Add subtle stroke
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.strokeText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8,
      });

      const sprite = new THREE.Sprite(material);
      sprite.scale.set(5, 5, 1);

      return sprite;
    }

    function adjustBrightness(hex, percent) {
      const num = parseInt(hex.replace("#",""), 16);
      const amt = Math.round(2.55 * percent);
      const R = (num >> 16) + amt;
      const G = (num >> 8 & 0x00FF) + amt;
      const B = (num & 0x0000FF) + amt;
      return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 +
        (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255))
        .toString(16).slice(1);
    }

   const letters = [
  { text: "अ", color: "#FF6F00" },        // Hindi (deep orange)
  { text: "क", color: "#FF2768" },        // Devanagari (pink-red)
  { text: "தமிழ்", color: "#0D1B7F" },   // Tamil (deep navy)
  { text: "அ", color: "#D84315" },        // Tamil (red-orange)
  { text: "বাংলা", color: "#FF0000" },    // Bengali (red)
  { text: "हिंदी", color: "#FF0000" },    // Hindi (red)

  // ➕ NEW LANGUAGES
  { text: "తెలుగు", color: "#2E7D32" },   // Telugu (rich green)
  { text: "ಕನ್ನಡ", color: "#6A1B9A" },   // Kannada (royal purple)
];


    const sprites = letters.map((item) => {
      const sprite = createTextSprite(item.text, item.color);

      sprite.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 12,
        -2
      );

      scene.add(sprite);
      return sprite;
    });

    // Add geometric shapes
    const geometry1 = new THREE.IcosahedronGeometry(1, 0);
    const geometry2 = new THREE.TorusGeometry(0.7, 0.3, 16, 100);
    const geometry3 = new THREE.OctahedronGeometry(0.8);
    
    const material1 = new THREE.MeshPhongMaterial({
      color: 0xff9933,
      wireframe: true,
    });
    const material2 = new THREE.MeshPhongMaterial({
      color: 0x303f9f,
      wireframe: true,
    });
    const material3 = new THREE.MeshPhongMaterial({
      color: 0xffd700,
      wireframe: true,
    });
    
    const mesh1 = new THREE.Mesh(geometry1, material1);
    const mesh2 = new THREE.Mesh(geometry2, material2);
    const mesh3 = new THREE.Mesh(geometry3, material3);
    
    mesh1.position.set(-3, 2, 0);
    mesh2.position.set(3, -1, 0);
    mesh3.position.set(0, -2, -1);
    
    scene.add(mesh1, mesh2, mesh3);

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    
    const light2 = new THREE.AmbientLight(0x404040, 2);
    scene.add(light2);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Animate floating letters
      sprites.forEach((sprite, i) => {
        sprite.position.y += 0.002 + i * 0.0005;

        if (sprite.position.y > 5) {
          sprite.position.y = -5;
          sprite.position.x = (Math.random() - 0.5) * 16;
        }
      });

      // Animate geometric shapes
      mesh1.rotation.x += 0.005;
      mesh1.rotation.y += 0.01;
      mesh2.rotation.x += 0.003;
      mesh2.rotation.y += 0.008;
      mesh3.rotation.x += 0.007;
      mesh3.rotation.y += 0.005;

      // Scroll-based positioning for geometric shapes
      const scrollFactor = scrollY * 0.001;
      mesh1.position.y = 2 - scrollFactor;
      mesh2.position.y = -1 + scrollFactor * 0.5;
      mesh3.position.y = -2 + scrollFactor * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-animate-delay-1 { transition-delay: 0.1s; }
        .scroll-animate-delay-2 { transition-delay: 0.2s; }
        .scroll-animate-delay-3 { transition-delay: 0.3s; }
        .scroll-animate-delay-4 { transition-delay: 0.4s; }
        
        .marigold-orange { color: #FF9933; }
        .royal-indigo { color: #303F9F; }
        .turmeric-yellow { color: #FFD700; }
        .bg-marigold { background-color: #FF9933; }
        .bg-indigo { background-color: #303F9F; }
        .bg-turmeric { background-color: #FFD700; }
        .border-marigold { border-color: #FF9933; }
        .border-indigo { border-color: #303F9F; }
        .border-turmeric { border-color: #FFD700; }
      `}</style>

      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30" />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="transform transition-transform duration-700 hover:scale-105">
            <h1 className="text-3xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
              A Smart AI Toy That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#FFD700] to-[#FF9933] animate-pulse">
                Talks {displayText}
              </span>
              ,{" "}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#303F9F] via-[#5C6BC0] to-[#303F9F]">
                Learns
              </span>{" "}
              & Grows With Your Child
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto transform transition-all duration-500 hover:text-gray-900">
            A playful AI companion for learning, fun, and safety — fully controlled by parents.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 rounded-full text-lg font-bold text-white overflow-hidden transform transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl bg-turmeric">
              <span className="relative z-10">Order Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-8 py-4 border-2 rounded-full text-lg font-bold transform transition-all duration-300 hover:scale-110 shadow-lg border-marigold marigold-orange hover:bg-orange-50">
              See Demo
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center border-marigold">
            <div className="w-1 h-3 rounded-full mt-2 animate-pulse bg-marigold"></div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="relative py-20 px-6" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group scroll-animate">
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-[#FF9933] to-[#FFD700]"></div>
              <div className="relative backdrop-blur-xl p-12 rounded-3xl border-2 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 bg-white border-indigo">
                <div className="w-full h-96 rounded-2xl flex items-center justify-center text-9xl transform transition-transform duration-500 group-hover:scale-110 bg-gradient-to-br from-orange-50 to-yellow-50">
                  🤖
                </div>
              </div>
            </div>

            <div className="space-y-8 scroll-animate scroll-animate-delay-2">
              <div className="transform transition-all duration-500 hover:translate-x-4">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#303F9F]">
                  RoboBuddy
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  An AI-powered toy that talks, tells stories, answers questions, and adapts to your child's learning journey.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Feature3D icon={<Mic />} text="Responds like a real friend" />
                <Feature3D icon={<ShieldCheck />} text="Monitor and manage safely" />
                <Feature3D icon={<Sparkles />} text="Learns and adapts to your child" />
                <Feature3D icon={<BookOpen />} text="Stories, quizzes, and fun learning" />
              </div>

              <button className="group relative px-10 py-5 rounded-full text-xl font-bold text-white overflow-hidden transform transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl bg-turmeric">
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#303F9F] to-[#FFD700] scroll-animate">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="scroll-animate scroll-animate-delay-1">
              <FeatureCard icon={<Mic size={40} />} title="Talks Naturally" desc="Understands and responds like a real friend." />
            </div>
            <div className="scroll-animate scroll-animate-delay-2">
              <FeatureCard icon={<ShieldCheck size={40} />} title="Parent Control" desc="Monitor and manage safely." />
            </div>
            <div className="scroll-animate scroll-animate-delay-3">
              <FeatureCard icon={<Brain size={40} />} title="Smart AI" desc="Learns and adapts to your child." />
            </div>
            <div className="scroll-animate scroll-animate-delay-4">
              <FeatureCard icon={<BookOpen size={40} />} title="Educational" desc="Stories, quizzes, and fun learning." />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-20 px-6" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#303F9F] via-[#FF9933] to-[#FFD700] scroll-animate">
            Benefits for Your Child
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="scroll-animate scroll-animate-delay-1">
              <BenefitCard icon={<Sparkles size={40} />} title="Learning Through Play" desc="Encourages curiosity and learning naturally." />
            </div>
            <div className="scroll-animate scroll-animate-delay-2">
              <BenefitCard icon={<MessageCircle size={40} />} title="Better Communication" desc="Daily conversations improve speaking skills." />
            </div>
            <div className="scroll-animate scroll-animate-delay-3">
              <BenefitCard icon={<Palette size={40} />} title="Boosts Creativity" desc="Imagination-based interactions." />
            </div>
            <div className="scroll-animate scroll-animate-delay-4">
              <BenefitCard icon={<Heart size={40} />} title="Emotional Companion" desc="A friendly AI buddy kids connect with." />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#303F9F] to-[#FFD700]">
              Loved by Parents
            </h2>
            <p className="text-xl text-gray-700">Trusted by parents and loved by kids — real experiences from our early users.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-animate scroll-animate-delay-1">
              <TestimonialCard
                name="Priya Sharma"
                role="Mother of 2"
                rating={5}
                review="My kids absolutely love RoboBuddy! It's educational and entertaining at the same time."
              />
            </div>
            <div className="scroll-animate scroll-animate-delay-2">
              <TestimonialCard
                name="Rahul Mehta"
                role="Father of 1"
                rating={5}
                review="The parent controls give me peace of mind. Great product for modern families."
              />
            </div>
            <div className="scroll-animate scroll-animate-delay-3">
              <TestimonialCard
                name="Anita Desai"
                role="Teacher & Mom"
                rating={5}
                review="I've seen remarkable improvement in my daughter's communication skills since we got this."
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="relative py-16 px-6" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#FFD700]">
                Nomo Toyz
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Making learning fun, emotional, and screen-free for kids.
              </p>
              <p className="text-gray-800 font-semibold">hello@nomotoyz.com</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 royal-indigo">Quick Links</h4>
              <ul className="space-y-3">
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Home</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Features</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Benefits</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">About</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 royal-indigo">Support</h4>
              <ul className="space-y-3">
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">FAQ</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Parent Guide</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Privacy Policy</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Terms of Service</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 royal-indigo">Connect</h4>
              <ul className="space-y-3">
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Instagram</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Facebook</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">Twitter</li>
                <li className="text-gray-700 hover:text-[#FF9933] cursor-pointer transform transition-all duration-300 hover:translate-x-2">YouTube</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-[#FF9933] text-center">
            <p className="text-gray-600">
              © 2025 Nomo Toyz. All rights reserved. Made with <Heart size={16} className="inline text-red-500 fill-red-500" /> for kids everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature3D({ icon, text }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r from-[#FF9933] to-[#FFD700]"></div>
      <div className="relative backdrop-blur-sm p-4 rounded-xl border-2 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 bg-white border-indigo">
        <div className="text-3xl mb-2 marigold-orange">{icon}</div>
        <p className="text-sm font-semibold text-gray-800">{text}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group relative h-[218px]">
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-[#FF9933] to-[#303F9F]"></div>
      <div className="relative h-full backdrop-blur-xl p-8 rounded-2xl border-2 shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 bg-white border-marigold">
        <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 marigold-orange">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 royal-indigo">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="group relative h-[250px]">
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-[#303F9F] to-[#FFD700]"></div>
      <div className="relative h-full backdrop-blur-xl p-8 rounded-2xl border-2 shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 bg-white border-indigo">
        <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 royal-indigo">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 marigold-orange">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, rating, review }) {
  return (
    <div className="group relative h-[252px]">
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-[#FF9933] to-[#FFD700]"></div>
      <div className="relative h-full backdrop-blur-xl p-8 rounded-2xl border-2 shadow-xl transform transition-all duration-500 hover:scale-105 bg-white border-marigold">
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className="fill-[#FFD700] text-[#FFD700]" />
          ))}
        </div>

        <p className="text-gray-700 mb-6 italic leading-relaxed">"{review}"</p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gradient-to-r from-[#FF9933] to-[#FFD700]">
            👤
          </div>
          <div>
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-sm royal-indigo">{role}</p>
          </div>
        </div>
      </div>

    </div>
  );
}