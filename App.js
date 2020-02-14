import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import Routes from './src/routes';

export default function App() {

  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect( async()=>{
      await loadAsync({
        'dogbyte': require('./assets/fonts/dogbyte.otf')
      });
  }, []);

  return (<Routes/>);
}
