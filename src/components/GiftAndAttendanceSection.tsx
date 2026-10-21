import React from 'react';
import { Mail, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMMUNION_EVENT } from '../utils/invitationLogic';

export const GiftAndAttendanceSection: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 my-14 space-y-8">
      {/* Lluvia de Sobres Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-gradient-to-b from-white to-[#FDF5F8] border border-[#F8C8DC] rounded-3xl p-8 sm:p-10 text-center shadow-[0_10px_30px_rgba(248,200,220,0.25)]"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF4F8] border border-[#F8C8DC] flex items-center justify-center text-[#C5A059] mb-5 shadow-2xs">
          <Mail className="w-8 h-8 text-[#C5A059]" />
        </div>

        <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-slate-850 mb-4">
          Lluvia de Sobres
        </h3>

        {/* Exact prompt message */}
        <p className="font-cormorant text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl mx-auto">
          "{COMMUNION_EVENT.envelopeGiftMessage}"
        </p>
      </motion.div>

      {/* Confirmation Notice (Strictly informational reading block) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white border border-[#C5A059]/40 rounded-2xl p-6 sm:p-7 text-center shadow-[0_6px_20px_rgba(0,0,0,0.03)]"
      >
        <div className="inline-flex items-center gap-2 text-[#C5A059] mb-2">
          <Info className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059]">
            Nota de Asistencia
          </span>
        </div>

        {/* Strict text requirement without any WhatsApp buttons */}
        <p className="font-cormorant text-2xl sm:text-3xl font-semibold text-slate-850 tracking-wide">
          {COMMUNION_EVENT.attendanceNotice}
        </p>
        <p className="text-xs text-slate-500 mt-2 font-medium">
          Agradecemos avisar previamente para coordinar todos los preparativos familiares.
        </p>
      </motion.div>
    </section>
  );
};
