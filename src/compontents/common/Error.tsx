import { motion } from "framer-motion";
import { Home, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-transparent min-h-[80vh] w-full flex flex-col items-center justify-center p-4 overflow-hidden relative group">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-simon/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10 max-w-2xl relative"
      >
        {/* Large 404 Text */}
        <motion.h1
          className="text-[180px] md:text-[220px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple via-simon to-dark-purple select-none drop-shadow-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 -mt-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-purple font-tajawal">
            Oops! Page Not Found
          </h2>
          <p className="text-gray md:text-lg max-w-md mx-auto font-tajawal">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 font-tajawal"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-purple text-purple font-bold hover:bg-purple/5 transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            <MoveLeft className="w-5 h-5" />
            Go Back
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/teacherDashboard")}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple to-simon text-white font-bold shadow-lg shadow-purple/25 hover:shadow-purple/40 transition-all cursor-pointer"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </motion.button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Error;
