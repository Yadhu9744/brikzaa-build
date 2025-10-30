import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-orange-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      {/* About Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm sm:text-base font-semibold text-orange-600 tracking-widest uppercase">
              About Us
            </h2>
            <h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              The Mission Driving{" "}
              <span className="text-orange-500">Our Platform</span>
            </h3>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">
              Construction Connect was founded on the principle that better
              connections lead to better builds. We are committed to digitizing
              the handshake.
            </p>
          </div>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mt-10 sm:mt-12">
            {/* Mission */}
            <div
              className="relative rounded-3xl shadow-xl ring-4 ring-orange-200 dark:ring-orange-800/50 hover:shadow-2xl transition-all duration-500 overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/Images/aboutus.jpg')" }}
            >
              <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/80"></div>
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4 flex items-center flex-wrap">
                  <span className="mr-3 text-3xl sm:text-4xl">🎯</span>Our Core Mission
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                  To serve as the{" "}
                  <strong>indispensable digital bridge</strong> connecting
                  vetted contractors, certified suppliers, and qualified talent,
                  thereby accelerating project delivery and mitigating industry
                  fragmentation.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div
              className="relative rounded-3xl shadow-xl ring-4 ring-orange-200 dark:ring-orange-800/50 hover:shadow-2xl transition-all duration-500 overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/Images/aboutus1.jpg')" }}
            >
              <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/80"></div>
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4 flex items-center flex-wrap">
                  <span className="mr-3 text-3xl sm:text-4xl">🔭</span>Our Long-term Vision
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                  To be universally recognized as the{" "}
                  <strong>definitive global standard</strong> for professional
                  networking and commerce in the construction sector, driving
                  innovation and sustainability worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 bg-orange-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm sm:text-base font-semibold text-orange-600 tracking-widest uppercase text-center">
            Foundational Principles
          </h2>
          <h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white text-center mb-12 sm:mb-16">
            Our <span className="text-orange-500">Core Values</span> Define Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Efficiency */}
            <div
              className="relative p-6 sm:p-8 rounded-2xl shadow-lg border-t-8 border-orange-500/70 hover:shadow-2xl transition-all duration-500 overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/Images/efficiency.jpg')" }}
            >
              <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/80"></div>
              <div className="relative z-10 text-center sm:text-left">
                <span
                  className="text-4xl sm:text-5xl inline-block mb-4 text-orange-500"
                  role="img"
                  aria-label="Efficiency"
                >
                  ⚡️
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Efficiency
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Streamlining workflows and maximizing resource utilization to save
                  our users time and cost.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div
              className="relative p-6 sm:p-8 rounded-2xl shadow-lg border-t-8 border-orange-500/70 hover:shadow-2xl transition-all duration-500 overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/Images/integrity.jpg')" }}
            >
              <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/80"></div>
              <div className="relative z-10 text-center sm:text-left">
                <span
                  className="text-4xl sm:text-5xl inline-block mb-4 text-orange-500"
                  role="img"
                  aria-label="Integrity"
                >
                  ✅
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Integrity
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Upholding the highest standards of transparency and trust in every
                  connection and transaction.
                </p>
              </div>
            </div>

            {/* Partnership */}
            <div
              className="relative p-6 sm:p-8 rounded-2xl shadow-lg border-t-8 border-orange-500/70 hover:shadow-2xl transition-all duration-500 overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/Images/partners.jpg')" }}
            >
              <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/80"></div>
              <div className="relative z-10 text-center sm:text-left">
                <span
                  className="text-4xl sm:text-5xl inline-block mb-4 text-orange-500"
                  role="img"
                  aria-label="Partnership"
                >
                  🤝
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Partnership
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Fostering a collaborative ecosystem where all members contribute to
                  shared success and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Impact */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 items-start">
          {/* Story */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 border-l-4 border-orange-500 pl-3 sm:pl-4">
              Our Founding Story
            </h3>
            <blockquote className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed italic">
              "We recognized the critical disconnect: valuable time and budget
              were lost navigating fragmented supply chains and talent pools.{" "}
              <strong>Construction Connect</strong> was engineered to solve
              this, creating a cohesive, efficient, and transparent market built
              by industry professionals, for industry professionals."
            </blockquote>
          </div>

          {/* Impact */}
          <div className="lg:col-span-1 bg-orange-50 dark:bg-slate-900 p-6 sm:p-8 rounded-xl shadow-inner border-t-8 border-orange-500">
            <h4 className="text-base sm:text-lg font-bold text-orange-600 mb-4 uppercase tracking-wider text-center lg:text-left">
              Our Impact to Date
            </h4>
            <div className="space-y-4 text-center lg:text-left">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">
                  25,000+
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  Vetted Contractors & Suppliers
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">
                  5 Million+
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  Man-Hours Connected
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">
                  14%
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  Average Reduction in Sourcing Time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
