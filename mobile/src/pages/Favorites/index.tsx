import React, { useState, useCallback } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import { useFocusEffect } from "@react-navigation/native";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
    });
  }
  return (
    <View style={styles.container}>
      <PageHeader title={"Meus proffys favoritos"} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        style={styles.favoriteList}
      >
        {favorites.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
