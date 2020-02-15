import React, {useState, useEffect} from 'react';
import {loadAsync} from 'expo-font';
import { StatusBar} from 'react-native';
import { AppLoading } from 'expo';

import Routes from './src/routes';

export default function App() {

  const [isFontLoaded, setIsFontLoaded] = useState(false);

    loadFont = async () => {
        await loadAsync({
          'dogbyte': require('./assets/fonts/dogbyte.otf')
        });
    }
    
  if(!isFontLoaded){
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setIsFontLoaded(true)}
        onError={console.warn}
      />
    ); 
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes/>
    </>
  );
}

