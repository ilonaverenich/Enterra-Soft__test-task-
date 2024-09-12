import React, { useState, useEffect } from 'react';


const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1; 
        } else {
          clearInterval(interval); 
          setTimeout(() => setProgress(0), 2000); 
          return prev;
        }
      });
    }, 200);

    return () => clearInterval(interval); 
  }, [progress]); 

  return (
    <div className="loader-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loading-text">Loadind {progress}%</div>
    </div>
  );
};

export default Loader;
