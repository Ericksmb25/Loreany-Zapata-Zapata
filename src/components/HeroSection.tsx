import React, { useState, useEffect } from 'react';
import { Calendar, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMMUNION_EVENT, calculateCountdown, padZero, generateGoogleCalendarUrl } from '../utils/invitationLogic';
import portraitImg from '../assets/images/Gemini_Generated_Image_uj01hsuj01hsuj01.jfif';

export const HeroSection: React.FC = () => {
  const [countdown, setCountdown] = useState(() =>
    calculateCountdown(new Date(COMMUNION_EVENT.targetTimestampISO))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(new Date(COMMUNION_EVENT.targetTimestampISO)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 text-center max-w-4xl mx-auto">
      {/* Decorative Cross Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center justify-center mb-5 text-[#C5A059] transition-transform duration-500 hover:scale-110"
      >
        <svg
          width="36"
          height="46"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        >
          <path d="M12 2v20M7 7h10" />
        </svg>
      </motion.div>

      {/* Title & Celebrant Name */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-cormorant text-lg sm:text-2xl uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
          {COMMUNION_EVENT.title}
        </p>

        <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-normal text-slate-850 tracking-tight leading-[1.1] mb-8 text-balance">
          {COMMUNION_EVENT.celebrant}
        </h1>
      </motion.div>

      {/* Photo Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-64 sm:w-80 aspect-[3/4] mb-8 p-2 rounded-3xl bg-gradient-to-b from-white via-[#FDF2F6] to-white shadow-[0_15px_35px_rgba(248,200,220,0.45)] border border-[#C5A059]/30"
      >
        {/* Soft glowing halo */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/60 pointer-events-none" />

        <img
          src={portraitImg}
          alt={COMMUNION_EVENT.celebrant}
          className="w-full h-full object-cover object-top rounded-3xl shadow-lg border border-white/60"
          referrerPolicy="no-referrer"
        />

        {/* Small decorative corner laurel */}
        <div className="absolute -bottom-3 -right-3 bg-white/95 backdrop-blur-xs p-2.5 rounded-full border border-[#F8C8DC] shadow-md text-[#C5A059]">
          <Heart className="w-5 h-5 fill-[#F8C8DC] text-[#C5A059]" />
        </div>
      </motion.div>

      {/* Intro Message */}
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="font-cormorant text-xl sm:text-2xl italic text-slate-700 max-w-2xl mx-auto leading-relaxed px-4 mb-10"
      >
        "{COMMUNION_EVENT.introMessage}"
      </motion.blockquote>

      {/* Countdown Card Grid */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white/90 backdrop-blur-xs border border-[#F8C8DC]/80 rounded-2xl p-5 sm:p-6 max-w-xl mx-auto shadow-[0_8px_25px_rgba(248,200,220,0.25)]"
      >
        <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-4">
          Faltan para este gran día
        </p>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
          <div className="p-2 sm:p-3 rounded-xl bg-[#FFFDFD] border border-[#F8C8DC]/60">
            <span className="font-cormorant text-2xl sm:text-4xl font-semibold text-slate-800 tabular-nums block">
              {padZero(countdown.days)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-medium">
              Días
            </span>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-[#FFFDFD] border border-[#F8C8DC]/60">
            <span className="font-cormorant text-2xl sm:text-4xl font-semibold text-slate-800 tabular-nums block">
              {padZero(countdown.hours)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-medium">
              Horas
            </span>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-[#FFFDFD] border border-[#F8C8DC]/60">
            <span className="font-cormorant text-2xl sm:text-4xl font-semibold text-slate-800 tabular-nums block">
              {padZero(countdown.minutes)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-medium">
              Minutos
            </span>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-[#FFFDFD] border border-[#F8C8DC]/60">
            <span className="font-cormorant text-2xl sm:text-4xl font-semibold text-slate-800 tabular-nums block">
              {padZero(countdown.seconds)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-medium">
              Segundos
            </span>
          </div>
        </div>

        {/* Add to Google Calendar Action */}
        <div className="mt-5 pt-4 border-t border-[#F8C8DC]/40 flex justify-center">
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-slate-900 bg-[#FFE5B4]/50 hover:bg-[#FFE5B4] transition-colors px-4 py-2 rounded-full border border-[#FFE5B4]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            Agendar en Google Calendar
          </a>
        </div>
      </motion.div>
    </section>
  );
};
