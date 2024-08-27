import React from 'react';

interface ProgressCircleProps {
  percentage: number;
}

const LoadingBar: React.FC<ProgressCircleProps> = ({ percentage }) => {
  const rotateValue = (percentage / 100) * 360;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">loading..</div>
    </div>
  );
};

export default LoadingBar;
