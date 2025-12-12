import { aboutCardData } from '../utils/aboutPageData'

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {aboutCardData.map((c, i) => (
                <div key={i} className="p-6 rounded-xl bg-purple-300 backdrop-blur shadow-md transition delay-200 duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border border-white/40">
                    <div className="text-3xl mb-2">{c.icon}</div>
                    <div className="font-bold text-lg text-gray-700 mb-1">{c.title}</div>
                    <p className="opacity-90 text-sm text-gray-600">{c.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Card