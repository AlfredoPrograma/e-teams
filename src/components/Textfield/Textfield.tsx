import classNames from "classnames";
import { ChangeEvent, InputHTMLAttributes } from "react";

type TextfieldVariants = "text" | "outlined";

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  id?: string;
  className?: string;
  autoComplete?: string;
  label?: string;
  variant?: TextfieldVariants;
  leftAddon?: JSX.Element;
}

const TEXTFIELD_VARIANT_CLASSNAMES: Record<TextfieldVariants, string> = {
  text: "border-b-2 bg-transparent px-2 border-dark-600 focus:border-primary-500",
  outlined: "border-2 rounded-md px-4 border-dark-600 focus:border-primary-500",
};

const Textfield = ({
  type,
  placeholder,
  className,
  onChange,
  name,
  value,
  label,
  id,
  leftAddon,
  autoComplete = "off",
  variant = "outlined",
  ...delegated
}: TextfieldProps) => {
  return (
    <div className="w-full flex flex-col gap-1 relative">
      {label && id && (
        <label htmlFor={id} className="text-dark-500 text-sm">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={classNames(
            "py-3 text-dark-900 outline-none transition-all w-full",
            TEXTFIELD_VARIANT_CLASSNAMES[variant],
            leftAddon && "pl-10",
            className,
          )}
          onChange={onChange}
          name={name}
          value={value}
          autoComplete={autoComplete}
          {...delegated}
        />

        {leftAddon && (
          <div className="text-dark-500 absolute left-4 top-1/2 transform -translate-y-1/2">
            {leftAddon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Textfield;
