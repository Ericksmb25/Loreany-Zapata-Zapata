/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { MusicPlayerSection } from './components/MusicPlayerSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { GiftAndAttendanceSection } from './components/GiftAndAttendanceSection';
import { FooterSection } from './components/FooterSection';
import { FloatingMusicBar } from './components/FloatingMusicBar';
import { SingleFileExportModal } from './components/SingleFileExportModal';
import { COMMUNION_EVENT } from './utils/invitationLogic';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendYtMessage = (action: string, args: unknown[] = []) => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    try {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: action,
          args,
        }),
        '*'
      );
    } catch {
      // Ignore cross-origin warnings
    }
  };

  const handleTogglePlay = () => {
    if (!isPlaying) {
      sendYtMessage('playVideo');
      setIsPlaying(true);
    } else {
      sendYtMessage('pauseVideo');
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!isMuted) {
      sendYtMessage('mute');
      setIsMuted(true);
    } else {
      sendYtMessage('unMute');
      setIsMuted(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDFB] text-slate-800 font-sans selection:bg-[#F8C8DC]/50 selection:text-slate-900 overflow-x-hidden">
      {/* Delicate Ambient Blur Glows in Palette Colors */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#F8C8DC]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-[#FFE5B4]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-96 h-96 bg-[#F8C8DC]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Embedded YouTube Iframe for Background Audio */}
      <div className="fixed -top-96 -left-96 w-1 h-1 opacity-0 pointer-events-none overflow-hidden">
        <iframe
          ref={iframeRef}
          id="youtube-player"
          width="200"
          height="200"
          src={`https://www.youtube.com/embed/${COMMUNION_EVENT.youtubeVideoId}?enablejsapi=1&playsinline=1&rel=0`}
          title={COMMUNION_EVENT.songTitle}
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Main Container */}
      <main className="relative z-10">
        <HeroSection />
        <MusicPlayerSection
          isPlaying={isPlaying}
          isMuted={isMuted}
          onTogglePlay={handleTogglePlay}
          onToggleMute={handleToggleMute}
        />
        <EventDetailsSection />
        <GiftAndAttendanceSection />
        <FooterSection onOpenSingleFileModal={() => setIsExportModalOpen(true)} />
      </main>

      {/* Floating Audio Controller */}
      <FloatingMusicBar isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />

      {/* Single File Source Viewer / Exporter Modal */}
      <SingleFileExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
