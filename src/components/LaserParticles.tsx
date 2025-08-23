'use client';

export default function LaserParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* CSS-based Laser Particles Effect */}
      <div className="relative w-full h-full">
        {/* Generate multiple animated particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#5A9B9B', '#7BA05B', '#4A6B7C', '#2D5A5A'][Math.floor(Math.random() * 4)],
              opacity: 0.3 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`
            }}
          />
        ))}
        
        {/* Moving laser beams */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`beam-${i}`}
            className="absolute animate-pulse"
            style={{
              width: '1px',
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#5A9B9B',
              opacity: 0.2 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px #5A9B9B'
            }}
          />
        ))}
        
        {/* Floating orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-bounce"
            style={{
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#5A9B9B', '#7BA05B'][Math.floor(Math.random() * 2)],
              borderRadius: '50%',
              opacity: 0.4 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 1.5}s`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${6 + Math.random() * 12}px currentColor`
            }}
          />
        ))}
      </div>
    </div>
  );
}
