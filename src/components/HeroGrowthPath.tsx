import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// 資料定義：4 個成長節點
const nodes = [
  {
    id: 'now',
    year: 'NOW',
    title: '現在起點',
    x: 20,
    y: 65,
    enTitle: 'CURRENT STATE',
    desc: '以減法思維聚焦關鍵學科底蘊、雙語思辨與 AI 工具素養',
  },
  {
    id: 'year3',
    year: '3 年',
    title: '能力定向',
    x: 40,
    y: 45,
    enTitle: 'COMPETENCY MAPPING',
    desc: '參與專題與探究，將學習動機轉化為具體的實作經驗與作品雛形',
  },
  {
    id: 'year5',
    year: '5 年',
    title: '資產沉澱',
    x: 65,
    y: 35,
    enTitle: 'ASSET ACCUMULATION',
    desc: '取得學術成果、領導力實證，建立無可取代的個人品牌與國際視野',
  },
  {
    id: 'year10',
    year: '10 年+',
    title: '未來選擇權',
    x: 82,
    y: 20,
    enTitle: 'FUTURE OPTIONALITY',
    desc: '擁有隨時切換賽道的能力，不受單一體制侷限的終身學涯籌碼',
  },
];

export function HeroGrowthPath() {
  const [activeNode, setActiveNode] = useState(1); // 預設選中 "3 年"

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20 mb-10 bg-[#0A261D] rounded-[2rem] p-6 md:p-10 border border-[#214235] shadow-2xl overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20,50 Q30,30 50,50 Q70,70 50,90 Q30,70 20,50 Z" fill="#E5C687" opacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      {/* Header Info */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#214235] bg-[#0E3B2E]/50 text-white font-serif-tc text-xs md:text-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E5C687" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v19M5 10l7-7 7 7"/>
          </svg>
          <span className="tracking-wider">學涯成長路徑隱喻</span>
          <span className="text-[#A3B8AD]">·</span>
          <span className="font-cinzel text-[#E5C687] tracking-widest text-[10px] md:text-xs">ROADMAP MATRIX</span>
        </div>
        
        <div className="text-[#A3B8AD] font-cinzel text-xs tracking-[0.2em]">
          STEP BY STEP
        </div>
      </div>

      {/* SVG Path Graphic Area */}
      <div className="relative w-full h-[280px] md:h-[320px] mb-8 select-none">
        {/* We use standard SVG mapping. x:0-100, y:0-80 coordinates for responsive layout */}
        <svg
          viewBox="0 0 100 80"
          className="w-full h-full overflow-visible pointer-events-none"
          preserveAspectRatio="none"
        >
          {/* Horizontal Grid Lines */}
          <line x1="10" y1="20" x2="90" y2="20" stroke="#1D4031" strokeWidth="0.3" strokeDasharray="2 2" />
          <line x1="10" y1="40" x2="90" y2="40" stroke="#1D4031" strokeWidth="0.3" strokeDasharray="2 2" />
          <line x1="10" y1="60" x2="90" y2="60" stroke="#1D4031" strokeWidth="0.3" strokeDasharray="2 2" />

          {/* Main Curved Path (The Journey) */}
          <path
            d={`M 15 70 C 30 65, 30 45, 40 45 S 55 35, 65 35 S 75 35, 82 20`}
            fill="none"
            stroke="#C5A059"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity={0.3}
          />
          
          {/* Active Highlighted Path (Progress up to active node) */}
          <path
            d={
              activeNode === 0 ? "M 15 70 L 20 65" :
              activeNode === 1 ? "M 15 70 C 25 65, 30 45, 40 45" :
              activeNode === 2 ? "M 15 70 C 25 65, 30 45, 40 45 S 55 35, 65 35" :
              "M 15 70 C 25 65, 30 45, 40 45 S 55 35, 65 35 S 75 35, 82 20"
            }
            fill="none"
            stroke="#E5C687"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="transition-all duration-700 ease-in-out"
          />

          {/* Subtle Glow behind the active path */}
          <path
            d={
              activeNode === 0 ? "M 15 70 L 20 65" :
              activeNode === 1 ? "M 15 70 C 25 65, 30 45, 40 45" :
              activeNode === 2 ? "M 15 70 C 25 65, 30 45, 40 45 S 55 35, 65 35" :
              "M 15 70 C 25 65, 30 45, 40 45 S 55 35, 65 35 S 75 35, 82 20"
            }
            fill="none"
            stroke="#E5C687"
            strokeWidth="4"
            strokeLinecap="round"
            className="transition-all duration-700 ease-in-out"
            opacity={0.35}
          />

        </svg>

        {/* HTML Overlay for Nodes and Text (Prevents squashing/stretching) */}
        <div className="absolute inset-0 pointer-events-none">
          {nodes.map((node, i) => {
            const isSelected = activeNode === i;
            return (
              <div
                key={node.id}
                className="absolute pointer-events-auto cursor-pointer flex flex-col items-center justify-center group"
                style={{
                  left: `${node.x}%`,
                  top: `${(node.y / 80) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => setActiveNode(i)}
              >
                {/* Year Label (Top) */}
                <div 
                  className={`absolute bottom-full mb-3 text-center transition-colors whitespace-nowrap font-cinzel text-[13px] md:text-[15px] tracking-widest ${
                    isSelected ? 'text-[#E5C687] font-bold' : 'text-[#D1DDD6] font-medium'
                  }`}
                >
                  {node.year}
                </div>

                {/* Node Circle Area */}
                <div className="relative flex items-center justify-center w-12 h-12">
                  {/* Pulse Ring */}
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#E5C687]"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  )}

                  {/* Core Circle */}
                  <div
                    className={`rounded-full transition-all duration-300 border-[2px] ${
                      isSelected 
                        ? 'w-[18px] h-[18px] bg-[#E5C687] border-[#C5A059] shadow-[0_0_15px_rgba(229,198,135,0.4)]' 
                        : 'w-[14px] h-[14px] bg-[#0E3B2E] border-[#C5A059] group-hover:bg-[#C5A059]/20'
                    }`}
                  />
                </div>

                {/* Title Label (Bottom) */}
                <div 
                  className={`absolute top-full mt-2 text-center transition-colors whitespace-nowrap font-serif-tc ${
                    isSelected ? 'text-white font-bold text-[15px] md:text-[17px]' : 'text-[#A3B8AD] text-[14px] md:text-[15px]'
                  }`}
                >
                  {node.title}
                </div>
              </div>
            );
          })}

          {/* Top Destination Star as HTML absolute element */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: '88%',
              top: `${(18 / 80) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg width="24" height="24" viewBox="-5 -5 10 10" fill="none">
              <path d="M0 -3.5 L0.8 -0.8 L3.5 0 L0.8 0.8 L0 3.5 L-0.8 0.8 L-3.5 0 L-0.8 -0.8 Z" fill="#F5E3B5" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom Interactive Detail Card */}
      <div className="relative z-10 w-full min-h-[110px] md:min-h-[96px] bg-[#0E3B2E] border border-[#214235] rounded-xl p-5 md:px-6 md:py-5 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 mb-2">
              <div className="flex items-baseline gap-3">
                <h4 className="text-[#E5C687] font-serif-tc font-bold text-[15px] md:text-[17px]">
                  {nodes[activeNode].year} · {nodes[activeNode].title}
                </h4>
                <span className="font-cinzel text-[10px] md:text-xs text-[#A3B8AD] tracking-[0.15em] hidden sm:inline-block">
                  ({nodes[activeNode].enTitle})
                </span>
              </div>
              <span className="text-[#5B7869] text-xs font-serif-tc hidden md:inline-block">
                點擊節點切換
              </span>
            </div>
            <p className="text-white/90 font-serif-tc text-[13px] md:text-[15px] leading-relaxed">
              {nodes[activeNode].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center items-center gap-4 text-xs font-serif-tc text-[#5B7869]">
        <span className="w-8 h-[1px] bg-[#214235]"></span>
        <span>一步一腳印，讓每一次投入都沉澱為長遠資產</span>
        <span className="w-8 h-[1px] bg-[#214235]"></span>
      </div>
    </div>
  );
}
