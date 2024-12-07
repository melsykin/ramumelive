import { motion } from 'framer-motion';
import { Sparkles, Brush, Star } from 'lucide-react';
import { FloatingIcons } from '../ui/FloatingIcons';
import { Avatar } from '../ui/Avatar';
import { RetroBackground } from '../ui/RetroBackground';

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-900/30 to-vaporwave-purple/20">
      <RetroBackground />
      <FloatingIcons />
      
      <div className="container mx-auto px-4 py-20 relative z-50 flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Avatar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-6 backdrop-blur-sm bg-black/50 p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-vaporwave-pink via-vaporwave-blue to-vaporwave-purple bg-clip-text text-transparent animate-gradient-x">
              Ramune Live
            </h1>

            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Live2D Animation Specialist
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-white/80">
                <Stat icon={<Brush className="w-5 h-5" />} text="6 Years Experience" />
                <Stat icon={<Star className="w-5 h-5" />} text="100+ VTubers Animated" />
              </div>

              <p className="text-lg text-white/90 leading-relaxed">
                Hey there! I'm Ramune, specializing in bringing VTuber characters to life through smooth, 
                flowy Live2D animations. With 6 years of animation expertise, I've had the joy of animating 
                nearly 100 VTuber models, adding that special touch of movement and personality to each character.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center gap-4 pt-6"
            >
              <a
                href="#services"
                className="px-8 py-3 rounded-full bg-vaporwave-pink text-white font-semibold hover:bg-vaporwave-pink/80 transition-colors flex items-center gap-2 hover:scale-105 transform duration-200"
              >
                <Sparkles size={20} />
                View Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}