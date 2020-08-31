import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

// import { Container } from './styles';

const Steps: React.FC = () => {
  const [step, setStap] = useState(0);

  return step === 0 ? (
    <View style={styles.form}>
      <Text style={styles.titleForm}>01. Quem é você?</Text>
      <View style={styles.inputTop}>
        <TextInput
          placeholder="Nome"
          autoCapitalize="words"
          style={styles.input}
        />
      </View>
      <View style={styles.inputBottom}>
        <TextInput
          placeholder="Sobrenome"
          autoCapitalize="words"
          style={styles.input}
        />
      </View>
      <RectButton style={styles.submit}>
        <Text style={styles.submitText}>Próximo</Text>
      </RectButton>
    </View>
  ) : (
    <View />
  );
};

export default Steps;
