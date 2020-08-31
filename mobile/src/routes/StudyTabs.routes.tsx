import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

import TeacheList from "../pages/TeacheList";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

interface PropsTabIcons {
  size: number;
  color: string;
  focused: boolean;
}

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === "ios" ? 84 : 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
        },
        safeAreaInsets: {
          bottom: 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === "ios" ? 24 : 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: (props: PropsTabIcons) => {
            return (
              <Ionicons
                name="ios-easel"
                size={props.size}
                color={props.focused ? "#8257e5" : props.color}
              />
            );
          },
        }}
        name="TeacherList"
        component={TeacheList}
      />
      <Screen
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: (props: PropsTabIcons) => {
            return (
              <Ionicons
                name="ios-heart"
                size={props.size}
                color={props.focused ? "#8257e5" : props.color}
              />
            );
          },
        }}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  );
}

export default StudyTabs;
