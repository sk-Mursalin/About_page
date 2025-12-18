import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import curisity from "../images/curiosity.png"
import discovery from "../images/discovery.png"
import image from "../images/image.png"
import imagination from "../images/imagination.png"
import playlearn from "../images/playlearn.png"
import teddy from "../images/teddy.png"
import {
    EffectCoverflow,
    Pagination,
    Keyboard,
    Mousewheel,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

/* SIMPLE FLOATING ICON */
function ToyIconImage({ src, size = 70, position = {} }) {
    return (
        <img
            src={src}
            alt=""
            className="absolute opacity-80 animate-slow-float pointer-events-none"
            style={{
                width: size,
                height: size,
                ...position,
                filter: "drop-shadow(0 5px 12px rgba(0,0,0,0.4))",
            }}
        />
    );
}

/* MAIN HERO SECTION */
export default function HeroSection() {
    const parallaxRef = useRef(null);

    // PARALLAX EFFECT FOR BACKGROUND
    useEffect(() => {
        const node = parallaxRef.current;
        if (!node) return;

        function onMove(e) {
            const rect = node.getBoundingClientRect();
            const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
            const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

            node.style.setProperty("--px", dx * 14 + "px");
            node.style.setProperty("--py", dy * 14 + "px");
        }

        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    // const teddy = "/toyz-icons/teddy.png";

    /* SLIDE DATA */
    /* SLIDE DATA - USING YOUR LOCAL IMAGES  */
    const slides = [
        {
            title: "Bedtime Story Magic",
            desc: "Nomo tells soft, comforting stories that help kids sleep peacefully.",
            url: image,
        },
        {
            title: "Curiosity Explorer",
            desc: "Every question becomes a fun adventure of learning and wonder.",
            url: curisity,
        },
        {
            title: "Play & Learn Moments",
            desc: "Interactive play that secretly boosts learning and creativity.",
            url: playlearn,
        },
        {
            title: "Imagination World",
            desc: "Nomo brings characters to life with expressive storytelling.",
            url: imagination,
        },
        {
            title: "Discovery Time",
            desc: "Kids learn real facts in story format they actually enjoy.",
            url: discovery,
        },
    ];

    return (
        <section
            ref={parallaxRef}
            className="w-full relative overflow-hidden bg-gradient-to-br from-[#1b102d] via-[#2a1046] to-[#12091d] text-white px-6 md:px-16 py-24"
            style={{ minHeight: "72vh" }}
        >
            {/* BACKGROUND BLOBS */}
            <div
                className="absolute -right-40 -top-40 w-[30rem] h-[30rem] rounded-full blur-[130px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(168,85,247,0.4), rgba(236,72,153,0.1))",
                }}
            />
            <div
                className="absolute -left-40 bottom-0 w-[22rem] h-[22rem] rounded-full blur-[120px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(236,72,153,0.35), rgba(139,92,246,0.15))",
                }}
            />
            <div className="absolute top-10 left-2 w-24 h-24 opacity-20 z-0 animate-slow-float hidden md:block">
                {/* NOTE: You need to include the lottie-player script in your main HTML file for this to render */}
                <lottie-player
                    autoplay
                    loop
                    background="transparent"
                    src="/lottie/robot-lottie.json"
                    className="w-full h-full"
                ></lottie-player>
            </div><div className="absolute bottom-10 right-2 w-24 h-24 opacity-20 z-0 animate-slow-float hidden md:block">
                {/* NOTE: You need to include the lottie-player script in your main HTML file for this to render */}
                <lottie-player
                    autoplay
                    loop
                    background="transparent"
                    src="/src/images/teddy.png"
                    className="w-full h-full"
                ></lottie-player>
            </div>
            {/* FLOATING TOY */}
            <ToyIconImage src={teddy} size={73} position={{ top: "45%", left: "19%" }} />

            {/* GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">

                {/* LEFT STORY SECTION */}
                <div className="max-w-xl space-y-8">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-purple-200 backdrop-blur">
                        <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></span>
                        A story about curious minds
                    </div>

                    <h1 className="story-title text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        The little Toy <br />
                        that answers every <span className="text-pink-300">“why?”</span>
                    </h1>

                    <div className="space-y-5">
                        <p className="text-purple-100/90 text-sm">
                            • Kids ask endless questions — Nomo listens.
                        </p>
                        <p className="text-purple-100/90 text-sm">
                            • A glowing chip turns real facts into magical stories.
                        </p>
                        <p className="text-purple-100/90 text-sm">
                            • Learning becomes play. Curiosity becomes joy.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg font-semibold">
                            Meet Nomo →
                        </button>
                        <button className="px-6 py-3 bg-white/10 border border-purple-300/40 rounded-full text-purple-100 backdrop-blur">
                            ▶ Watch Demo
                        </button>
                    </div>
                </div>

                {/* RIGHT — PARALLAX SLIDER */}
                <div className="w-full h-[32rem]">
                    <Swiper
                        effect="coverflow"
                        grabCursor
                        centeredSlides
                        loop
                        autoplay={{
                            delay: 2600,
                            disableOnInteraction: false,
                        }}
                        keyboard={{ enabled: true }}
                        mousewheel={{ thresholdDelta: 70 }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel, Autoplay]}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 140,
                            modifier: 3,
                            slideShadows: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.2 },
                            1024: { slidesPerView: 1.7 },
                            1560: { slidesPerView: 2 },
                        }}
                        className="w-full h-full"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                className="w-72 h-full rounded-xl overflow-hidden bg-cover bg-center flex flex-col justify-end relative group"
                                style={{
                                    backgroundImage: `
                    linear-gradient(to top, rgba(0,0,0,0.75), transparent),
                    url('${slide.url}')
                  `,
                                }}
                            >
                                <div className="p-6 text-white slide-content transform-gpu">
                                    <h2 className="text-xl font-semibold uppercase slide-title">{slide.title}</h2>
                                    <p className="text-sm text-gray-200 slide-desc">{slide.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* ANIMATIONS */}
            <style>{`
        /* FLOATING */
        @keyframes slowFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-slow-float { animation: slowFloat 6s ease-in-out infinite; }

        /* TEXT FADE-UP */
        .slide-content {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: all 0.6s ease-out;
        }
        .swiper-slide-active .slide-content {
          opacity: 1;
          transform: translateY(0px) scale(1);
        }

        .slide-title {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease-out 0.15s;
        }
        .swiper-slide-active .slide-title {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-desc {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease-out 0.3s;
        }
        .swiper-slide-active .slide-desc {
          opacity: 1;
          transform: translateY(0);
        }

        /* PARALLAX INSIDE SLIDE */
        .swiper-slide-active .slide-content {
          transform: translateY(0px) translateX(var(--px, 0px)) translateY(var(--py, 0px));
        }
      `}</style>
        </section>
    );
}
