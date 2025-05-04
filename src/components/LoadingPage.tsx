'use client';

import Loader from './Loader';

interface LoadingPageProps {
  message?: string;
}

const LoadingPage = ({ message }: LoadingPageProps) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-background/95 backdrop-blur-md">
      <Loader size="large" fullScreen={false} />

      {message && (
        <p className="mt-8 text-foreground text-lg font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingPage;
