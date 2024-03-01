import { View, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 50,
          textAlign: "center",
          color: "white",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          padding: 20,
          fontSize: 38,
          marginVertical: 8,
          textAlign: "center",
          color: "#EDEFEE",
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
};
export default WelcomeScreen;
