import {ScrollView, View} from "react-native";

import InterestButton from "./InterestButton";

import {styles} from "../styles/InterestList.style";

export default function InterestList ({items, onButtonclick}) {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.listContainer}>
        {
          items.map(e => (
            <InterestButton title={e.title} id={e.id} status={e.status} onButtonclick={onButtonclick} />
          ))
        }
      </View>
    </ScrollView>
  )
}