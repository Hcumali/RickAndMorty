import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import { Flow, PostDetail, Character } from 'screens/Index'

export class RootStack extends Component {
  render() {
    const RootStack = createNativeStackNavigator();
    return (
    <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator initialRouteName='Flow' screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='Flow' component={Flow} />
            <RootStack.Screen name='PostDetail' component={PostDetail} />
            <RootStack.Screen name='Character' component={Character} />
        </RootStack.Navigator>
    </NavigationContainer>
    )
  }
}

export default RootStack