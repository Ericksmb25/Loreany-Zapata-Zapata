import React from 'react';
import { Church, Utensils, MapPin, Clock, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMMUNION_EVENT } from '../utils/invitationLogic';

export const EventDetailsSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 my-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-2">
          Itinerario y Ubicaciones
        </p>
        <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-slate-850">
          Detalles del Evento
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Eucaristía Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white border border-[#F8C8DC] rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_25px_rgba(248,200,220,0.25)] hover:border-[#C5A059]/50 transition-all duration-300 group"
        >
          <div>
            {/* Icon Header */}
            <div className="w-14 h-14 rounded-2xl bg-[#FDF2F6] border border-[#F8C8DC] flex items-center justify-center text-[#C5A059] mb-6 shadow-2xs group-hover:scale-105 transition-transform">
              <Church className="w-7 h-7" />
            </div>

            <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-slate-850 mb-4">
              Eucaristía
            </h3>

            <div className="space-y-3.5 text-slate-650 text-sm">
              <div className="flex items-start gap-3">
                <CalendarCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block text-base font-cormorant">
                    {COMMUNION_EVENT.dateString}
                  </span>
                  <span className="text-xs text-slate-500">Día de la Inmaculada Concepción</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block">
                    {COMMUNION_EVENT.eucharistTime}
                  </span>
                  <span className="text-xs text-slate-500">Puntual asistencia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block">
                    Basílica Nuestra Señora de las Mercedes
                  </span>
                  <span className="text-slate-600 block text-xs">
                    Cra 26 Nº 242, Santa Rosa de Osos
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-[#F8C8DC]/40 text-center">
            <span className="text-xs italic text-slate-500 font-cormorant text-base">
              Acompáñame en esta bendición ante el altar
            </span>
          </div>
        </motion.div>

        {/* Recepción Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white border border-[#FFE5B4] rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_25px_rgba(255,229,180,0.25)] hover:border-[#C5A059]/50 transition-all duration-300 group"
        >
          <div>
            {/* Icon Header */}
            <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] border border-[#FFE5B4] flex items-center justify-center text-[#C5A059] mb-6 shadow-2xs group-hover:scale-105 transition-transform">
              <Utensils className="w-7 h-7" />
            </div>

            <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-slate-850 mb-4">
              Recepción
            </h3>

            <div className="space-y-3.5 text-slate-650 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block">
                    {COMMUNION_EVENT.receptionTime}
                  </span>
                  <span className="text-xs text-slate-500">Brindis y almuerzo especial</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block">
                    Restaurante Tiempos
                  </span>
                  <span className="text-slate-600 block text-xs">
                    Santa Rosa de Osos, Antioquia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Button with Exact URL */}
          <div className="mt-8 pt-5 border-t border-[#FFE5B4]/50 flex justify-center">
            <a
              href={COMMUNION_EVENT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFF5E8] to-[#FFE5B4] text-slate-800 font-semibold text-sm border border-[#C5A059]/40 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Ver Ubicación</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
