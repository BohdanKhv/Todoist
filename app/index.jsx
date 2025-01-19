import { useOAuth } from "@clerk/clerk-expo";
import { WebBrowser } from "expo-web-browser";
import { Text, View } from "react-native";

export default function Index() {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: googleOAuth } = useOAuth({ strategy: "oauth_google" });
  
  const handleAppleLogin = async () => {
    try {
      const { createSessionId, setActive } = await startOAuthFlow();
      console.log(`Apple login: ${createSessionId}`);

      if (createSessionId) {
        setActive({ session: createSessionId });
      }
    } catch (e) {
      console.error(e);
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const { createSessionId, setActive } = await googleOAuth();
      console.log(`Google login: ${createSessionId}`);

      if (createSessionId) {
        setActive({ session: createSessionId });
      }
    } catch (e) {
      console.error(e);
    }
  }

  const openLink = async (url) => {
    WebBrowser.openBrowserAsync(url);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Hi there!
      </Text>
    </View>
  );
}
