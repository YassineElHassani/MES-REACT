import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-500 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      
      <div className="space-x-4">
        <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="bg-gray-200 text-gray-600 px-6 py-3 rounded hover:bg-gray-300">
          Go Back
        </button>
      </div>
    </div>
  );
}