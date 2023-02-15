import {StyleSheet, Platform} from "react-native";

export const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.select({
      android: 25,
      ios: 0,
      default: 0 
    }),
    paddingHorizontal: 20,
    paddingBottom: 10,
    flex: 1,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 5,
  },
  caption: {
    color: "#9c9c9c",
    fontSize: 15,
    marginVertical: 5,
  }
})