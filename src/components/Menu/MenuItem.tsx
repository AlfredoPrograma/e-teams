import classNames from "classnames";

export interface MenuItemProps {
  text?: string;
  icon?: JSX.Element;
  className?: string;
  onClick?: () => void;
}

const MenuItem = ({ text, icon, onClick, className }: MenuItemProps) => {
  return (
    <li
      onClick={onClick}
      className={classNames(
        "flex gap-4 items-center uppercase px-6 cursor-pointer hover:text-secondary-500",
        className,
      )}
    >
      {icon}
      <span>{text}</span>
    </li>
  );
};

export { MenuItem };
