import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/images/icons/back.png";
import logoImage from "../../assets/images/logo.png";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface PageHearderProps {
  title: string;
  hearderRight?: ReactNode;
}

const PageHeader: React.FC<PageHearderProps> = ({
  title,
  hearderRight,
  children,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }
  return (
    <View style={styles.cotainer}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImage} resizeMode="contain" />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {hearderRight}
      </View>

      {children}
    </View>
  );
};

export default PageHeader;
