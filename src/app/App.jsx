import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  return (
    <div className="p-4 text-red-600">
      Something went wrong. Please refresh.
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </ErrorBoundary>
  );
}
