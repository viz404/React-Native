import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import { validateEmail, validatePassword } from "../config/validations";

import { styles } from "../styles/Login.style";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const validEmail = validateEmail(email);
	const validPassword = validatePassword(password);

	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.form}>
				<View style={styles.center}>
					<Text style={styles.header}>Login</Text>
					<View style={styles.inputContainer}>
						<View style={styles.inputBoxContainer}>
							<TextInput
								value={email}
								style={[
									styles.inputBox,
									email != "" && validEmail == false
										? { borderColor: "red" }
										: {},
								]}
								placeholder="Enter Email"
								onChangeText={setEmail}
								inputMode="email"
								keyboardType="email-address"
								autoComplete="email"
							/>
							<Text
								style={[
									styles.wrongInputPopup,
									email != "" && validEmail == false
										? { color: "red" }
										: { color: "white" },
								]}
							>
								please enter a valid email
							</Text>
						</View>
						<View style={styles.inputBoxContainer}>
							<TextInput
								value={password}
								style={[
									styles.inputBox,
									password != "" && validPassword == false
										? { borderColor: "red" }
										: {},
								]}
								placeholder="Enter Password"
								onChangeText={setPassword}
								secureTextEntry={true}
							/>
							<Text
								style={[
									styles.wrongInputPopup,
									password != "" && validPassword == false
										? { color: "red" }
										: { color: "white" },
								]}
							>
								please enter a valid password
							</Text>
						</View>
					</View>
					<TouchableOpacity
						style={[styles.loginButton, { backgroundColor: "#ff685d" }]}
					>
						<Text style={[styles.oauthText, { color: "white" }]}>
							Login with Google
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.loginButton, { backgroundColor: "#54799c" }]}
					>
						<Text style={[styles.oauthText, { color: "white" }]}>
							Login with Facebook
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={[
						styles.loginButton,
						validEmail && validPassword
							? styles.loginButtonActive
							: styles.loginButtonInActive,
					]}
					disabled={!(validEmail && validPassword)}
				>
					<Text
						style={[
							styles.oauthText,
							validEmail && validPassword
								? { color: "white" }
								: { color: "silver" },
						]}
					>
						Login
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
