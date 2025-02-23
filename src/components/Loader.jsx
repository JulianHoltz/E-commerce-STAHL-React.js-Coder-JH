import React from 'react';
import { BarLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div
      style={{
        width: '100vw',          
        height: '40vh',         
        display: 'flex',         
        justifyContent: 'center', 
        alignItems: 'center',    
        zIndex: 1000            
      }}
    >
      <BarLoader
        color="#cbd5e1"
        speedMultiplier={0.5}
        width={300}
      />
    </div>
  );
};

export default Loader;
