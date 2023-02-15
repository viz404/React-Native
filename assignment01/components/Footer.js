import {View, Pressable, Text} from "react-native";

import {styles} from "../styles/Footer.style";

export default function Footer ({count, total = 5}) {

  const proceed = count >= total;

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, proceed ? styles.buttonSelected : {}]}>
        <Text style={[styles.buttonText, proceed ? styles.buttonSelectedText : {}]}>CONTINUE {!proceed && `( ${count}/${total} )`}</Text>
      </Pressable>
    </View>
  )
}