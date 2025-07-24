import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import MyCard from "../Components/MyCard"; 
import { Ionicons } from "@expo/vector-icons";

function Companies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Watch Now</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies..."
          placeholderTextColor="#888"
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tabActive}><Text style={styles.tabText}>Popular</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Coming Soon</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Top Rated</Text></TouchableOpacity>
      </View>

      <FlatList
  data={movies}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <MyCard
      title={item.title}
      logo={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
      cid={item.id}
      rating={item.vote_average}
    />
  )}
  numColumns={2}
  columnWrapperStyle={{ justifyContent: "space-between" }}
  contentContainerStyle={{ paddingBottom: 100 }}
  showsVerticalScrollIndicator={false}
/>

    </View>
  );
}

export default Companies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  tab: {
    backgroundColor: "#1f1f1f",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  tabActive: {
    backgroundColor: "#00C853",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
  },
});
