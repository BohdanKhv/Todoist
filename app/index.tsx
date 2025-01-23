import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/contansts/Colors";
import { useState } from "react";

export default function Index() {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: googleOAuth } = useOAuth({ strategy: "oauth_google" });
  const { top } = useSafeAreaInsets();
  
  const handleAppleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      console.log(`Apple login: ${createdSessionId}`);

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (e) {
      console.error(e);
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await googleOAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  };

  const openLink = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
  }

  return (
    <View
      style={[styles.container, { paddingTop: top }]}
    >
      <Image
        source={require("@/assets/images/todoist-logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.loginImage}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleAppleLogin} style={styles.button}>
          <Ionicons name="logo-apple" size={24} color="#000" />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleLogin} style={[styles.button]}>
          <Ionicons name="logo-google" size={24} color="#000" />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleEmailLogin} style={[styles.button, { backgroundColor: "#fff", borderColor: "#000" }]}>
          <Ionicons name="mail" size={24} color="#000" />
          <Text style={[styles.buttonText, { color: "#000" }]}>Continue with Email</Text>
        </TouchableOpacity> */}
        <Text style={{ textAlign: "center", fontSize: 14, color: Colors.lightText }}>
          By continuing, you agree to our <Text style={{ textDecorationLine: "underline" }} onPress={() => openLink("https://todoist.com/terms")}>Terms of Service</Text> and <Text style={{ textDecorationLine: "underline" }} onPress={() => openLink("https://todoist.com/privacy")}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
    marginTop: 30
  },
  logoImage: {
    height: 50,
    resizeMode: "contain",
    alignSelf: "center"
  },
  loginImage: {
    height: 350,
    resizeMode: "contain",
    alignSelf: "center"
  },
  buttonsContainer: {
    gap: 14,
    alignItems: "center",
    paddingHorizontal: 40
  },
  button: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderColor: Colors.lightBorder,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000"
  },
});