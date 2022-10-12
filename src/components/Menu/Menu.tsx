import { offset, Placement, useFloating } from "@floating-ui/react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { generateAnimationData } from "helpers/generateAnimationData";
import { BaseAnimation } from "types";
import { MenuItemProps, MenuItem } from "./MenuItem";

const DEFAULT_MENU_ANIMATION: BaseAnimation = {
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

interface MenuProps {
  options: MenuItemProps[];
  openButtonElement: JSX.Element;
  isOpen: boolean;
  animation?: BaseAnimation;
  placement?: Placement;
}

const Menu = ({
  options,
  openButtonElement,
  animation,
  isOpen,
  placement,
}: MenuProps) => {
  const ANIMATION_DATA = generateAnimationData(
    animation ?? DEFAULT_MENU_ANIMATION,
  );
  const { x, y, reference, floating, strategy } = useFloating({
    middleware: [offset(10)],
    placement,
  });

  const FLOATING_STYLE = {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
  };

  return (
    <>
      <div className="grid place-items-center" ref={reference}>
        {openButtonElement}
      </div>
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
              <MenuItem key={option.text} {...option} />
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export { Menu };
