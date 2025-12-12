
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between py-4">

                <Link to="/" className="flex items-center gap-2 font-bold text-purple-600">
                    <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEmtTK6wuQDJQ/company-logo_200_200/B4EZkywuGnKQAI-/0/1757493263184/nomo_toyz_logo?e=1767225600&v=beta&t=nDhRKXciWQ6TX12k5I3G5--QuJfKDxjrFLq6UE8rIJk" alt="Nomotoyz Logo" className="h-10 rounded-full" />
                </Link>

                <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
                    <Link to="/" className="hover:text-purple-600">Home</Link>
                    <Link to="/features" className="hover:text-purple-600">Features</Link>
                    <Link to="/story" className="hover:text-purple-600">Story</Link>
                    <Link to="/about" className="text-purple-600 font-bold">About</Link>
                </nav>

                <div className="hidden md:flex gap-3">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-xl font-semibold">
                        Buy Now
                    </button>
                    <button className="border border-purple-300 text-purple-600 px-4 py-2 rounded-xl font-semibold">
                        Login
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="text-2xl">☰</button>
                </div>

            </div>
        </header>
    )
}

export default NavBar