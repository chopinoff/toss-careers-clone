'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Device = 'desktop' | 'mobile';

interface WindowSize {
  width: number;
  height: number;
  device: Device;
}

const WindowSizeContext = createContext<WindowSize | undefined>(undefined);

export const useWindowSize = (): WindowSize => {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error('useWindowSize must be used within a WindowSizeProvider');
  }
  return context;
};

const getDeviceType = (width: number): Device => {
  if (width < 6640) return 'mobile';
  return 'desktop';
};

export const WindowSizeProvider = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    device: 'desktop',
  });

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        device: getDeviceType(window.innerWidth),
      });
    };

    if (isClient) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (isClient) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isClient]);

  return <WindowSizeContext.Provider value={windowSize}>{children}</WindowSizeContext.Provider>;
};
