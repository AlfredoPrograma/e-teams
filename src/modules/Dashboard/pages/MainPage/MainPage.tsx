import DashboardPage from "modules/Dashboard/components/DashboardPage/DashboardPage";

const EXAMPLE_COLUMNS = ["to-do", "in-progress", "done", "qa", "testing"];

const MainPage = () => {
  return (
    <DashboardPage>
      <div className="h-full grid grid-cols-5 items-center gap-12">
        {EXAMPLE_COLUMNS.map((column) => (
          <div
            key={column}
            className="h-full rounded-md flex flex-col gap-8 overflow-y-auto"
          >
            <header className="px-8 py-4 rounded-md bg-white shadow-md">
              <h4 className="font-bold uppercase">{column}</h4>
            </header>

            <div className="flex flex-col gap-4">
              <div className="min-h-[10rem] bg-white p-6 shadow-md rounded-md">
                <header>First Todo</header>
              </div>
              <div className="min-h-[10rem] bg-white p-6 shadow-md rounded-md">
                <header>First Todo</header>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardPage>
  );
};

export default MainPage;
