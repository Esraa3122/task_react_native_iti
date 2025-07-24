import { useNavigation } from "@react-navigation/native";
import { View, Linking, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import SocialIcon from "../Components/SocialIcon";
import InfoRow from "../Components/InfoRow";
import ProgressBar from "../Components/ProgressBar";
import ListItem from "../Components/ListItem";

function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/d5/a2/b3/d5a2b3b1d4bd02acacc275caada1431e.jpg' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Esraa Elsheikh</Text>
        <Text style={styles.title}>Front-End Developer</Text>

        <View style={styles.socials}>
          <SocialIcon name="facebook" url="https://www.facebook.com/" />
          <SocialIcon name="twitter" url="https://www.facebook.com/" />
          <SocialIcon name="linkedin" url="https://www.linkedin.com/in/israa-al-sheikh-90baba231" />
          <SocialIcon name="github" url="https://github.com/Esraa3122" />
        </View>
      </View>

      <View style={styles.infoBox}>
        <InfoRow label="Age:" value="24" />
        <InfoRow label="Residence:" value="BD" />
        <InfoRow label="Freelancer:" value="Available" valueColor="green" />
        <InfoRow label="Address:" value="Dakahlia, Damas" />
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Languages</Text>
      <ProgressBar label="Bangla" value={1} />
      <ProgressBar label="English" value={0.9} />
      <ProgressBar label="Spanish" value={0.6} />
      <ProgressBar label="Hindi" value={0.8} />

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Skills</Text>
      <ProgressBar label="HTML" value={1} />
      <ProgressBar label="CSS" value={0.95} />
      <ProgressBar label="JS" value={0.85} />
      <ProgressBar label="PHP" value={0.7} />
      <ProgressBar label="WordPress" value={0.65} />

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Extra Skills</Text>
      <ListItem text="Bootstrap, Materialize" />
      <ListItem text="Stylus, Sass, Less" />
      <ListItem text="Gulp, Webpack, Grunt" />
      <ListItem text="Git Knowledge" />

      <View style={styles.divider} />

      <Pressable
        style={styles.downloadBtn}
        onPress={() => Linking.openURL('https://drive.google.com/uc?export=download&id=1GlLs6Z4XHFHfJw9lAYJYdA5aXvi2xsoP')}
      >
        <Text style={styles.downloadText}>DOWNLOAD CV</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  title: {
    color: '#aaa',
    fontSize: 14,
  },
  socials: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 10,
  },
  infoBox: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  sectionTitle: {
    color: '#FFC107',
    fontSize: 16,
    marginTop: 16,
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
  downloadBtn: {
    backgroundColor: '#FFC107',
    margin: 16,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  downloadText: {
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
});

export default Home;
