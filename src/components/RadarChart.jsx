import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RadarChart({ data, color, maxLevels = 5, size = 300 }) {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const cx = size / 2;
  const cy = size / 2;
  const radius = (size / 2) * 0.65; // Leave room for labels
  const N = data.length;
  const angleStep = (Math.PI * 2) / N;

  // Calculate coordinates for a specific value and index
  const getPoint = (value, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / maxLevels) * radius;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  // Generate background grid polygons
  const gridPolygons = [];
  for (let level = 1; level <= maxLevels; level++) {
    const points = data.map((_, i) => {
      const p = getPoint(level, i);
      return `${p.x},${p.y}`;
    }).join(' ');
    gridPolygons.push(points);
  }

  // Generate data polygon
  const dataPoints = data.map((d, i) => {
    const p = getPoint(d.value, i);
    return `${p.x},${p.y}`;
  }).join(' ');

  // Calculate label positions (pushed slightly further out)
  const getLabelPoint = (index) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = radius + 20; // 20px padding for text
    
    // Adjust text anchor based on angle
    let textAnchor = 'middle';
    if (Math.abs(Math.cos(angle)) > 0.1) {
      textAnchor = Math.cos(angle) > 0 ? 'start' : 'end';
    }
    
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      textAnchor
    };
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full cursor-pointer">
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${size} ${size}`} 
        className="max-w-[400px] overflow-visible"
        onMouseLeave={() => setHoveredPoint(null)}
      >
        {/* Background Grid */}
        {gridPolygons.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.1}
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        {data.map((_, i) => {
          const outer = getPoint(maxLevels, i);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={outer.x}
              y2={outer.y}
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeWidth="1"
            />
          );
        })}

        {/* Data Polygon */}
        <polygon
          points={dataPoints}
          fill={color}
          fillOpacity={0.2}
          stroke={color}
          strokeWidth="2"
          className="transition-all duration-500 ease-out pointer-events-none"
        />

        {/* Labels and interactive hover areas */}
        {data.map((d, i) => {
          const p = getLabelPoint(i);
          const point = getPoint(d.value, i);
          
          return (
            <g 
              key={i}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredPoint({ ...d, x: p.x, y: p.y })}
            >
              {/* Invisible larger hit area for easier hovering */}
              <circle cx={p.x} cy={p.y} r={20} fill="transparent" />
              
              <text
                x={p.x}
                y={p.y}
                textAnchor={p.textAnchor}
                alignmentBaseline="middle"
                className="text-[9px] sm:text-[10px] font-medium fill-stone-500 dark:fill-stone-400 group-hover:fill-stone-900 dark:group-hover:fill-stone-100 transition-colors"
              >
                {d.label}
              </text>
              
              {/* Highlight dot that appears on hover at the data value position */}
              <circle
                cx={point.x}
                cy={point.y}
                r={4}
                fill={color}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredPoint && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 pointer-events-none px-2 py-1 rounded-md shadow-lg bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 text-xs font-semibold"
            style={{
              left: `calc(${(hoveredPoint.x / size) * 100}% - 40px)`,
              top: `calc(${(hoveredPoint.y / size) * 100}% + 15px)`,
            }}
          >
            {hoveredPoint.value} {hoveredPoint.value === 1 ? 'Year' : 'Years'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
