import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ErrorBoundary from "./components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
      <Analytics />
    </ErrorBoundary>
  );
}

export default App;