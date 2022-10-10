import classNames from "classnames";
import { LoadingSpinner } from "components/LoadingSpinner";
import { ButtonHTMLAttributes } from "react";
import { Children } from "types/Children";

type ButtonVariants = "contained" | "outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: Children | string;
  className?: string;
  isLoading?: boolean;
  includeSpinner?: boolean;
  variant?: ButtonVariants;
}

const BUTTON_VARIANT_CLASSNAMES: Record<ButtonVariants, string> = {
  contained: "bg-primary-500 text-white hover:bg-primary-600",
  outlined:
    "bg-transparent text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-white",
};

const Button = ({
  children,
  className,
  isLoading,
  includeSpinner,
  variant = "contained",
  ...delegated
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "flex justify-center border-2 px-3 py-3 rounded-lg font-bold transition-all",
        BUTTON_VARIANT_CLASSNAMES[variant],
        className,
      )}
      {...delegated}
    >
      {isLoading && includeSpinner ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;
