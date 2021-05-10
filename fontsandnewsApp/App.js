import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Provider} from 'react-redux';



import AppNavigation from './scr/navigation/AppNavigation';
import store from './scr/redux/store'


const loadFonts = () => {
  return Font.loadAsync({
    'Dosis': require('./assets/fonts/Dosis-Light.ttf'),
    'Dosis-Bold': require('./assets/fonts/Dosis-Regular.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return(
      <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} onError={console.warn}/>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
      
  );
}

const styles = StyleSheet.create({});
