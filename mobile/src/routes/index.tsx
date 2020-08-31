import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { useStatusBar } from "../context/statusbar";
import AuthRoutes from "./Auth.routes";
import AppStack from "./AppStack.routes";
// import { Container } from './styles';

const routes: React.FC = () => {
  const { props } = useStatusBar();
  return (
    <NavigationContainer>
      <StatusBar {...props} />
      <AuthRoutes />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
};

export default routes;
