import { motion } from "framer-motion";
import { Sparkles, Brain, ShieldCheck, Rocket, Smile, Puzzle, Star } from "lucide-react";
import HeroSection from "../components/HomeSection";
import image from "../images/image.png"

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <div className="w-full  font-sans text-gray-800">


      <HeroSection />

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-16">
          More Stories & Resources
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, rotate: 1 }}
              className="bg-white rounded-3xl p-6 shadow-[0_25px_50px_rgba(124,58,237,0.3)]"
            >
              <div className="h-36 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl mb-5">
                <img className="h-full w-full rounded-md" src={image} alt="" />
              </div>
              <p className="font-bold text-purple-700">AI Buddy Toy</p>
              <p className="text-sm text-gray-500">Smarter every playtime </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-16">
          How Nomotoyz Works
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <PlayCard icon={<Puzzle />} title="AI Puzzle Quests" />
          <PlayCard icon={<Brain />} title="Smart STEM Toys" />
          <PlayCard icon={<Sparkles />} title="Creative AI Kits" />
          <PlayCard icon={<Smile />} title="Adaptive Games" />
        </div>
      </motion.section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-300 opacity-70" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/40 rounded-full blur-3xl animate-pulse" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto px-8 py-16 bg-white/70 backdrop-blur-xl rounded-[3rem] shadow-[0_40px_100px_rgba(124,58,237,0.35)] text-center"
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block mb-6 px-6 py-2 rounded-full bg-purple-500 text-white font-bold"
          >
            Limited Time Magic Deal
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
            Spark Creativity at Home
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto mb-10">
            Bring home an AI-powered toy your child will love — playful, safe, and smarter every day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white px-10 py-4 rounded-full font-bold shadow-lg"
            >
              🛒 Grab 20% Off Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-700 text-purple-700 px-10 py-4 rounded-full font-bold"
            >
              👀 See How It Works
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-purple-800">
            <span>🚚 Free Shipping</span>
            <span>💰 30‑Day Money Back</span>
            <span>🛡️ 1‑Year Warranty</span>
          </div>
        </motion.div>
      </section>



      <footer className="bg-purple-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Rocket className="mx-auto mb-4" />
          <p className="font-bold text-lg">Building joyful futures — one smart toy at a time.</p>
        </div>
      </footer>
    </div>
  );
}

function PlayCard({ icon, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: -2 }}
      className="bg-white rounded-3xl p-8 text-center shadow-[0_25px_50px_rgba(124,58,237,0.3)] cursor-pointer"
    >
      <div className="flex justify-center mb-6 text-purple-600">{icon}</div>
      <p className="font-bold text-purple-700">{title}</p>
    </motion.div>
  );
}

