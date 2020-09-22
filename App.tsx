/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {AppearanceProvider} from 'react-native-appearance';
import {Appearance, useColorScheme} from 'react-native-appearance';
import {View, Text} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/Config';
import {Theme} from './src/Config/theme';
import {NavigationContainer} from '@react-navigation/native';

import AppContainer from './src/Navigation/AppContainer';
const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    white: '#a9a9a9',
    secondaryColor: '#a9a9a9',
    grey: '#a9a9a9',
    blackColor: '#fff',
    
    whiteColor: '#FEE243',
  },
};

const App = () => {
  const colorScheme = useColorScheme();
  const [darkMode, setDarkMode] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const currMode = colorScheme === 'dark' ? true : false;
    // alert(colorScheme);
    setDarkMode(currMode);
  });

  return (
    <AppearanceProvider>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <AppContainer />
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
