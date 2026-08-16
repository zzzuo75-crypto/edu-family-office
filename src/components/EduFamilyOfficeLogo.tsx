import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full-horizontal' | 'full-vertical' | 'mark-only';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * EduTreeMark: Exact vector reconstruction of the Tree of Life Emblem
 * Features:
 * - 4-Point Golden Star at the apex
 * - Double-helix intertwined calligraphic trunk with inner central leaf
 * - Symmetrical emerald leaves with 4 signature golden fruit leaves
 * - Grounded calligraphic root flare
 */
export const EduTreeMark: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-10 h-10", 
  size = 48 
}) => {
  const width = size;
  const height = (size * 114) / 100;

  return (
    <svg
      viewBox="0 0 200 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      style={{ width, height }}
      aria-label="Edu Family Office Tree Emblem"
    >
      {/* 1. TOP GOLDEN 4-POINT STAR */}
      <path
        d="M100 4 C100.8 17 101.5 22 108 26 C101.5 30 100.8 35 100 48 C99.2 35 98.5 30 92 26 C98.5 22 99.2 17 100 4 Z"
        fill="#C5A059"
      />

      {/* 2. 4 GOLDEN ACCENT LEAVES (2 Upper Outer, 2 Lower Outer) */}
      {/* Top Left Golden Leaf */}
      <path
        d="M50 63 C44 70 45 83 56 83 C59 74 57 66 50 63 Z"
        fill="#C5A059"
      />
      {/* Top Right Golden Leaf */}
      <path
        d="M150 63 C156 70 155 83 144 83 C141 74 143 66 150 63 Z"
        fill="#C5A059"
      />
      {/* Bottom Left Golden Leaf */}
      <path
        d="M44 126 C38 133 39 146 50 146 C53 137 51 129 44 126 Z"
        fill="#C5A059"
      />
      {/* Bottom Right Golden Leaf */}
      <path
        d="M156 126 C162 133 161 146 150 146 C147 137 149 129 156 126 Z"
        fill="#C5A059"
      />

      {/* 3. CENTRAL HEART VERTICAL LEAF */}
      <path
        d="M100 78 C96 87 96 99 100 106 C104 99 104 87 100 78 Z"
        fill="#0E3B2E"
      />

      {/* 4. TOP CANOPY EMERALD LEAVES */}
      {/* Top Center Left */}
      <path
        d="M87 42 C80 47 79 59 89 60 C92 53 91 46 87 42 Z"
        fill="#0E3B2E"
      />
      {/* Top Center Right */}
      <path
        d="M113 42 C120 47 121 59 111 60 C108 53 109 46 113 42 Z"
        fill="#0E3B2E"
      />
      {/* Upper In-between Left */}
      <path
        d="M68 46 C60 52 61 65 72 65 C74 57 73 50 68 46 Z"
        fill="#0E3B2E"
      />
      {/* Upper In-between Right */}
      <path
        d="M132 46 C140 52 139 65 128 65 C126 57 127 50 132 46 Z"
        fill="#0E3B2E"
      />

      {/* 5. MID CANOPY EMERALD LEAVES (Outer & Inner Clusters) */}
      {/* Mid Left Outer Upper */}
      <path
        d="M38 78 C30 84 31 97 42 97 C44 89 43 82 38 78 Z"
        fill="#0E3B2E"
      />
      {/* Mid Right Outer Upper */}
      <path
        d="M162 78 C170 84 169 97 158 97 C156 89 157 82 162 78 Z"
        fill="#0E3B2E"
      />
      {/* Mid Left Outer Lower */}
      <path
        d="M33 99 C25 105 27 118 38 117 C39 109 38 103 33 99 Z"
        fill="#0E3B2E"
      />
      {/* Mid Right Outer Lower */}
      <path
        d="M167 99 C175 105 173 118 162 117 C161 109 162 103 167 99 Z"
        fill="#0E3B2E"
      />
      {/* Far Outer Left Tip */}
      <path
        d="M31 120 C23 125 24 137 35 136 C36 128 36 123 31 120 Z"
        fill="#0E3B2E"
      />
      {/* Far Outer Right Tip */}
      <path
        d="M169 120 C177 125 176 137 165 136 C164 128 164 123 169 120 Z"
        fill="#0E3B2E"
      />

      {/* 6. INNER CANOPY EMERALD LEAVES (Branch Arch Clusters) */}
      {/* Inner Left Top Arch */}
      <path
        d="M74 74 C67 80 69 92 79 91 C81 83 79 77 74 74 Z"
        fill="#0E3B2E"
      />
      {/* Inner Right Top Arch */}
      <path
        d="M126 74 C133 80 131 92 121 91 C119 83 121 77 126 74 Z"
        fill="#0E3B2E"
      />
      {/* Inner Left Mid Arch */}
      <path
        d="M62 97 C54 103 56 115 66 114 C68 106 67 100 62 97 Z"
        fill="#0E3B2E"
      />
      {/* Inner Right Mid Arch */}
      <path
        d="M138 97 C146 103 144 115 134 114 C132 106 133 100 138 97 Z"
        fill="#0E3B2E"
      />
      {/* Inner Left Lower Branch */}
      <path
        d="M58 119 C50 125 52 137 62 136 C64 128 63 122 58 119 Z"
        fill="#0E3B2E"
      />
      {/* Inner Right Lower Branch */}
      <path
        d="M142 119 C150 125 148 137 138 136 C136 128 137 122 142 119 Z"
        fill="#0E3B2E"
      />
      {/* Inner Center Left Near Trunk */}
      <path
        d="M82 103 C75 109 77 120 87 119 C88 112 87 106 82 103 Z"
        fill="#0E3B2E"
      />
      {/* Inner Center Right Near Trunk */}
      <path
        d="M118 103 C125 109 123 120 113 119 C112 112 113 106 118 103 Z"
        fill="#0E3B2E"
      />

      {/* 7. DOUBLE-HELIX INTERTWINED TRUNK & CANOPY BRANCHES */}
      {/* Left Trunk Strand Weave */}
      <path
        d="M100 66 C90 82 82 98 94 116 C106 132 112 148 104 168 C96 182 88 196 82 208 C68 212 48 215 32 216 C58 214 74 208 86 196 C98 180 94 162 86 146 C76 128 80 108 92 90 C96 82 98 74 100 66 Z"
        fill="#0E3B2E"
      />
      {/* Right Trunk Strand Weave */}
      <path
        d="M100 66 C110 82 118 98 106 116 C94 132 88 148 96 168 C104 182 112 196 118 208 C132 212 152 215 168 216 C142 214 126 208 114 196 C102 180 106 162 114 146 C124 128 120 108 108 90 C104 82 102 74 100 66 Z"
        fill="#0E3B2E"
      />

      {/* 8. MAIN CANOPY BRANCH ARCS (Organic Outward Sweeps) */}
      {/* Upper Left Branch Sweep */}
      <path
        d="M96 74 C86 64 74 58 58 64 C70 66 80 76 88 88 Z"
        fill="#0E3B2E"
      />
      {/* Upper Right Branch Sweep */}
      <path
        d="M104 74 C114 64 126 58 142 64 C130 66 120 76 112 88 Z"
        fill="#0E3B2E"
      />
      {/* Mid Left Branch Sweep */}
      <path
        d="M90 102 C76 96 56 96 38 108 C54 104 72 108 84 120 Z"
        fill="#0E3B2E"
      />
      {/* Mid Right Branch Sweep */}
      <path
        d="M110 102 C124 96 144 96 162 108 C146 104 128 108 116 120 Z"
        fill="#0E3B2E"
      />
      {/* Lower Left Branch Sweep */}
      <path
        d="M84 134 C68 132 50 138 36 150 C50 144 68 144 80 152 Z"
        fill="#0E3B2E"
      />
      {/* Lower Right Branch Sweep */}
      <path
        d="M116 134 C132 132 150 138 164 150 C150 144 132 144 120 152 Z"
        fill="#0E3B2E"
      />

      {/* 9. ROOT BASE GROUND FLARE */}
      <path
        d="M88 200 C94 206 100 212 100 218 C100 212 106 206 112 200 C104 202 96 202 88 200 Z"
        fill="#0E3B2E"
      />
      <path
        d="M30 216 C58 214 82 208 100 206 C118 208 142 214 170 216 C144 212 122 202 100 202 C78 202 56 212 30 216 Z"
        fill="#0E3B2E"
      />
    </svg>
  );
};

export const EduFamilyOfficeLogo: React.FC<LogoProps> = ({
  className = "",
  variant = 'full-horizontal',
  theme = 'light',
  size = 'md',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#0E3B2E]';
  const subTextColor = isDark ? 'text-[#D4AF37]' : 'text-[#967432]';
  const lineCol = isDark ? '#D4AF37' : '#C5A059';

  const markSizes = {
    sm: 32,
    md: 42,
    lg: 56,
    xl: 72,
  };

  if (variant === 'mark-only') {
    return <EduTreeMark size={markSizes[size]} className={className} />;
  }

  if (variant === 'full-vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <EduTreeMark size={markSizes[size] || 56} />
        <div className="mt-3">
          <div className={`text-2xl sm:text-3xl font-serif-tc font-bold tracking-[0.2em] ${textColor} pl-1.5`}>
            學涯家辦
          </div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="w-6 h-[1px]" style={{ backgroundColor: lineCol }} />
            <span className={`text-[11px] sm:text-xs tracking-[0.25em] font-cinzel uppercase font-semibold ${subTextColor}`}>
              Edu Family Office
            </span>
            <span className="w-6 h-[1px]" style={{ backgroundColor: lineCol }} />
          </div>
        </div>
      </div>
    );
  }

  // full-horizontal default
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <EduTreeMark size={markSizes[size]} />
      <div className="flex flex-col justify-center">
        <div className={`text-xl sm:text-2xl font-serif-tc font-bold tracking-[0.18em] leading-tight ${textColor}`}>
          學涯家辦
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-3.5 h-[1px]" style={{ backgroundColor: lineCol }} />
          <span className={`text-[9.5px] sm:text-[10.5px] tracking-[0.22em] font-cinzel uppercase font-semibold ${subTextColor} whitespace-nowrap`}>
            Edu Family Office
          </span>
          <span className="w-3.5 h-[1px]" style={{ backgroundColor: lineCol }} />
        </div>
      </div>
    </div>
  );
};
