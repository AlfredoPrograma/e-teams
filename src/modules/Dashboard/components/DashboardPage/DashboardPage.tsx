import { Children } from "types";

interface DashboardPageProps {
  children: Children;
}

const DashboardPage = ({ children }: DashboardPageProps) => {
  return <div className="py-10 px-24 h-full overflow-hidden">{children}</div>;
};
export default DashboardPage;
