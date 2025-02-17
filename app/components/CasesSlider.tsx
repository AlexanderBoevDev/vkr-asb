"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CasesSliderProps } from "@/types/cases-slider";

// Анимации (slideshow)
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 200 : -200,
    scale: 0.9,
    opacity: 0
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 200 : -200,
    scale: 1.05,
    opacity: 0,
    zIndex: 0,
    transition: {
      duration: 1.0,
      ease: "easeInOut"
    }
  })
};

// Анимации текста (левая часть)
const textVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -40
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    x: -40,
    transition: {
      duration: 0.6,
      ease: "easeIn"
    }
  }
};

// Родитель для "ступенчатых" картинок (управляет stagger появлением)
const stackParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  },
  exit: {}
};

// Каждый снимок в «стопке»
const stackChild = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    rotate: 0
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    // Лёгкий рандом/смещение поворота
    rotate: index === 0 ? -2 : index === 2 ? 2 : 0,
    transition: {
      duration: 1.0,
      ease: "easeInOut"
    }
  }),
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: "easeIn"
    }
  }
};

export default function CasesSlider({ projects }: CasesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let next = prevIndex + newDirection;
      if (next < 0) next = projects.length - 1;
      if (next >= projects.length) next = 0;
      return next;
    });
  };
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          <motion.div
            className="
              absolute
              lg:relative
              top-[10%] md:top-[20%] lg:top-auto
              w-full lg:w-2/4 xl:w-2/5
              h-[100vh] md:h-auto
              p-20 xl:p-32 md:pr-0
              flex flex-col md:justify-center
              z-10
            "
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="max-w-xl">
              <span className="inline-block mb-4 px-4 py-1 bg-gray-200/80 dark:bg-dark-1/70 uppercase tracking-widest text-xs">
                {projects[currentIndex].category}
              </span>
              <h2 className="rounded-t-md text-3xl lg:text-5xl font-magistral-bold tracking-wider xl:mb-4 px-4 py-2 xl:p-0 bg-gray-200/80 dark:bg-dark-1/70 xl:bg-transparent dark:xl:bg-transparent">
                {projects[currentIndex].title}
              </h2>
              <p className="font-magistral rounded-b-md md:text-lg mb-6 px-4 py-2 xl:p-0 bg-gray-200/80 dark:bg-dark-1/70 xl:bg-transparent dark:xl:bg-transparent">
                {projects[currentIndex].description}
              </p>
              <Link
                href={projects[currentIndex].link}
                className="
                  inline-flex items-center gap-2
                  bg-dark-1 text-gray-100
                  py-3 px-12
                  rounded-2xl
                  hover:bg-dark-4/70
                  transition-colors shadow-xl
                "
              >
                Смотреть кейс
              </Link>
            </div>
          </motion.div>
          <div className="relative w-full lg:w-1/2 flex items-start justify-start p-4 md:mt-10 xl:mt-24">
            <motion.div
              className="relative w-[300px] h-[420px] md:w-[430px] md:h-[750px]"
              variants={stackParent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {projects[currentIndex].images.map((src, idx) => (
                <motion.div
                  key={src}
                  custom={idx}
                  variants={stackChild}
                  className="
                    absolute
                    w-[300px] h-[420px]
                    md:w-[430px] md:h-[750px]
                    border-dark-1/20
                    border-[1px]
                    rounded-md
                    overflow-hidden
                    shadow-xl shadow-dark-1/50
                  "
                  style={{
                    top: idx * 180,
                    left: idx * 150
                  }}
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${idx}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={() => paginate(-1)}
        className="
          absolute left-5 top-1/2
          -translate-y-1/2
          z-30
          bg-gray-100 dark:bg-dark-1
          hover:bg-dark-1/20 dark:hover:bg-dark-1/50
          p-3
          rounded-full
          backdrop-blur-sm
          transition-colors
          shadow-xl
        "
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="
          absolute right-5 top-1/2
          -translate-y-1/2
          z-30
          bg-gray-100 dark:bg-dark-1
          hover:bg-dark-1/20 dark:hover:bg-dark-1/50
          p-3
          rounded-full
          backdrop-blur-sm
          transition-colors
          shadow-xl
        "
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {projects.map((_, idx) => {
          const dir = idx > currentIndex ? 1 : -1;
          return (
            <button
              key={`pagination-${idx}`}
              onClick={() => {
                if (idx === currentIndex) return;
                setDirection(dir);
                setCurrentIndex(idx);
              }}
              className={`
                block h-2 rounded-full transition-all border-dark-1 border-[1px]
                ${
                  idx === currentIndex
                    ? "bg-white w-8"
                    : "bg-gray-100/50 w-2 hover:bg-gray-200/50"
                }
              `}
            />
          );
        })}
      </div>
    </>
  );
}
