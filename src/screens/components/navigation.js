import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../login";
import Disclaimer from "../Disclaimer";
import SelectStation from "../selectStation";
import DetailScreen from "../details";
import Splash from "../splash";

const AuthStack = () => {
  const AuthScreens = createNativeStackNavigator();
  return (
    <AuthScreens.Navigator initialRouteName="Spalsh" screenOptions={{ headerShown: false, gestureEnabled: false }}>
       <AuthScreens.Screen name="Spalsh" component={Splash} />
      <AuthScreens.Screen name="Login" component={Login} />
      <AuthScreens.Screen name="Disclaimer" component={Disclaimer} />
      <AuthScreens.Screen name="SelectStation" component={SelectStation} />
      <AuthScreens.Screen name="DetailScreen" component={DetailScreen} />
    </AuthScreens.Navigator>
  )

}
export default AuthStack