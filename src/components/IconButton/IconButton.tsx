import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import { Children } from "types";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: Children;
  onClick: () => void;
}

const IconButton = ({
  children,
  onClick,
  className,
  ...delegated
}: IconButtonProps) => {
  return (
    <button
      className={classNames(
        "h-12 w-12 rounded-full cursor-pointer text-2xl transition-all hover:bg-primary-600",
        className,
      )}
      onClick={onClick}
      {...delegated}
    >
      {children}
    </button>
  );
};
export default IconButton;
