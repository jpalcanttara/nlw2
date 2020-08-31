import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { useStatusBar } from "../../context/statusbar";
import backIcon from "../../assets/images/icons/back.png";
import styles from "./styles";
import Steps from "./Steps";

const CreateUser: React.FC = () => {
  const { setProps } = useStatusBar();
  const [dNone, setDNone] = useState(false);
  useEffect(() => {
    setProps({ style: "dark" });

    return function cleanup() {
      setProps({ style: "light" });
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View>
          <Image source={backIcon} />
        </View>
        <View style={styles.list}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
        </View>
      </View>
      <View style={dNone ? styles.dNone : styles.titleArea}>
        <Text style={styles.title}>Crie sua conta gratuíta</Text>
        <Text style={styles.subtitle}>
          Basta preencher esses dados e você estará conosco
        </Text>
      </View>
      <KeyboardAvoidingView
        // style={{  }}
        keyboardVerticalOffset={32}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Steps />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateUser;
