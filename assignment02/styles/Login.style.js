import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
	main: {
		paddingTop: 30,
		paddingHorizontal: 20,
		flex: 1,
		paddingBottom: 10,
	},
	header: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		margin: 20,
	},
	inputBox: {
		borderWidth: 1,
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 20,
		marginVertical: 5,
		fontSize: 18,
	},
	inputContainer: {
		marginVertical: 20,
	},
	inputBoxContainer: {
		marginBottom: 10,
	},
	wrongInputPopup: {
		marginLeft: 20,
	},
	loginButton: {
		borderRadius: 25,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginVertical: 5,
	},
	oauthText: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
	},
	form: {
		flex: 1,
	},
	center: {
		flex: 1,
		justifyContent: "center",
	},
	loginButtonActive: {
		backgroundColor: "#ff685d",
		color: "white",
	},
	loginButtonInActive: {
		backgroundColor: "#ececec",
		color: "silver",
	},
});
