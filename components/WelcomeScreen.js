import { View, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={{ flex:1,}}>
      <Text style={{ padding:40, fontSize: 30, textAlign: "center", color: "white" }}>
        Welcome to Little Lemon
      </Text>
      <Text style={{ padding:20, fontSize: 24,marginVertical: 8, textAlign: "center", color: "white" }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
};
export default WelcomeScreen;
