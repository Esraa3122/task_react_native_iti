import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

function CompanyDetails({ route }) {
  const movieId = route.params.id;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!details) return <Text style={{ color: "#fff", textAlign: "center" }}>Loading...</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${details.backdrop_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{details.title} ({details.release_date.split("-")[0]})</Text>
      <Text style={styles.rating}>⭐ {details.vote_average}</Text>

      <View style={styles.genreContainer}>
        {details.genres.map((genre) => (
          <Text key={genre.id} style={styles.genre}>{genre.name}</Text>
        ))}
      </View>

      <Text style={styles.storyTitle}>Storyline</Text>
      <Text style={styles.storyText}>{details.overview}</Text>
    </ScrollView>
  );
}

export default CompanyDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    color: "#bbb",
    marginBottom: 10,
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 12,
  },
  genre: {
    backgroundColor: "#2e2e2e",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  storyTitle: {
    color: "#00C853",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    alignSelf: "flex-start",
  },
  storyText: {
    color: "#ddd",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "justify",
  },
});
