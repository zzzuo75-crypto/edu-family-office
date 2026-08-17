import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, RotateCw } from 'lucide-react';
import { SERVICES_LIST } from '../data/eduData';

function EduTreeMark({ size = 48, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 90V40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 40C30 30 20 50 20 60C20 40 30 20 50 20C70 20 80 40 80 60C80 50 70 30 50 40Z" fill="currentColor" />
      <circle cx="50" cy="15" r="5" fill="currentColor" />
      <circle cx="25" cy="40" r="4" fill="currentColor" />
      <circle cx="75" cy="40" r="4" fill="currentColor" />
    </svg>
  );
}

export function ServicesFlipCards() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleFlipAllFront = () => {
    setFlippedIndex(null);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-10 gap-4">
        <button
          onClick={handleFlipAllFront}
          disabled={flippedIndex === null}
          className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all flex items-center gap-2 ${
            flippedIndex === null
              ? 'border-[#E8E0D2] text-[#A89F91] cursor-not-allowed bg-transparent'
              : 'border-[#DFCDB4] text-[#0E3B2E] hover:bg-[#F3EDE2] hover:border-[#C5A059] bg-white shadow-sm'
          }`}
        >
          <RotateCw className={`w-4 h-4 ${flippedIndex !== null ? 'animate-spin-slow' : ''}`} />
          全部翻回封面
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence>
          {SERVICES_LIST.slice(0, 5).map((srv, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={srv.id}
                // 這裡稍微加高到 480px，給內容多一點呼吸空間
                className="relative h-[480px] w-full cursor-pointer select-none [perspective:1000px] group"
                onClick={() => toggleFlip(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip(index);
                  }
                }}
              >
                <motion.div
                  className="w-full h-full relative [transform-style:preserve-3d]"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  
                  {/* ================= CARD FRONT (封面) ================= */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-lux transition-all duration-300 group-hover:shadow-lux-lg border border-[#DFCDB4] bg-white"
                  >
                    <div className="absolute -right-6 -bottom-6 opacity-[0.04] text-[#0E3B2E] pointer-events-none">
                      <EduTreeMark size={200} />
                    </div>

                    <div className="relative z-10 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs tracking-[0.15em] font-cinzel text-[#C5A059] font-bold">
                          SERVICE 0{index + 1}
                        </span>
                        <span className="text-[10px] font-cinzel px-2.5 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] font-medium tracking-wider">
                          {srv.enTitle.split(' ')[0]}
                        </span>
                      </div>

                      <h3 className="text-[22px] font-bold font-serif-tc text-[#0E3B2E] mb-5 leading-tight">
                        {srv.title}
                      </h3>

                      <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#C5A059] rounded-r-xl mb-5">
                        <p className="text-[13px] font-serif-tc font-bold text-[#0E3B2E] leading-relaxed">
                          「{srv.quote}」
                        </p>
                      </div>

                      <p className="text-[13px] text-[#526058] font-serif-tc leading-loose">
                        {srv.summary}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t border-[#E8E0D2] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#0E3B2E]">
                        <RotateCw className="w-4 h-4" />
                        <span className="text-[11px] font-bold font-serif-tc tracking-widest">
                          點擊翻面查看詳情
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F3EDE2] text-[#0E3B2E] flex items-center justify-center group-hover:bg-[#0E3B2E] group-hover:text-[#F3EDE2] transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* ================= CARD BACK (翻面內容) ================= */}
                  {/* 這裡加入了 overflow-y-auto 與隱藏捲動條的設定 [&::-webkit-scrollbar]:hidden */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] p-6 sm:p-7 flex flex-col justify-between overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-lux transition-all duration-300 border border-[#C5A059]/40 bg-[#0E3B2E] text-white"
                    style={{
                      background: 'linear-gradient(155deg, #0E3B2E 0%, #08261E 100%)',
                    }}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                        <span className="text-xs tracking-[0.15em] font-cinzel text-[#E5C687] opacity-80">
                          SERVICE 0{index + 1}
                        </span>
                        <span className="text-[10px] font-cinzel px-2.5 py-1 rounded-full bg-white/10 text-white tracking-wider border border-white/20">
                          {srv.enTitle.split(' ')[0]}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-serif-tc text-white mb-6">
                        {srv.title}
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-[11px] text-[#E5C687] mb-3 flex items-center gap-1.5 font-bold tracking-widest">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                            核心服務項目：
                          </h4>
                          <ul className="space-y-2.5 text-[13px] font-serif-tc text-white/90">
                            {srv.details.map((d, i) => (
                              <li key={i} className="flex items-start gap-2 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-[#E5C687] shrink-0 mt-0.5 opacity-80" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {srv.deliverables && srv.deliverables.length > 0 && (
                          <div className="pt-4 border-t border-white/10">
                            <h4 className="text-[11px] text-[#E5C687] mb-2 font-bold tracking-widest">交付物：</h4>
                            <div className="flex flex-wrap gap-2">
                              {srv.deliverables.map((del, i) => (
                                <span key={i} className="text-[11px] px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/80 line-clamp-1 max-w-full">
                                  {del}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between opacity-70 hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-2 text-white">
                        <RotateCw className="w-4 h-4" />
                        <span className="text-[11px] font-medium font-serif-tc tracking-widest">
                          點擊翻回封面
                        </span>
                      </div>
                      <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase">Back</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
