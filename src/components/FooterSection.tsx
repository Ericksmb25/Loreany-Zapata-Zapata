import React from 'react';
import { Heart, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMMUNION_EVENT } from '../utils/invitationLogic';

interface FooterSectionProps {
  onOpenSingleFileModal: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenSingleFileModal }) => {
  return (
    <footer className="mt-20 border-t border-[#F8C8DC]/60 pt-14 pb-20 px-4 sm:px-6 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Thank you message */}
        <div className="mb-8">
          <Heart className="w-6 h-6 text-[#F8C8DC] fill-[#F8C8DC] mx-auto mb-4 animate-gentle-pulse" />
          <h4 className="font-cormorant text-2xl sm:text-3xl italic text-slate-800 max-w-xl mx-auto leading-relaxed">
            "Gracias por formar parte de mi camino y acompañarme con tu cariño en este sacramento tan especial."
          </h4>
          <p className="font-script text-3xl sm:text-4xl text-[#C5A059] mt-3">
            Loreany Zapata Zapata
          </p>
        </div>

        {/* Standalone Code View / Export Option */}
        <div className="pt-6 border-t border-slate-100 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={onOpenSingleFileModal}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-800 hover:underline transition-colors py-1 px-3 rounded cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-[#C5A059]" />
            Ver / Copiar código completo en un solo archivo (HTML, CSS y JS embebido)
          </button>
          <p className="text-[11px] text-slate-400">
            Santa Rosa de Osos · 8 de Diciembre de 2026
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
