import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedLowpolyBackgroundProps {
  scaleConfig: number[];
}

export default function AnimatedLowpolyBackground({ scaleConfig }: AnimatedLowpolyBackgroundProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.15,
        pointerEvents: "none",
      }}
      animate={{
        rotate: [10, 8, 5, 4, 5, 8, 10],
        scale: scaleConfig,
        x: [0, 5, -5, 0],
        y: [0, 5, -5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <Image
        src="/image/introduction/lowpoly_pattern.svg"
        alt="Lowpoly Background"
        layout="fill"
        objectFit="cover"
        quality={75}
      />
    </motion.div>
  );
} 