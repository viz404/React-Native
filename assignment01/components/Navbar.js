import {View, Pressable, Text} from "react-native";

import {styles} from "../styles/Navbar.style";

export default function Navbar () {
  return (
    <View style={styles.nav}>
      <Pressable>
        <Text style={styles.buttonText}>{"<"}</Text>
      </Pressable>
    </View>
  );
}