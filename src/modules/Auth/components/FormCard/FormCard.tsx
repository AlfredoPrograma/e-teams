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
    <section className="rounded-lg flex flex-col gap-6 w-3/4 md:1/2 xl:w-1/4">
      <header>
        <h1 className="text-center text-5xl text-primary-500 font-bold">
          {title}
        </h1>
      </header>

      <div>{children}</div>

      <footer className="text-center">
        <p>
          {footerText}{" "}
          <Link to={footerLinkTo}>
            <span className="text-primary-500 font-bold transition-all hover:text-primary-600">
              {footerLinkText}
            </span>
          </Link>
        </p>
      </footer>
    </section>
  );
};
export default FormCard;
