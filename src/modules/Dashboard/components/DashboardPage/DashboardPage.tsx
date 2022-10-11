import { Children } from "types";

interface DashboardPageProps {
  children: Children;
}

const DashboardPage = ({ children }: DashboardPageProps) => {
  return <div className="p-8 h-full overflow-hidden">{children}</div>;
};
export default DashboardPage;
