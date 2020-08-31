import React, { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import bgImage from "../../assets/images/Background.png";
import LogoImage from "../../assets/images/Proffy.png";
import viewPassIcon from "../../assets/images/icons/view-pass.png";
import hidePassIcon from "../../assets/images/icons/hide-pass.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const [viewPass, setViewPass] = useState(true);

  function handleNavigateToCreateUser() {
    navigate("CreateUser");
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.topBox}>
          <ImageBackground
            style={styles.content}
            source={bgImage}
            resizeMode="contain"
          >
            <Image style={styles.logo} source={LogoImage} />
            <Text style={styles.subTitle}>
              Sua plataforma de estudos online
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.loginBox}>
          <View style={styles.loginTitle}>
            <Text style={styles.formTitle}>Fazer login</Text>
            <RectButton onPress={handleNavigateToCreateUser}>
              <Text style={styles.textButtonNew}>Criar uma conta</Text>
            </RectButton>
          </View>
          <View style={styles.inputTop}>
            <TextInput placeholder="E-mail" style={styles.input} />
          </View>
          <View style={[styles.inputBlock, styles.inputBottom]}>
            <TextInput
              secureTextEntry={viewPass}
              placeholder="Senha"
              style={styles.input}
            />
            <RectButton
              onPress={() => setViewPass(!viewPass)}
              style={styles.viewPass}
            >
              {viewPass ? (
                <Image source={viewPassIcon} style={styles.imgPass} />
              ) : (
                <Image source={hidePassIcon} style={styles.imgPass} />
              )}
            </RectButton>
          </View>
          <View style={styles.moreInfo}>
            <Text style={styles.textMoreInfo}>Lembre-me</Text>
            <RectButton>
              <Text style={styles.buttonForgot}>Esqueci minha senha</Text>
            </RectButton>
          </View>
          <RectButton style={styles.submit}>
            <Text style={styles.submitText}>Entrar</Text>
          </RectButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
