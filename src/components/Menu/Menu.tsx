import { offset, useFloating } from "@floating-ui/react-dom";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { generateAnimationData } from "helpers/generateAnimationData";

// TODO: ANIMATIONS MUST BE A PROP (FLOATING MENUS MUST BE GENERIC AND ADABTABLE TO ANIMATIONS)
const MENU_ANIMATIONS: Variants = {
  initial: {
    y: -25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -5,
    opacity: 0,
  },
};

const ANIMATION_DATA = generateAnimationData(MENU_ANIMATIONS);

interface MenuProps {
  options: string[];
  openButtonElement: JSX.Element;
  isOpen: boolean;
}

const Menu = ({ options, openButtonElement, isOpen }: MenuProps) => {
  const { x, y, reference, floating, strategy } = useFloating({
    middleware: [offset(10)],
  });

  const FLOATING_STYLE = {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
  };

  return (
    <>
      <div ref={reference}>{openButtonElement}</div>
      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            key="menu"
            ref={floating}
            className="bg-white ml-auto py-4 mr-auto rounded-md shadow-md flex flex-col gap-2"
            style={FLOATING_STYLE}
            {...ANIMATION_DATA}
          >
            {options.map((option) => (
              // TODO: IMPROVE MENU ITEM COMPONENT
              // GENERIC ICONS
              // GENERIC TEXT
              // GENERIC FUNCTIONALITY
              <li
                key={option}
                className="flex gap-4 items-center uppercase px-6 cursor-pointer hover:text-secondary-500"
              >
                <i className="fas fa-user text-sm" />
                <span>{option}</span>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Menu;
