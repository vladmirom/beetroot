import { useState, useEffect } from 'react';

// Scereen resize. 
function useWindowSize() {
  const [windowSize, setWindowSize] = useState([0, 0]);
  
  useEffect(() => {
    function updateWindowSize() {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
  
    window.addEventListener('resize', updateWindowSize);
  
    updateWindowSize()
  
    return () => window.removeEventListener('resize', updateWindowSize);
  }, [])

  return windowSize;
}

export default useWindowSize;