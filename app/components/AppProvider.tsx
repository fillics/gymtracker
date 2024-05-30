"use client";

import { useEffect } from 'react';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from '../../firebase';
import React from 'react';

const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      isSupported().then((supported) => {
        if (supported) {
          getAnalytics(app);
        }
      }).catch(error => {
        console.error('Analytics initialization failed:', error);
      });
    }
  }, []);

  return <>{children}</>;
};

export default AppProvider;
