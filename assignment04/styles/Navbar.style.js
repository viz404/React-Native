import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    padding: 10,
  },
  profileIcon: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#eef3f7",
    borderRadius: 7,
    flex: 1,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  messageIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  messageIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
});
