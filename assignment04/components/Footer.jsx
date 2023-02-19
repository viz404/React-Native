import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/Footer.style";

export default function Footer() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png",
          }}
          style={styles.Icon}
        />
        <Text style={styles.IconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3137/3137911.png",
          }}
          style={styles.Icon}
        />
        <Text style={styles.IconText}>Network</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3161/3161837.png",
          }}
          style={styles.Icon}
        />
        <Text style={styles.IconText}>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3602/3602123.png",
          }}
          style={styles.Icon}
        />
        <Text style={styles.IconText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
          }}
          style={styles.Icon}
        />
        <Text style={styles.IconText}>Jobs</Text>
      </TouchableOpacity>
    </View>
  );
}
