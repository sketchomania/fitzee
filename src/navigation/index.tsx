import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  DateScreen,
  FrequencyScreen,
  InitialScreen,
  NameScreen,
  SigninScreen,
  SignupScreen,
  StatusScreen,
} from '../screens';

export type MainStackParamList = {
  DateScreen: undefined;
  FrequencyScreen: undefined;
  InitialScreen: undefined;
  NameScreen: undefined;
  SigninScreen: undefined;
  SignupScreen: undefined;
  StatusScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="InitialScreen" component={InitialScreen} />
        <MainStack.Screen name="SignupScreen" component={SignupScreen} />
        <MainStack.Screen name="SigninScreen" component={SigninScreen} />
        <MainStack.Screen name="NameScreen" component={NameScreen} />
        <MainStack.Screen name="DateScreen" component={DateScreen} />
        <MainStack.Screen name="FrequencyScreen" component={FrequencyScreen} />
        <MainStack.Screen name="StatusScreen" component={StatusScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
