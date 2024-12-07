import { motion } from 'framer-motion';

export function RetroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://utfs.io/f/dDr5iehbwEVQBWlgyLdMZLFBINwn8sA50JHRhOu6Ttyf34Xi)',
          opacity: 0.5,
        }}
      />

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-purple-900/60 mix-blend-multiply" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/70 to-transparent" />

      {/* Enhanced Stars */}
      <div className="absolute inset-0 z-10">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 z-20"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
        }}
      />
    </div>
  );
}