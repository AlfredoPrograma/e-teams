import classNames from "classnames";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  className?: string;
  autoComplete?: string;
}

const Textfield = ({
  type,
  placeholder,
  className,
  onChange,
  name,
  value,
  autoComplete = "off",
  ...delegated
}: TextfieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        "border-2 border-gray-400 px-3 py-2 rounded-md outline-none focus:border-gray-700",
        className,
      )}
      onChange={onChange}
      name={name}
      value={value}
      autoComplete={autoComplete}
      {...delegated}
    />
  );
};

export default Textfield;
