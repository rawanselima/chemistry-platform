import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { GiChemicalDrop } from "react-icons/gi";

interface CardData {
  id: number;
  feedback: string;
  title: string;
  level: string;
}

interface CardProps {
  card: CardData;
  index: number;
  activeIndex: number;
  totalCards: number;
  visibleCards: number;
}

function CardFeedback({
  card,
  index,
  activeIndex,
  totalCards,
  visibleCards,
}: CardProps) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) offset -= totalCards;
  else if (offset < -totalCards / 2) offset += totalCards;

  const isVisible = Math.abs(offset) <= Math.floor(visibleCards / 2);

  const animate = {
    x: `${offset * (visibleCards === 1 ? 100 : 40)}%`,
    scale: offset === 0 ? 1 : 0.85 - Math.abs(offset) * 0.05,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 30 },
  };

  return (
    <motion.div
      className="absolute w-[85%] sm:w-[60%] md:w-[40%] lg:w-[28%] h-[80%] text-dark-purple bg-[#f6f5ff] p-10 rounded-3xl shadow-lg"
      style={{ transformStyle: "preserve-3d" }}
      animate={animate}
      initial={false}
    >
      <img
        src="/assets/quote.png"
        alt={card.title}
        className="absolute -top-5 left-5 w-15"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x600/1e1e1e/ffffff?text=Image+Missing";
        }}
      />
      <div className="relative w-full h-full  overflow-hidden">
        <div>{card.feedback}</div>
        <div className="absolute bottom-0 left-0 right-0 p-3 text-gray font-medium text-sm">
          <p className="flex items-center gap-1">
            <BsPerson /> {card.title}
          </p>
          <p className="flex items-center gap-1">
            <GiChemicalDrop /> {card.level}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CardFeedback;
