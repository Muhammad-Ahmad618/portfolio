import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "../../components/GradientText/GradientText";
import { certificates, categoryColors } from "./data";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdOutlineVerified } from "react-icons/md";

function CertificateCard({ cert, variants }) {
  const [imgError, setImgError] = useState(false);
  const colors = categoryColors[cert.category];

  return (
    <motion.div
      variants={variants}
      className={`group relative bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/[0.07] ${colors.border} transition-all duration-500 flex flex-col overflow-hidden shadow-lg ${colors.glow}`}
    >
      {/* Certificate Image */}
      <div className="relative overflow-hidden rounded-t-2xl bg-gray-900/60 p-3">
        {!imgError ? (
          <img
            src={cert.image}
            alt={cert.title}
            onError={() => setImgError(true)}
            className="w-full h-[200px] object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-[200px] rounded-xl flex flex-col items-center justify-center bg-white/5 border border-white/10 gap-3">
            <MdOutlineVerified className="text-5xl text-purple-400 opacity-60" />
            <p className="text-gray-500 text-xs">Preview unavailable</p>
          </div>
        )}

        {/* Category badge */}
        <span
          className={`absolute top-5 right-5 text-[0.65rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${colors.badge} text-white shadow-md`}
        >
          {cert.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 py-4 gap-3">
        {/* Issuer */}
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
          <p className="text-xs font-medium text-gray-400 truncate">
            {cert.issuer}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-base leading-snug group-hover:text-purple-300 transition-colors duration-300">
          {cert.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-6 line-clamp-2 flex-1">
          {cert.description}
        </p>

        {/* Footer */}
        <div className="pt-3 mt-auto border-t border-white/[0.06] flex items-center gap-2">
          <MdOutlineVerified className="text-green-400 text-base shrink-0" />
          <span className="text-xs text-green-400 font-medium">
            Verified Certificate
          </span>

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 text-xs text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              Verify <HiOutlineExternalLink />
            </a>
          )}
        </div>
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-purple-900/10 via-transparent to-transparent" />
    </motion.div>
  );
}

export default function CertificationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...new Set(certificates.map((c) => c.category))];

  const filtered =
    activeFilter === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-14 lg:px-20 my-20 md:mt-10 md:pb-20 min-h-screen">
      {/* Header */}
      <div className="text-center flex flex-col items-center gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[2.5rem] sm:text-[3rem] font-black"
        >
          <GradientText animationSpeed={3} showBorder={false}>
            Certifications
          </GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-gray-400 text-sm max-w-md leading-6"
        >
          Continuous learning through industry-recognized certifications in
          cloud and DevOps technologies.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="flex items-center gap-6 mt-1"
        >
          {categories
            .filter((c) => c !== "All")
            .map((cat) => {
              const colors = categoryColors[cat];
              const count = certificates.filter(
                (c) => c.category === cat
              ).length;
              return (
                <div key={cat} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <span className="text-xs text-gray-400">
                    {count} {cat}
                  </span>
                </div>
              );
            })}
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-center gap-2 mt-10 flex-wrap"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`py-2 px-5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === cat
                ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg shadow-purple-500/20"
                : "bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/30 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10"
        >
          {filtered.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} variants={cardVariant} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

