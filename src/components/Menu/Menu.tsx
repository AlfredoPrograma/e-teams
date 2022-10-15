import { offset, Placement, useFloating } from "@floating-ui/react-dom";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { generateAnimationData } from "helpers/generateAnimationData";
import { useClickOut } from "hooks/useClickOut";
import { useRef } from "react";
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
  closeHandler: () => void;
  animation?: BaseAnimation;
  placement?: Placement;
  className?: string;
}

const Menu = ({
  options,
  openButtonElement,
  animation,
  isOpen,
  closeHandler,
  placement,
  className,
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

  const menuRef = useRef<HTMLElement | null>(null);
  const openButtonRef = useRef<HTMLElement | null>(null);
  useClickOut<HTMLElement>([menuRef, openButtonRef], closeHandler);

  return (
    <>
      <div
        className="grid place-items-center"
        ref={(el) => {
          reference(el);
          openButtonRef.current = el;
        }}
      >
        {openButtonElement}
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            key="menu"
            ref={(el) => {
              floating(el);
              menuRef.current = el;
            }}
            className={classNames(
              "bg-white ml-auto py-4 mr-auto rounded-md shadow-md flex flex-col gap-2",
              className,
            )}
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
