import React from 'react'

const Spinner = () => {
  return (
    <div className="spinner">
      {Array(12).fill().map((_, i) => (
        <div key={i} className={`circle circle-${i + 1}`}></div>
      ))}
    </div>
  );
};

export default Spinner