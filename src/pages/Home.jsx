// import { motion } from "framer-motion";
// import { Sparkles, Brain,  Rocket, Smile, Puzzle } from "lucide-react";
// import HeroSection from "../components/HomeSection";
// import image from "../images/image.png"

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 }
// };

// export default function HomePage() {
//   return (
//     <div className="w-full  font-sans text-gray-800">


//       <HeroSection />

//       <motion.section
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-7xl mx-auto px-6 py-28"
//       >
//         <h2 className="text-4xl font-bold text-purple-700 mb-16">
//           More Stories & Resources
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//           {Array.from({ length: 8 }).map((_, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -12, rotate: 1 }}
//               className="bg-white rounded-3xl p-6 shadow-[0_25px_50px_rgba(124,58,237,0.3)]"
//             >
//               <div className="h-36 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl mb-5">
//                 <img className="h-full w-full rounded-md" src={image} alt="" />
//               </div>
//               <p className="font-bold text-purple-700">AI Buddy Toy</p>
//               <p className="text-sm text-gray-500">Smarter every playtime </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       <motion.section
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-7xl mx-auto px-6 py-24"
//       >
//         <h2 className="text-4xl font-bold text-center text-purple-700 mb-16">
//           How Nomotoyz Works
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//           <PlayCard icon={<Puzzle />} title="AI Puzzle Quests" />
//           <PlayCard icon={<Brain />} title="Smart STEM Toys" />
//           <PlayCard icon={<Sparkles />} title="Creative AI Kits" />
//           <PlayCard icon={<Smile />} title="Adaptive Games" />
//         </div>
//       </motion.section>

//       <section className="relative py-24 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-300 opacity-70" />
//         <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/40 rounded-full blur-3xl animate-pulse" />

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="relative max-w-5xl mx-auto px-8 py-16 bg-white/70 backdrop-blur-xl rounded-[3rem] shadow-[0_40px_100px_rgba(124,58,237,0.35)] text-center"
//         >
//           <motion.span
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="inline-block mb-6 px-6 py-2 rounded-full bg-purple-500 text-white font-bold"
//           >
//             Limited Time Magic Deal
//           </motion.span>

//           <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
//             Spark Creativity at Home
//           </h2>
//           <p className="text-gray-700 text-lg max-w-xl mx-auto mb-10">
//             Bring home an AI-powered toy your child will love — playful, safe, and smarter every day.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
//             <motion.button
//               whileHover={{ scale: 1.1, rotate: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-purple-500 text-white px-10 py-4 rounded-full font-bold shadow-lg"
//             >
//               🛒 Grab 20% Off Now
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="border-2 border-purple-700 text-purple-700 px-10 py-4 rounded-full font-bold"
//             >
//               👀 See How It Works
//             </motion.button>
//           </div>

//           <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-purple-800">
//             <span>🚚 Free Shipping</span>
//             <span>💰 30‑Day Money Back</span>
//             <span>🛡️ 1‑Year Warranty</span>
//           </div>
//         </motion.div>
//       </section>



//       <footer className="bg-purple-800 text-white py-14">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <Rocket className="mx-auto mb-4" />
//           <p className="font-bold text-lg">Building joyful futures — one smart toy at a time.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function PlayCard({ icon, title }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.12, rotate: -2 }}
//       className="bg-white rounded-3xl p-8 text-center shadow-[0_25px_50px_rgba(124,58,237,0.3)] cursor-pointer"
//     >
//       <div className="flex justify-center mb-6 text-purple-600">{icon}</div>
//       <p className="font-bold text-purple-700">{title}</p>
//     </motion.div>
//   );
// }

// import { motion } from "framer-motion";
// import Button from "../components/Button";
// import { Mic, ShieldCheck, Sparkles, BookOpen, Brain, Leaf, MessageCircle, Palette, Heart } from "lucide-react";
// import toyImage from "../images/teddy.png"
// import playlearn from "../images/playlearn.png"
// export default function HomePage() {

//   return (
//     <div className="bg-gradient-to-b from-indigo-50 via-violet-50 to-white">

//       {/* HERO SECTION */}
//       {/* <section className="min-h-screen flex items-center px-6 md:px-16">
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//               A Smart AI Toy That{" "}
//               <span className="text-indigo-600">Talks</span>,{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Learns</span> & Grows With Your Child
//             </h1>

//             <p className="mt-6 text-lg text-gray-600">
//               A playful AI companion for learning, fun, and safety — fully
//               controlled by parents.
//             </p>

//             <div className="mt-8 flex gap-4">
//               <Button>Order Now</Button>
//               <Button variant="outline">See Demo</Button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ scale: 0.85, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="flex justify-center"
//           >
//             <OfferProductCard />
//           </motion.div>


//         </div>
//       </section> */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Video */}
//         <div className="absolute inset-0 w-full h-full">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//           >
//             <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-violet-900/60 to-purple-900/70" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 text-center px-6 md:px-16 max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h1
//               className="text-5xl md:text-7xl font-bold leading-tight text-white"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               A Smart AI Toy That{" "}
//               <motion.span
//                 className="text-yellow-300"
//                 animate={{
//                   textShadow: [
//                     "0 0 20px rgba(253, 224, 71, 0.5)",
//                     "0 0 40px rgba(253, 224, 71, 0.8)",
//                     "0 0 20px rgba(253, 224, 71, 0.5)"
//                   ]
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               >
//                 Talks
//               </motion.span>,{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">Learns</span> & Grows With Your Child
//             </motion.h1>

//             <motion.p
//               className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               A playful AI companion for learning, fun, and safety — fully
//               controlled by parents.
//             </motion.p>

//             <motion.div
//               className="mt-10 flex gap-4 justify-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <Button>Order Now</Button>
//               <Button variant="outline">See Demo</Button>
//             </motion.div>
//           </motion.div>

//           {/* Floating 3D Elements */}
//           <div className="absolute inset-0 pointer-events-none">
//             <motion.div
//               className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"
//               animate={{
//                 y: [0, -30, 0],
//                 x: [0, 20, 0],
//                 scale: [1, 1.2, 1]
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//             />
//             <motion.div
//               className="absolute top-40 right-20 w-32 h-32 bg-pink-300/20 rounded-full blur-xl"
//               animate={{
//                 y: [0, 40, 0],
//                 x: [0, -20, 0],
//                 scale: [1, 1.3, 1]
//               }}
//               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//             />
//             <motion.div
//               className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-xl"
//               animate={{
//                 y: [0, -20, 0],
//                 x: [0, 30, 0],
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ duration: 6, repeat: Infinity, delay: 2 }}
//             />
//             <motion.div
//               className="absolute bottom-20 right-1/3 w-16 h-16 bg-indigo-300/20 rounded-full blur-xl"
//               animate={{
//                 y: [0, 25, 0],
//                 x: [0, -15, 0],
//                 scale: [1, 1.4, 1]
//               }}
//               transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
//             />
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           >
//             <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
//               <motion.div
//                 className="w-1.5 h-1.5 bg-white rounded-full"
//                 animate={{ y: [0, 12, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>
//       {/* PRODUCT SECTION */}
//       <section className="py-24 px-6 md:px-16">
//         <div className="grid md:grid-cols-2 gap-12 items-center">

//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="h-96 rounded-3xl bg-white shadow-xl flex items-center justify-center text-6xl">
//               <img className="w-full h-full" src={toyImage} alt="" />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-4xl font-bold">RoboBuddy</h2>
//             <p className="mt-4 text-gray-600">
//               An AI-powered toy that talks, tells stories, answers questions, and
//               adapts to your child’s learning journey.
//             </p>

//             <ul className="mt-6 space-y-4">
//               <li className="flex items-center gap-3 text-gray-700 hover:translate-x-1 transition">
//                 <Mic className="w-5 h-5 text-indigo-600" />
//                 <span>Voice Interaction</span>
//               </li>

//               <li className="flex items-center gap-3 text-gray-700 hover:translate-x-1 transition">
//                 <Brain className="w-5 h-5 text-pink-600" />
//                 <span>Adaptive Learning</span>
//               </li>

//               <li className="flex items-center gap-3 text-gray-700 hover:translate-x-1 transition">
//                 <ShieldCheck className="w-5 h-5 text-green-600" />
//                 <span>Parent Controlled</span>
//               </li>

//               <li className="flex items-center gap-3 text-gray-700 hover:translate-x-1 transition">
//                 <Leaf className="w-5 h-5 text-emerald-600" />
//                 <span>Safe for Kids</span>
//               </li>
//             </ul>


//             <Button className="mt-8">Order Now</Button>
//           </motion.div>

//         </div>
//       </section>

//       {/* FEATURES SECTION */}
//       <section className="py-24 px-6 md:px-16 bg-white">
//         <h2 className="text-4xl font-bold text-center mb-14">
//           Powerful Features
//         </h2>

//         <div className="grid md:grid-cols-4 gap-8">
//           <Feature icon={<Mic />} title="Talks Naturally" desc="Understands and responds like a real friend." />
//           <Feature icon={<ShieldCheck />} title="Parent Control" desc="Monitor and manage safely." />
//           <Feature icon={<Sparkles />} title="Smart AI" desc="Learns and adapts to your child." />
//           <Feature icon={<BookOpen />} title="Educational" desc="Stories, quizzes, and fun learning." />
//         </div>
//       </section>

//       {/* BENEFITS SECTION */}
//       <section className="py-24 px-6 md:px-16">
//         <h2 className="text-4xl font-bold text-center mb-14">
//           Benefits for Your Child
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//           <Benefit
//             icon={<BookOpen />}
//             title="Learning Through Play"
//             desc="Encourages curiosity and learning naturally."
//           />
//           <Benefit
//             icon={<MessageCircle />}
//             title="Better Communication"
//             desc="Daily conversations improve speaking skills."
//           />
//           <Benefit
//             icon={<Palette />}
//             title="Boosts Creativity"
//             desc="Imagination-based interactions."
//           />
//           <Benefit
//             icon={<Heart />}
//             title="Emotional Companion"
//             desc="A friendly AI buddy kids connect with."
//           />
//         </div>
//       </section>
//       {/* TESTIMONIALS SECTION */}
//       <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-indigo-50 via-pink-50 to-white">
//         <div>
//           <h2 className="text-4xl font-bold text-center mb-6">
//             Loved by Parents
//           </h2>

//         </div>

//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
//           Trusted by parents and loved by kids — real experiences from our early users.
//         </p>

//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <TestimonialCard
//             name="Ananya Sharma"
//             role="Mother of 6-year-old"
//             image="https://i.pravatar.cc/150?img=32"
//             rating={5}
//             review="My son talks to RoboBuddy every day. His confidence and speaking skills have improved so much!"
//           />

//           <TestimonialCard
//             name="Rahul Verma"
//             role="Father of 5-year-old"
//             image="https://i.pravatar.cc/150?img=12"
//             rating={5}
//             review="The parent controls give us peace of mind. Educational, safe, and incredibly engaging."
//           />

//           <TestimonialCard
//             name="Sneha Gupta"
//             role="Parent"
//             image="https://i.pravatar.cc/150?img=47"
//             rating={4}
//             review="Stories, quizzes, and friendly conversations — RoboBuddy feels like a real companion."
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// function Feature({ icon, title, desc }) {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       className="bg-white rounded-3xl p-6 shadow-lg text-center"
//     >
//       <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
//         {icon}
//       </div>
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <p className="mt-2 text-sm text-gray-600">{desc}</p>
//     </motion.div>
//   );
// }

// function Benefit({ icon, title, desc }) {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition"
//     >
//       <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
//         {icon}
//       </div>

//       <h3 className="mt-4 text-xl font-semibold">{title}</h3>
//       <p className="mt-2 text-gray-600">{desc}</p>
//     </motion.div>
//   );
// }



// import { Star } from "lucide-react";

// function TestimonialCard({ name, role, image, rating, review }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ y: -8 }}
//       className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white"
//     >
//       {/* Customer Image */}
//       <div className="flex justify-center -mt-14">
//         <img
//           src={image}
//           alt={name}
//           className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
//         />
//       </div>

//       {/* Stars */}
//       <div className="flex justify-center mt-4 mb-3">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//               }`}
//           />
//         ))}
//       </div>

//       {/* Review */}
//       <p className="text-gray-700 text-center italic">
//         “{review}”
//       </p>

//       {/* Name */}
//       <div className="mt-6 text-center">
//         <h4 className="font-semibold">{name}</h4>
//         <p className="text-sm text-gray-500">{role}</p>
//       </div>
//     </motion.div>
//   );
// }

// function OfferProductCard() {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       className="relative w-80 bg-white rounded-3xl shadow-2xl p-6"
//     >
//       {/* Offer Badge */}
//       <div className="absolute -top-4 -right-4 bg-pink-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
//         30% OFF
//       </div>

//       {/* Product Image */}
//       <div className="h-56 bg-gradient-to-br from-indigo-100 to-pink-100 rounded-2xl flex items-center justify-center">
//         <img
//           src={playlearn}
//           alt="RoboBuddy"
//           className="w-44"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="mt-5 text-center">
//         <h3 className="text-xl font-semibold">RoboBuddy AI Toy</h3>

//         <div className="mt-2 flex justify-center items-center gap-3">
//           <span className="text-gray-400 line-through text-lg">₹4,999</span>
//           <span className="text-2xl font-bold text-indigo-600">₹3,499</span>
//         </div>

//         <p className="mt-2 text-sm text-gray-500">
//           Limited-time launch offer
//         </p>

//         <Button className="mt-4 w-full">
//           Grab Offer
//         </Button>
//       </div>
//     </motion.div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  Mic,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Brain,
  Leaf,
  MessageCircle,
  Palette,
  Heart,
  Star,
} from "lucide-react";

export  function HomePage() {
  const [currentLang, setCurrentLang] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { text: "Hindi", lang: "Hindi" },
    { text: "Tamil", lang: "Tamil" },
    { text: "Bengali", lang: "Bengali" },
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

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

      mesh1.rotation.x += 0.005;
      mesh1.rotation.y += 0.01;

      mesh2.rotation.x += 0.003;
      mesh2.rotation.y += 0.008;

      mesh3.rotation.x += 0.007;
      mesh3.rotation.y += 0.005;

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
  }, [scrollY]);

  return (
    <div className="relative bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 text-gray-900 overflow-x-hidden">
      {/* FULL JSX REMAINS EXACTLY THE SAME */}
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

/* COMPONENTS BELOW ARE UNCHANGED */

function Feature3D({ icon, text }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r from-[#FF9933] to-[#FFD700]" />
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
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-[#FF9933] to-[#303F9F]" />
      <div className="relative h-full backdrop-blur-xl p-8 rounded-2xl border-2 shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 bg-white border-marigold">
        <div className="mb-4 marigold-orange">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 royal-indigo">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="group relative h-[250px]">
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-[#303F9F] to-[#FFD700]" />
      <div className="relative h-full backdrop-blur-xl p-8 rounded-2xl border-2 shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 bg-white border-indigo">
        <div className="mb-4 royal-indigo">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 marigold-orange">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, rating, review }) {
  return (
    <div className="group relative h-[252px]">
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-[#FF9933] to-[#FFD700]" />
      <div className="relative h-full backdrop-blur-xl p-8 rounded-2xl border-2 shadow-xl transform transition-all duration-500 hover:scale-105 bg-white border-marigold">
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className="fill-[#FFD700] text-[#FFD700]" />
          ))}
        </div>

        <p className="text-gray-700 mb-6 italic leading-relaxed">
          "{review}"
        </p>

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
