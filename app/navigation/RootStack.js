import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import { Splash, Flow, PostDetail, Character } from 'screens/Index'

export class RootStack extends Component {
  render() {
    const RootStack = createNativeStackNavigator();
    return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='Splash' component={Splash} />
        <RootStack.Screen name='Flow' component={Flow} />
        <RootStack.Screen name='PostDetail' component={PostDetail} />
        <RootStack.Screen name='Character' component={Character} />
      </RootStack.Navigator>
    </NavigationContainer>
    )
  }
}

export default RootStack