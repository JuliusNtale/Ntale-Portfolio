import EmailJSDebugger from '@/components/EmailJSDebugger';

export default function EmailJSTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          EmailJS Testing & Debugging
        </h1>
        <EmailJSDebugger />
      </div>
    </div>
  );
}
