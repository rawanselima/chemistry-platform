import React, { useState, useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import CardFeedback from "./CardFeedback";
import { cardData } from "./dataFeedback";


interface IconProps {
  className?: string;
}

const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);


export default function FeedbackSlider() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(cardData.length / 2)
  );
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayDelay = 3000;
  const [visibleCards, setVisibleCards] = useState(7);

  // ✅ Responsive: adjust number of visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1); // mobile
      else if (window.innerWidth < 1024) setVisibleCards(3); // tablet
      else setVisibleCards(7); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % cardData.length);

  useEffect(() => {
    if (!isPaused)
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [isPaused, activeIndex]);

  const changeSlide = (newIndex: number) => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    if (!isPaused)
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
  };

  const onDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex + 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex - 1);
    }
  };

  return (
    <section className="w-full flex-col items-center justify-center font-sans overflow-hidden bg-transparent">
      <div
        className="w-[90%] mx-auto p-4 pt-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative flex w-full flex-col rounded-3xl border border-white/10 bg-transparent p-4 pt-0 md:p-6 md:pt-0">
          {/* Slider */}
          <div className="relative w-full h-[250px] flex items-center justify-center overflow-visible pt-12">
            {/* Left Arrow */}
            <button
              onClick={() => changeSlide(activeIndex - 1)}
              className="absolute left-0 md:left-4 z-10 p-2 rounded-full border border-purple text-purple bg-white/80 hover:bg-purple hover:text-white shadow transition"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <motion.div
              className="w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
            >
              {cardData.map((card, index) => (
                <CardFeedback
                  key={card.id}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={cardData.length}
                  visibleCards={visibleCards}
                />
              ))}
            </motion.div>

            {/* Right Arrow */}
            <button
              onClick={() => changeSlide(activeIndex + 1)}
              className="absolute right-0 md:right-4 z-10 p-2 rounded-full border border-purple text-purple bg-white/80 hover:bg-purple hover:text-white shadow transition"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {cardData.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  activeIndex === index
                    ? "w-6 bg-purple"
                    : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-purple/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

