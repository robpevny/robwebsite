import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 text-center px-8 bg-gradient-to-br from-orange-50 to-yellow-100">
          <p className="text-6xl font-bold text-orange-300">Oops</p>
          <p className="text-2xl text-gray-700">Something went wrong.</p>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
