import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import CreateUser from "../pages/CreateUser";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
    <Screen name="CreateUser" component={CreateUser} />
  </Navigator>
);

export default AuthRoutes;
