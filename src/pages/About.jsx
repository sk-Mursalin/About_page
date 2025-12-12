import AboutToy from "../components/AboutToy.jsx";
import Card from "../components/Card.jsx";


  
export default function AboutPage() {
  return (
    <div className="font-inter text-gray-800 bg-white min-h-screen">

      <section className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Nomotoyz</h1>
          <p className="opacity-90 text-lg">
            More than a toy — it listens, learns, and loves. At Nomotoyz, we believe
            every child deserves a friend who listens, learns, and grows with them.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-600">What We Do</h2>
          <p className="mt-4 font-semibold">A Smart and Lovable Companion</p>
          <p className="mt-2 opacity-90">
            Nomotoyz is a smart and lovable companion created to make playtime magical and
            educational. Powered by voice AI, it talks, listens, and helps children explore the
            world through stories, rhymes, and curiosity-driven conversations.
          </p>
          <p className="mt-3 opacity-90">
            We believe in <strong>screen-free, safe, and meaningful play</strong> — where technology
            inspires learning without replacing human connection.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-purple-200/20 to-purple-100/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700">We Focus On</h2>
          <p className="max-w-2xl mx-auto mt-2 opacity-90">
            We build joyful learning companions that spark curiosity, nurture creativity,
            and encourage emotional growth.
          </p>
          <Card />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <AboutToy For="For parents" />
          <AboutToy />
        </div>
      </section>

      <section className="py-12 text-center bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="opacity-80 mt-1">To make every child's learning journey fun, safe, and imaginative.</p>

          <h3 className="text-2xl font-bold mt-6">Our Vision</h3>
          <p className="opacity-80 mt-1">To create intelligent toys that teach, comfort, and connect with love.</p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="text-white px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500
            shadow-md hover:shadow-xl transition">Get Your Nomotoyz</button>
            <button className=" border border-purple-400 text-purple-700 hover:bg-purple-200 transition
            px-6 py-2 rounded-xl font-semibold">Learn More</button>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEmtTK6wuQDJQ/company-logo_200_200/B4EZkywuGnKQAI-/0/1757493263184/nomo_toyz_logo?e=1767225600&v=beta&t=nDhRKXciWQ6TX12k5I3G5--QuJfKDxjrFLq6UE8rIJk" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <strong>Nomotoyz</strong>
              <p className="text-sm opacity-70">Making learning fun, emotional, and screen-free.</p>
            </div>
          </div>

          <div className="text-right">
            <p className="font-bold text-gray-600 mb-2">Quick Links</p>
            <p className="text-sm opacity-70">Home • Features • Stories • About</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">© 2025 Nomotoyz. All rights reserved.</p>
      </footer>
    </div>
  );
}
