import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding, Welcome} from '../Screens/Onboarding';
import {Routes} from '../Config/Routes';
const OnBoardingNavigator = () => { 
  const OnboardingStack = createStackNavigator<Routes>();
  return (
    <OnboardingStack.Navigator headerMode="none">
      <OnboardingStack.Screen name="Onboarding" component={Onboarding} />
      <OnboardingStack.Screen name="Welcome" component={Welcome} />
    </OnboardingStack.Navigator>
  );
};
const AppContainer = () => {
  return (
    <NavigationContainer>
      <OnBoardingNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
