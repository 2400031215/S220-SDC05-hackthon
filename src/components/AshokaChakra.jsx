// Wrapper re-export to maintain old import paths
import AshokaChakraFinal from './AshokaChakraFinal';
export default AshokaChakraFinal;
import React from 'react';

/**
 * AshokChakra - SVG spinner
 * Props
 *  - className: string (extra classes)
 *  - size: number or string (px or CSS length like '80vmin')
 */
const AshokChakra = ({ className = '', size = '72px' }) => {
  const st = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : { width: size, height: size };
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`ashoka-chakra ${className}`.trim()}
      style={{ ...st }}
      role="img"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="#138808" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#138808" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#138808" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 50 + 35 * Math.cos(angle);
        const y1 = 50 + 35 * Math.sin(angle);
        const x2 = 50 + 40 * Math.cos(angle);
        const y2 = 50 + 40 * Math.sin(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#138808" strokeWidth="1.5" />
        );
      })}
    </svg>
  );
};

export default AshokChakra;
import React from 'react';

/**
 * AshokChakra - SVG spinner
 * Props
 *  - className: string (extra classes)
 *  - size: number or string (px or CSS length like '80vmin')
 */
const AshokChakra = ({ className = '', size = '72px' }) => {
  const st = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : { width: size, height: size };
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`ashoka-chakra ${className}`.trim()}
      style={{ ...st }}
      role="img"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="#138808" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#138808" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#138808" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 50 + 35 * Math.cos(angle);
        const y1 = 50 + 35 * Math.sin(angle);
        const x2 = 50 + 40 * Math.cos(angle);
        const y2 = 50 + 40 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#138808"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
};

export default AshokChakra;
import React from 'react';

/**
 * Clean AshokChakra component with optional className and size props.
 */
const AshokChakra = ({ className = '', size = '100px' }) => {
  const st = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : { width: size, height: size };
  return (
    <svg
      viewBox="0 0 100 100"
      className={`ashoka-chakra ${className}`.trim()}
      style={{ ...st, display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="#138808" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#138808" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#138808" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 50 + 35 * Math.cos(angle);
        const y1 = 50 + 35 * Math.sin(angle);
        const x2 = 50 + 40 * Math.cos(angle);
        const y2 = 50 + 40 * Math.sin(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#138808" strokeWidth="1.5" />
        );
      })}
    </svg>
  );
};

export default AshokChakra;
import React from 'react';

/**
 * AshokChakra SVG component
 * Props:
 *  - className: additional CSS classes
 *  - size: width/height in pixels (number or string)
 */
const AshokChakra = ({ className = '', size = 100 }) => {
  const st = { width: typeof size === 'number' ? `${size}px` : size, height: typeof size === 'number' ? `${size}px` : size };
  return (
    <svg
      viewBox="0 0 100 100"
      className={`ashoka-chakra ${className}`}
      style={st}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="#138808" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#138808" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#138808" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 50 + 35 * Math.cos(angle);
        const y1 = 50 + 35 * Math.sin(angle);
        const x2 = 50 + 40 * Math.cos(angle);
        const y2 = 50 + 40 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#138808"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
};

export default AshokChakra;
import React from 'react';

// AshokChakra - SVG-based spinner. Accepts `className` and `size` props.
const AshokChakra = ({ className = '', size = 100 }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`ashoka-chakra ${className}`}
      style={{ width: size, height: size }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="#138808" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#138808" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#138808" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 50 + 35 * Math.cos(angle);
        const y1 = 50 + 35 * Math.sin(angle);
        const x2 = 50 + 40 * Math.cos(angle);
        const y2 = 50 + 40 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#138808"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
};

export default AshokChakra;
import React from 'react';

const AshokChakra = ({ className = '', size = 100 }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`ashoka-chakra ${className}`}
      style={{ width: size, height: size }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="#138808" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#138808" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#138808" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 50 + 35 * Math.cos(angle);
        const y1 = 50 + 35 * Math.sin(angle);
        const x2 = 50 + 40 * Math.cos(angle);
        const y2 = 50 + 40 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#138808"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
};

export default AshokChakra;
import React from 'react';

const AshokChakra = ({ className = '', size = 100 }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`ashoka-chakra ${className}`}
      style={{ width: size, height: size }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="#138808" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#138808" strokeWidth="1" />
      <circle cx="50" cy="50" r="8" fill="#138808" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 50 + 35 * Math.cos(angle);
        const y1 = 50 + 35 * Math.sin(angle);
        const x2 = 50 + 40 * Math.cos(angle);
        const y2 = 50 + 40 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#138808"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
};

export default AshokChakra;
import React from 'react';

const AshokaChakra = () => {
  return (
const AshokChakra = ({ className = '', size = 100 }) => {
    <svg viewBox="0 0 100 100" className={`ashoka-chakra ${className}`} style={{ width: size, height: size }}>
      <circle cx="50" cy="50" r="45" fill="none" stroke="#138808" strokeWidth="2"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#138808" strokeWidth="1"/>
      <circle cx="50" cy="50" r="8" fill="#138808"/>
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 50 + 35 * Math.cos(angle);
        const y1 = 50 + 35 * Math.sin(angle);
        const x2 = 50 + 40 * Math.cos(angle);
        const y2 = 50 + 40 * Math.sin(angle);
        return (
          <line 
            key={i} 
            x1={x1} 
            y1={y1} 
            x2={x2} 
            y2={y2} 
            stroke="#138808" 
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
};

export default AshokaChakra;