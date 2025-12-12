import { forKidData, forParentsData } from "../utils/aboutPageData";

const AboutToy = ({ For }) => {
    const isParents = For === "For parents";

    return (
        <div className="transition-all">
            <div className="inline-block bg-white border border-purple-200 text-purple-600 font-bold px-5 py-2 rounded-full shadow-sm">
                {isParents ? "For Parents" : "For Kids"}
            </div>
            <div
                className="
          bg-purple-50 
          p-6 
          rounded-2xl 
          mt-4 
          shadow-sm 
          border border-purple-100
          transition-all 
          duration-300 
          hover:shadow-xl 
          hover:-translate-y-1
        "
            >
                {!isParents && (
                    <h4 className="text-purple-700 font-bold mb-3">
                        Playful & Kid-Friendly
                    </h4>
                )}

                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                    {(isParents ? forParentsData : forKidData).map((text, i) => (
                        <li key={i} className="flex gap-3 items-start items-center">
                            <span className="w-1 h-1 bg-pink-400 rounded-full mt-1" />
                            <p className="font-semibold opacity-90">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutToy;
