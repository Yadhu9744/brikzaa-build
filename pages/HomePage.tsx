import React, { useState, useEffect } from "react";
import FeaturesSection from "@/components/FeaturesSection";

const slides = [
  {
    bgImage:
      "url('https://t3.ftcdn.net/jpg/01/88/67/32/360_F_188673280_69cCvYgLg03JsTWTEuKq1duuNHn3amWW.jpg')",
    titleLine1: "Your One-Stop Hub for",
    titleLine2: "Construction Needs",
    description:
      "Connecting skilled labor, quality materials, and professional services. Build your next project with confidence.",
  },
  {
    bgImage:
      "url(https://media.istockphoto.com/id/1334348884/photo/destruction-of-old-house-by-excavator-with-lot-of-dust-bucket-of-excavator-breaks-concrete.jpg?s=612x612&w=0&k=20&c=MJ2NIhAJsxAG3ij695hvnuIFxj-T4s99MXFk1bdOfSk=)",
    titleLine1: "Find Vetted & Skilled",
    titleLine2: "Professionals",
    description:
      "From architects to electricians, access our network of trusted experts to ensure your project is in good hands.",
  },
  {
    bgImage:
      "url('https://media.istockphoto.com/id/838476004/photo/silhouette-of-engineer-and-construction-team-working-safely-work-load-concrete-on-scaffolding.jpg?s=1024x1024&w=is&k=20&c=msYhReMbJ9CqoE_NvstR7V1apuUJv3J3cM3FE1kTTYQ=')",
    titleLine1: "Source High-Quality",
    titleLine2: "Building Materials",
    description:
      "Get the best materials from reliable suppliers at competitive prices, delivered right to your site.",
  },
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      {/* ================= HERO / SLIDER SECTION ================= */}
      <section className="relative text-center bg-slate-200 dark:bg-slate-800 overflow-hidden h-[90vh] min-h-[600px] flex items-center justify-center">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-80" : "opacity-0"
            }`}
            style={{ backgroundImage: slide.bgImage }}
          ></div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-200/50 dark:from-slate-800 dark:via-slate-800/50 to-transparent"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 w-full">
          <div className="relative h-64">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">{slide.titleLine1}</span>
                  <span className="block text-primary">{slide.titleLine2}</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-xl text-slate-700 dark:text-slate-300 sm:max-w-3xl">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#services"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark sm:px-8 transform hover:scale-105 transition-transform duration-300"
              >
                Find a Pro
              </a>
              <a
                href="#materials"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 hover:bg-primary/10 sm:px-8 transform hover:scale-105 transition-transform duration-300"
              >
                Browse Materials
              </a>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 dark:bg-black/30 p-2 rounded-full text-slate-800 dark:text-white hover:bg-white/50 dark:hover:bg-black/50 transition-colors z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 dark:bg-black/30 p-2 rounded-full text-slate-800 dark:text-white hover:bg-white/50 dark:hover:bg-black/50 transition-colors z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-white/50 dark:bg-black/50 hover:bg-white/70 dark:hover:bg-black/70"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-orange-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h3 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Building a <span className="text-orange-600">Better Network</span>
          </h3>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Construction Connect was created to revolutionize the construction
            industry — connecting people, materials, and opportunities under one
            digital roof.
          </p>
        </div>

        {/* Mission & Vision */}
        {/* Mission & Vision Section - Timeline Style */}
        <div className="relative max-w-5xl mx-auto px-4 py-16">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-orange-200 dark:bg-slate-700 h-full rounded-full"></div>

          {/* Mission Section */}
          <div className="mb-20 flex flex-col md:flex-row items-center md:items-start relative">
            {/* Left content (text) */}
            <div className="md:w-1/2 md:pr-10 text-left md:text-right">
              <h3 className="text-3xl font-bold text-orange-600">
                🎯 Our Mission
              </h3>
              <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                To bridge the gap between{" "}
                <span className="font-semibold text-orange-500">workers</span>,
                <span className="font-semibold text-orange-500">
                  {" "}
                  suppliers
                </span>
                , and
                <span className="font-semibold text-orange-500">
                  {" "}
                  contractors
                </span>{" "}
                — enabling collaboration, transparency, and growth in the
                construction industry.
              </p>
            </div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-orange-500 border-4 border-white dark:border-slate-800 rounded-full z-10 shadow-md"></div>

            {/* Empty right spacer */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start relative">
            {/* Empty left spacer */}
            <div className="hidden md:block md:w-1/2"></div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-orange-500 border-4 border-white dark:border-slate-800 rounded-full z-10 shadow-md"></div>

            {/* Right content (text) */}
            <div className="md:w-1/2 md:pl-10 text-left">
              <h3 className="text-3xl font-bold text-orange-600">
                🔭 Our Vision
              </h3>
              <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                To become the global digital hub where the entire
                <span className="font-semibold text-orange-500">
                  {" "}
                  construction community
                </span>
                connects, collaborates, and builds a
                <span className="font-semibold text-orange-500">
                  {" "}
                  sustainable future.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <FeaturesSection />

      {/* ================= STORY SECTION ================= */}
      <section className="relative py-20 bg-gradient-to-b from-orange-50 via-white to-orange-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="relative max-w-4xl mx-auto text-center px-6">
          {/* Decorative glow */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-80 h-80 bg-gradient-to-tr from-orange-100 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          </div>

          {/* Story content */}
          <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-orange-200/60 dark:border-orange-700/40 hover:shadow-orange-100/40 transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Why We Started
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
              In today’s fast-paced construction industry, time and connections
              are everything. We saw skilled professionals struggling to find
              opportunities and companies struggling to find reliable talent.
              That’s why
              <span className="font-semibold text-orange-600 dark:text-orange-400">
                {" "}
                Construction Connect{" "}
              </span>
              was built — to bring everyone together efficiently and
              transparently.
            </p>
            <p className="italic text-orange-700 dark:text-orange-400 mt-4">
              “Every great structure begins with the right people.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
