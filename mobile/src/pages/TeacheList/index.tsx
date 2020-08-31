import React, { useState, useCallback } from "react";
import { View, ScrollView, TextInput, Text } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";
import api from "../../servics/api";

const TeacheList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function handleToogleFilterVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  function handleFiltersSubmmit() {
    loadFavorites();
    api
      .get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      })
      .then((response) => {
        setTeachers(response.data);
        setIsFilterVisible(false);
      });
  }

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.id
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title={"Proffys disponíveis"}
        hearderRight={
          <BorderlessButton onPress={handleToogleFilterVisible}>
            <Feather name="filter" color="#fff" size={20} />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={(text) => setSubject(text)}
              style={styles.input}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual horário?"
                />
              </View>
            </View>
            <RectButton onPress={handleFiltersSubmmit} style={styles.submit}>
              <Text style={styles.submitText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        style={styles.teacherList}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacheList;
