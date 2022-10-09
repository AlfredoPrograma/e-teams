import classNames from "classnames";
import { LoadingSpinner } from "components/LoadingSpinner";
import { ButtonHTMLAttributes } from "react";
import { Children } from "types/Children";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: Children | string;
  className?: string;
  isLoading?: boolean;
  includeSpinner?: boolean;
}

const Button = ({
  children,
  className,
  isLoading,
  includeSpinner,
  ...delegated
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "flex justify-center px-3 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800",
        className,
      )}
      {...delegated}
    >
      {isLoading && includeSpinner ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;
