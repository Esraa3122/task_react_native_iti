import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MyCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        props.cid && navigation.navigate("CompanyDetails", { id: props.cid })
      }
    >
      <Image style={styles.image} source={{ uri: props.logo }} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>

        {props.rating && (
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{props.rating.toFixed(1)}</Text>
          </View>
        )}

        {props.companySize && (
          <Text style={styles.detail}>Company Size: {props.companySize}</Text>
        )}
        {props.companyLocation && (
          <Text style={styles.detail}>Location: {props.companyLocation}</Text>
        )}
        {props.companyDescription && (
          <Text style={styles.detail}>
            {props.companyDescription}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default MyCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 12,
    overflow: "hidden",
    margin: 8,
    width: "45%",
  },
  image: {
    width: "100%",
    height: 220,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 8,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  ratingText: {
    color: "#ccc",
    marginLeft: 4,
    fontSize: 13,
  },
  detail: {
    color: "#aaa",
    fontSize: 12,
    marginBottom: 2,
  },
});
