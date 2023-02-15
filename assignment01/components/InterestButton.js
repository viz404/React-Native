import {Pressable, Text} from "react-native";

import {styles} from "../styles/InterestList.style";

export default function InterestButton ({title, id, status, onButtonclick}) {

  const handleButtonclick = () => {
    onButtonclick(id);
  }

  return (
    <Pressable key={id} style={[styles.button, status ? styles.buttonSelected: styles.buttonNotSelected]} onPress={handleButtonclick}>
      <Text style={[styles.buttonText, status ? styles.buttonSelectedText: styles.buttonNotSelectedText]}>{title}</Text>
    </Pressable>
  )
}