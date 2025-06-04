import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4" />
      <p className="text-gray-600">טוען...</p>
    </div>
  );
};

export default Loading;