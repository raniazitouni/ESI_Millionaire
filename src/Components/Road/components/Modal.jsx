import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";

const Modal = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Round 1",
      content:
        "Two teams, each consisting of eight participants, will compete. In each matchup, two participants from opposing teams will face off. The first participant to respond gets to answer a question and can choose between a question worth 1 point or a more challenging question worth 3 points. The team with the most points at the end of the round will be declared the winner.",
    },
    {
      title: "Round 2",
      content:
        "The winning team from Round 1 will be divided into two teams of four participants each. In this round, each participant will have the opportunity to answer two questions, following the same rules as Round 1.",
    },
    {
      title: "Round 3",
      content:
        "This round follows the same rules as Round 2, but each team will consist of only two participants. Each participant will again have two questions to answer.",
    },
    {
      title: "Round 4",
      content:
        "The final round features the winning team from Round 3, divided into two individual competitors. These participants will compete head-to-head, answering a total of five questions. ",
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
          {/* <p className="text-lg mb-6 font-poppins">
            The ESI Millionaire event is an exciting quiz competition inspired
            by the popular game show "Who Wants to Be a Millionaire."
          </p> */}
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
