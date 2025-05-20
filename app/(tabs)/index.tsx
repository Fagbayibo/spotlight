import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
            <Link href={"/notification"}>Home page of the tabs</Link>
    </View>
  );
}
