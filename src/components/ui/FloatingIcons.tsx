import { motion } from 'framer-motion';
import { Gamepad, Music, Palette, Camera, Heart, Star, Coffee, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

const icons = [
  { Icon: Gamepad, color: 'text-vaporwave-pink' },
  { Icon: Music, color: 'text-vaporwave-blue' },
  { Icon: Palette, color: 'text-vaporwave-purple' },
  { Icon: Camera, color: 'text-vaporwave-yellow' },
  { Icon: Heart, color: 'text-vaporwave-pink' },
  { Icon: Star, color: 'text-vaporwave-blue' },
  { Icon: Coffee, color: 'text-vaporwave-purple' },
  { Icon: Sparkles, color: 'text-vaporwave-yellow' },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          icon={icon}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingIcon({ icon: { Icon, color }, style }: any) {
  return (
    <motion.div
      className="absolute"
      style={style}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <Icon className={cn("w-6 h-6 opacity-50", color)} />
    </motion.div>
  );
}