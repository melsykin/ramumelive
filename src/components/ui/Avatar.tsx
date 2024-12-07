import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Avatar() {
  return (
    <motion.div
      className="relative mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300/50 via-purple-300/50 to-pink-300/50 blur-xl animate-pulse-slow" />
      
      {/* Inner container */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Circular frame */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-pink-300/20 animate-spin-slow" />
          
          {/* Image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-black/50 backdrop-blur-sm">
            <img
              src="https://utfs.io/f/dDr5iehbwEVQEI6zcwyDsRu2ic7hgYPNL8kWC9Gmzy5SIdXQ"
              alt="Ramune Live Avatar"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Decorative circles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-4 h-4 rounded-full",
              "bg-gradient-to-r from-blue-300 to-purple-300",
              "animate-bounce",
              i === 0 && "top-0 left-0 delay-0",
              i === 1 && "top-1/2 right-0 delay-150",
              i === 2 && "bottom-0 left-1/2 delay-300"
            )}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}