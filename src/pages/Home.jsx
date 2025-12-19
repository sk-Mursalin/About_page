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

import { motion } from "framer-motion";
import Button from "../components/Button";
import { Mic, ShieldCheck, Sparkles, BookOpen, Brain, Leaf, MessageCircle, Palette, Heart } from "lucide-react";
import toyImage from "../images/teddy.png"
export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-pink-50 to-yellow-50">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              A Smart AI Toy That{" "}
              <span className="text-indigo-600">Talks</span>,{" "}
              <span className="text-pink-600">Learns</span> & Grows With Your Child
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              A playful AI companion for learning, fun, and safety — fully
              controlled by parents.
            </p>

            <div className="mt-8 flex gap-4">
              <Button>Order Now</Button>
              <Button variant="outline">See Demo</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-indigo-300 to-pink-300 shadow-2xl flex items-center justify-center text-5xl">
              🤖
            </div>
          </motion.div>

        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-24 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-96 rounded-3xl bg-white shadow-xl flex items-center justify-center text-6xl">
              <img className="w-full h-full" src={toyImage} alt="" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold">RoboBuddy</h2>
            <p className="mt-4 text-gray-600">
              An AI-powered toy that talks, tells stories, answers questions, and
              adapts to your child’s learning journey.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-gray-700 hover:translate-x-1 transition">
                <Mic className="w-5 h-5 text-indigo-600" />
                <span>Voice Interaction</span>
              </li>

              <li className="flex items-center gap-3 text-gray-700 hover:translate-x-1 transition">
                <Brain className="w-5 h-5 text-pink-600" />
                <span>Adaptive Learning</span>
              </li>

              <li className="flex items-center gap-3 text-gray-700 hover:translate-x-1 transition">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span>Parent Controlled</span>
              </li>

              <li className="flex items-center gap-3 text-gray-700 hover:translate-x-1 transition">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <span>Safe for Kids</span>
              </li>
            </ul>


            <Button className="mt-8">Order Now</Button>
          </motion.div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <Feature icon={<Mic />} title="Talks Naturally" desc="Understands and responds like a real friend." />
          <Feature icon={<ShieldCheck />} title="Parent Control" desc="Monitor and manage safely." />
          <Feature icon={<Sparkles />} title="Smart AI" desc="Learns and adapts to your child." />
          <Feature icon={<BookOpen />} title="Educational" desc="Stories, quizzes, and fun learning." />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-14">
          Benefits for Your Child
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Benefit
            icon={<BookOpen />}
            title="Learning Through Play"
            desc="Encourages curiosity and learning naturally."
          />
          <Benefit
            icon={<MessageCircle />}
            title="Better Communication"
            desc="Daily conversations improve speaking skills."
          />
          <Benefit
            icon={<Palette />}
            title="Boosts Creativity"
            desc="Imagination-based interactions."
          />
          <Benefit
            icon={<Heart />}
            title="Emotional Companion"
            desc="A friendly AI buddy kids connect with."
          />
        </div>
      </section>


    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-6 shadow-lg text-center"
    >
      <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

function Benefit({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition"
    >
      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </motion.div>
  );
}

