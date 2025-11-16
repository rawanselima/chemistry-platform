import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NestedAccordion from "./NestedAccordion";
import type { Lecture } from "./Data";

interface AccordionProps {
  items: Lecture[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((lecture, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={lecture.title}
            className="border rounded-lg overflow-hidden"
          >
            <button
              className="w-full p-4 bg-gray-200 font-bold flex justify-between items-center"
              onClick={() => toggleItem(index)}
            >
              {lecture.title}
              <span
                className={`transition-transform text-xl ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-3">
                    <NestedAccordion items={lecture.items} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
