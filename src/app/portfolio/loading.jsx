import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
        <p className="text-gray-600 dark:text-gray-400">Loading portfolio...</p>
      </div>
    </div>
  );
}
