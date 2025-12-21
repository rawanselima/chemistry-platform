import { motion } from "framer-motion";

interface NoItemsProps {
  title?: string;
  message?: string;
  showDecoration?: boolean;
}

const NoItems = ({
  title = "لا توجد عناصر",
  message = "لم يتم العثور على أي عناصر محفوظة في قاعدة البيانات",
  showDecoration = true,
}: NoItemsProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden min-h-[400px]">
      {/* Decorative background gradients */}
      {showDecoration && (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-simon/5 rounded-full blur-[80px] pointer-events-none" />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center z-10 max-w-lg relative"
      >
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-dark-purple mb-3 font-tajawal"
        >
          {title}
        </motion.h3>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray text-base md:text-lg font-tajawal leading-relaxed"
        >
          {message}
        </motion.p>

        {/* Decorative dots */}
        {showDecoration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2 mt-6"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 rounded-full bg-purple"
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default NoItems;
