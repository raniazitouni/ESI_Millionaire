import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";

const Modal = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Teams",
      content:
        "Teams can consist of up to four members, each contributing their knowledge to answer quiz questions and progress through the rounds.",
    },
    {
      title: "Round 1",
      content:
        "Round 1 will consist of general knowledge questions. Teams must answer these questions within a limited time to proceed to the next round.",
    },
    {
      title: "Round 2",
      content:
        "Round 2 will feature more challenging questions. Only the top teams will advance, competing for the ultimate prize.",
    },
  ];

  const toggleSection = (sectionIndex) => {
    setActiveSection((prevIndex) =>
      prevIndex === sectionIndex ? null : sectionIndex
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-custom-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-custom-black border-2 border-custom-gold rounded-lg p-8 w-[85%] md:w-full max-w-3xl text-custom-white relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-custom-gold font-impact">
              RULES
            </h2>
            <button
              className="text-custom-gold text-3xl hover:text-light-gold transition-colors"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>
          <p className="text-lg mb-6 font-poppins">
            The ESI Millionaire event is an exciting quiz competition inspired
            by the popular game show "Who Wants to Be a Millionaire."
          </p>
          <ul className="space-y-4 font-semibold">
            {sections.map((section, index) => (
              <li
                key={index}
                className="cursor-pointer font-poppins"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center space-x-2">
                  <AiOutlineRight
                    className={`transition-transform ${
                      activeSection === index ? "rotate-90" : ""
                    }`}
                  />
                  <span>{section.title}</span>
                </div>
                {activeSection === index && (
                  <p className="text-base mt-2 ml-6">{section.content}</p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
