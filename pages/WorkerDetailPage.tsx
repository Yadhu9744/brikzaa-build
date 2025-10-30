import React from "react";
import { useParams, Link } from "react-router-dom";
import { workers } from "../data/services/workers";
import { services } from "../data/services/servics";
import type { Worker } from "../types";
import { BriefcaseIcon, LocationIcon, PhoneIcon } from "../components/Icons";
import NotFoundPage from "./NotFoundPage";

const WorkerDetailPage: React.FC = () => {
  const { workerId } = useParams<{ workerId: string }>();
  const worker: Worker | undefined = workers.find((w) => w.id === workerId);
  const service = services.find((s) => s.id === worker?.serviceId);

  if (!worker || !service) {
    return <NotFoundPage />;
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        to={`/services/${worker.serviceId}`}
        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mb-6"
      >
        ← Back to {service.name}s
      </Link>

      {/* Worker Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700">
        <div className="p-8 sm:p-10">
          {/* Top section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0 text-center md:text-left">
              <img
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-md"
                src={worker.avatar}
                alt={worker.name}
              />
            </div>

            {/* Worker info */}
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                {worker.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-blue-600 mt-1">
                {service.name}
              </p>

              <div className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <BriefcaseIcon className="h-5 w-5 text-blue-500" />
                  <span>{worker.experience} years of experience</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <LocationIcon className="h-5 w-5 text-blue-500" />
                  <span>{worker.location}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <PhoneIcon className="h-5 w-5 text-blue-500" />
                  <span>{worker.phone}</span>
                </div>
              </div>

              {/* Message button */}
              <div className="mt-8 flex justify-center md:justify-start">
                <Link
                  to={`/message/${worker.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  💬 Message {worker.name.split(" ")[0]}
                </Link>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Specialties
            </h3>
            <ul className="flex flex-wrap gap-2">
              {worker.specialties.map((specialty, index) => (
                <li
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium py-1 px-3 rounded-full text-sm"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          {/* 💎 WHY WORK WITH ME SECTION */}
          <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Why Work With Me?
            </h3>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* Quality Guarantee */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-3xl mb-3">🧰</div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                  Quality Guarantee
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Every project is completed with top-notch materials and
                  reliable workmanship you can trust.
                </p>
              </div>

              {/* Transparent Pricing */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                  Transparent Pricing
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Free estimates and no hidden fees — you know exactly what
                  you’re paying for.
                </p>
              </div>

              {/* Special Offer */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-3xl mb-3">🎁</div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                  Special Offer
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Get seasonal discounts and loyalty rewards for returning
                  customers.
                </p>
              </div>
            </div>
          </div>

          {/* 💸 Offers Section */}
          <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Current Offers
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-5 rounded-xl shadow-md flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                  🎉 Get 10% Off!
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  Book this {service.name.toLowerCase()} before{" "}
                  <b>31st Oct 2025</b>.
                </p>
              </div>
              
            </div>
          </div>

          {/* ⭐ Reviews Section */}
          <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Customer Reviews
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Rahul P.",
                  review:
                    "Excellent service! Very professional and polite worker.",
                  rating: 5,
                },
                {
                  name: "Neha K.",
                  review: "Finished the work quickly and neatly. Recommended!",
                  rating: 4,
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
                >
                  <p className="text-yellow-500 mb-2">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    {r.review}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    — {r.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetailPage;
