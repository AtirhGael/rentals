import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
// warms up the browser for faster load and efficiency which make the login process faster and hence improve the perfomance of the app