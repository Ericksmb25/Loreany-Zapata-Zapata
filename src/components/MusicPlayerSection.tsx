import React from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMMUNION_EVENT } from '../utils/invitationLogic';

interface MusicPlayerProps {
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
}

export const MusicPlayerSection: React.FC<MusicPlayerProps> = ({
  isPlaying,
  isMuted,
  onTogglePlay,
  onToggleMute,
}) => {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 my-10">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-gradient-to-br from-white via-[#FFF8FA] to-[#FFF5EC] border border-[#F8C8DC] rounded-3xl p-6 sm:p-8 text-center shadow-[0_10px_30px_rgba(248,200,220,0.3)]"
      >
        {/* Subtle decorative golden glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE5B4]/30 rounded-full blur-2xl pointer-events-none" />

        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs uppercase tracking-widest font-semibold mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          Música Especial
        </div>

        {/* Song Info */}
        <h2 className="font-cormorant text-2xl sm:text-3xl font-semibold text-slate-850 mb-1">
          {COMMUNION_EVENT.songTitle}
        </h2>
        <p className="text-sm font-medium text-slate-500 mb-5">
          {COMMUNION_EVENT.songArtists}
        </p>

        {/* Inspiring text required by prompt */}
        <p className="font-cormorant text-lg sm:text-xl italic text-slate-700 max-w-lg mx-auto leading-relaxed mb-6">
          "{COMMUNION_EVENT.musicInspireText}"
        </p>

        {/* Player Controls Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onTogglePlay}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFE5B4] to-[#F8C8DC] text-slate-850 font-semibold text-sm shadow-[0_4px_16px_rgba(248,200,220,0.6)] hover:shadow-[0_6px_22px_rgba(248,200,220,0.8)] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#C5A059]/30 cursor-pointer"
            aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5 fill-slate-850" />
                <span>Pausar Música</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-slate-850" />
                <span>Reproducir Música</span>
              </>
            )}
          </button>

          {/* Mute button */}
          <button
            type="button"
            onClick={onToggleMute}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-600 text-xs font-medium border border-[#F8C8DC] shadow-xs transition-colors cursor-pointer"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span>Sonido silenciado</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#C5A059]" />
                <span>Sonido activo</span>
              </>
            )}
          </button>
        </div>

        {/* Animated Equalizer Visualizer */}
        {isPlaying && (
          <div className="flex items-center justify-center gap-1.5 mt-5">
            <span className="w-1 h-3 bg-[#C5A059] rounded-full animate-pulse" />
            <span className="w-1 h-5 bg-[#F8C8DC] rounded-full animate-bounce" />
            <span className="w-1 h-6 bg-[#C5A059] rounded-full animate-pulse" />
            <span className="w-1 h-4 bg-[#FFE5B4] rounded-full animate-bounce" />
            <span className="w-1 h-2 bg-[#F8C8DC] rounded-full animate-pulse" />
          </div>
        )}
      </motion.div>
    </section>
  );
};
