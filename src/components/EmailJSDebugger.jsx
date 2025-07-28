"use client";
import { useState } from 'react';
import { emailService } from '@/lib/emailService';

// Debugging component for EmailJS testing
export default function EmailJSDebugger() {
  const [debugInfo, setDebugInfo] = useState(null);
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runDiagnosis = () => {
    const diagnosis = emailService.diagnose();
    setDebugInfo(diagnosis);
  };

  const testEmail = async () => {
    setIsLoading(true);
    setTestResult(null);

    try {
      const result = await emailService.sendContactMessage({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test email from the EmailJS debugger.',
        subject: 'EmailJS Test'
      });

      setTestResult(result);
    } catch (error) {
      setTestResult({
        success: false,
        error: error.message,
        details: 'Test email failed'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        EmailJS Debugger
      </h2>

      {/* Environment Variables Check */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
          Environment Variables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'SERVICE_ID', value: process.env.NEXT_PUBLIC_SERVICE_ID },
            { name: 'TEMPLATE_ID', value: process.env.NEXT_PUBLIC_TEMPLATE_ID },
            { name: 'PUBLIC_KEY', value: process.env.NEXT_PUBLIC_PUBLIC_KEY }
          ].map(({ name, value }) => (
            <div key={name} className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {name}
              </div>
              <div className="mt-1">
                {value ? (
                  <span className="text-green-600 dark:text-green-400">✅ Configured</span>
                ) : (
                  <span className="text-red-600 dark:text-red-400">❌ Missing</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnosis Button */}
      <div className="mb-6">
        <button
          onClick={runDiagnosis}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Run EmailJS Diagnosis
        </button>
      </div>

      {/* Diagnosis Results */}
      {debugInfo && (
        <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">
            Diagnosis Results
          </h4>
          <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
      )}

      {/* Test Email Button */}
      <div className="mb-6">
        <button
          onClick={testEmail}
          disabled={isLoading}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400 transition-colors"
        >
          {isLoading ? 'Sending Test Email...' : 'Send Test Email'}
        </button>
      </div>

      {/* Test Results */}
      {testResult && (
        <div className={`p-4 rounded ${
          testResult.success 
            ? 'bg-green-100 dark:bg-green-900 border-green-500' 
            : 'bg-red-100 dark:bg-red-900 border-red-500'
        } border`}>
          <h4 className={`font-semibold mb-2 ${
            testResult.success 
              ? 'text-green-800 dark:text-green-200' 
              : 'text-red-800 dark:text-red-200'
          }`}>
            Test Result: {testResult.success ? 'SUCCESS' : 'FAILED'}
          </h4>
          <pre className={`text-sm overflow-x-auto ${
            testResult.success 
              ? 'text-green-700 dark:text-green-300' 
              : 'text-red-700 dark:text-red-300'
          }`}>
            {JSON.stringify(testResult, null, 2)}
          </pre>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900 rounded border border-yellow-500">
        <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
          Debugging Instructions
        </h4>
        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>1. Check that all environment variables show "✅ Configured"</li>
          <li>2. Run diagnosis to see EmailJS configuration status</li>
          <li>3. Send test email to verify EmailJS functionality</li>
          <li>4. Check browser console for additional error details</li>
          <li>5. Verify Vercel environment variables if in production</li>
        </ul>
      </div>
    </div>
  );
}
