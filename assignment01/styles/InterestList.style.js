import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 20,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  buttonSelected: {
    backgroundColor: "#ff685d",
    borderColor: "#ff685d",
  },
  buttonSelectedText: {
    color: "white",
  },
  buttonNotSelectedText: {
    color: "silver",
  },
  buttonNotSelected: {
    borderColor: "silver",
  }
})