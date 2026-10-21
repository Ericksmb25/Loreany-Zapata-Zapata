import React from 'react';
import { Play, Pause, Music2 } from 'lucide-react';
import { COMMUNION_EVENT } from '../utils/invitationLogic';

interface FloatingMusicBarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const FloatingMusicBar: React.FC<FloatingMusicBarProps> = ({ isPlaying, onTogglePlay }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        type="button"
        onClick={onTogglePlay}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-white/95 border-[#C5A059] text-slate-850 shadow-[#F8C8DC]/50'
            : 'bg-white/90 border-[#F8C8DC] text-slate-700 hover:bg-white'
        }`}
        title={isPlaying ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
        aria-label={isPlaying ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5">
              <span className="w-1 h-3 bg-[#C5A059] rounded-full animate-bounce" />
              <span className="w-1 h-4 bg-[#F8C8DC] rounded-full animate-pulse" />
              <span className="w-1 h-2 bg-[#C5A059] rounded-full animate-bounce" />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-[11px] font-semibold text-slate-800 leading-none">
                {COMMUNION_EVENT.songTitle}
              </p>
              <p className="text-[9px] text-slate-500 leading-none mt-0.5">
                {COMMUNION_EVENT.songArtists}
              </p>
            </div>
            <Pause className="w-4 h-4 fill-slate-850 ml-1 text-slate-850" />
          </>
        ) : (
          <>
            <Music2 className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-semibold text-slate-800">
              Escuchar Música
            </span>
            <Play className="w-4 h-4 fill-slate-850 ml-0.5 text-slate-850" />
          </>
        )}
      </button>
    </div>
  );
};
