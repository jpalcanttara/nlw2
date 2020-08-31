import React from "react";
import { View, ImageBackground, Text } from "react-native";

import bgImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateGoBack() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        style={styles.content}
        resizeMode={"contain"}
      >
        <Text style={styles.title}>Quer ser umProffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateGoBack} style={styles.okButton}>
        <Text style={styles.textButton}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
