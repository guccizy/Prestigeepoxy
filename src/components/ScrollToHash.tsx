import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = ({ isLoading }: { isLoading: boolean }) => {
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        const retryScroll = () => {
          const retriedElement = document.getElementById(id);
          if (retriedElement) {
            retriedElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            setTimeout(retryScroll, 50);
          }
        };
        setTimeout(retryScroll, 100); 
      }
    }
  }, [isLoading, location.pathname, location.hash]);

  return null; // This component doesn't render anything visible
};

export default ScrollToHash;

