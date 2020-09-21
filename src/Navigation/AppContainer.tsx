import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../Screens/Onboarding';
const OnBoardingNavigator = () => {
  const OnboardingStack = createStackNavigator();
  return (
    <OnboardingStack.Navigator headerMode="none" initialRouteName="Onboarding">
      <OnboardingStack.Screen name="Onboarding" component={Onboarding} />
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
