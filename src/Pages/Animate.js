import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Animate() {
  const shapeScale = useRef(new Animated.Value(0)).current;
  const logoTranslateX = useRef(new Animated.Value(-100)).current;
  const brandTranslateX = useRef(new Animated.Value(100)).current;
  const welcomeTranslateY = useRef(new Animated.Value(50)).current;
  const subtitleTranslateY = useRef(new Animated.Value(50)).current;
  const buttonTranslateY = useRef(new Animated.Value(50)).current;
  const buttonScale = useRef(new Animated.Value(0.5)).current; 

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const brandOpacity = useRef(new Animated.Value(0)).current;
  const welcomeOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(shapeScale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.stagger(200, [
        Animated.parallel([
          Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(logoTranslateX, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(brandOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(brandTranslateX, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(welcomeOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(welcomeTranslateY, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(subtitleOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(subtitleTranslateY, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(buttonTranslateY, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.spring(buttonScale, {
            toValue: 1,
            friction: 4,
            tension: 80,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#7b61ff", "#4a00e0"]} style={StyleSheet.absoluteFill} />

      <Animated.View style={[styles.shape, { transform: [{ scale: shapeScale }], top: 80, left: 50, width: 20, height: 20 }]} />
      <Animated.View style={[styles.shape, { transform: [{ scale: shapeScale }], top: 150, right: 50, width: 15, height: 15 }]} />
      <Animated.View style={[styles.shape, { transform: [{ scale: shapeScale }], bottom: 200, left: 70, width: 25, height: 25 }]} />
      <Animated.View style={[styles.shape, { transform: [{ scale: shapeScale }], bottom: 120, right: 100, width: 18, height: 18 }]} />

      <View style={styles.logoContainer}>
        <Animated.View
          style={[styles.logo, { opacity: logoOpacity, transform: [{ translateX: logoTranslateX }] }]}
        >
          <Text style={styles.logoText}>LOGO</Text>
        </Animated.View>
        <Animated.View
          style={[styles.brand, { opacity: brandOpacity, transform: [{ translateX: brandTranslateX }] }]}
        >
          <Text style={styles.brandText}>BRAND</Text>
        </Animated.View>
      </View>

      <Animated.Text
        style={[
          styles.welcomeText,
          { opacity: welcomeOpacity, transform: [{ translateY: welcomeTranslateY }] },
        ]}
      >
        Welcome
      </Animated.Text>

      <Animated.Text
        style={[
          styles.subtitle,
          { opacity: subtitleOpacity, transform: [{ translateY: subtitleTranslateY }] },
        ]}
      >
        Experience the future of mobile design
      </Animated.Text>

      <Animated.View
        style={{
          opacity: buttonOpacity,
          transform: [{ translateY: buttonTranslateY }, { scale: buttonScale }],
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

export default Animate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shape: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 50,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    backgroundColor: "yellow",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  brand: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  brandText: {
    color: "#4a00e0",
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
