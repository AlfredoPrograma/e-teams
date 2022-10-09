import { Link } from "react-router-dom";
import { Children } from "types/Children";

interface FormCardProps {
  children: Children;
  title: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
}

const FormCard = ({
  children,
  title,
  footerText,
  footerLinkText,
  footerLinkTo,
}: FormCardProps) => {
  return (
    <section className="px-8 py-6 bg-white shadow-xl rounded-md flex flex-col gap-6">
      <header>
        <h1 className="text-center text-3xl font-bold">{title}</h1>
      </header>

      <div>{children}</div>

      <footer className="text-center">
        <small>
          {footerText} <Link to={footerLinkTo}>{footerLinkText}</Link>
        </small>
      </footer>
    </section>
  );
};
export default FormCard;
