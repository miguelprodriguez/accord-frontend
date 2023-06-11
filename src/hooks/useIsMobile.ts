import { useLayoutEffect, useState } from 'react';

const MOBILE_DEVICE_WIDTH = 768

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < MOBILE_DEVICE_WIDTH);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
