import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { appRouter } from "routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContextProvider } from "context/ToastContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContextProvider>
        <RouterProvider router={appRouter} />
      </ToastContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
