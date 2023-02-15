import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "silver",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 19,
    color: "grey"
  },
  buttonSelected: {
    backgroundColor: "#ff4670",
    borderColor: "#ff685d"
  },
  buttonSelectedText: {
    color: "white",
  }
})