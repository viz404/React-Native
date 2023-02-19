import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  post: {
    backgroundColor: "white",
    marginBottom: 5,
  },
  authorContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorInfo: {
    flexDirection: "row",
  },
  authorImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  authorName: {
    fontSize: 17,
    fontWeight: "500",
    marginRight: 5,
  },
  authorConnection: {
    color: "grey",
  },
  authorBio: {
    color: "grey",
    maxWidth: 210,
  },
  connectIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  postImage: {
    height: 300,
    width: screenWidth,
  },
  interactionIcon: {
    height: 15,
    width: 15,
  },
  bigIcon: {
    height: 25,
    width: 25,
  },
  bigIconText: {
    fontSize: 17,
  },
});
