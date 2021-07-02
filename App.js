import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDimensions } from "@react-native-community/hooks";
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TouchableHighlight,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen"

export default function App() {
	const handlePress = () => {
		console.log("text pressed");
	};
	console.log("app executed");
	console.log(useDimensions());
	return (
		<View style={styles.container}>
			<WelcomeScreen/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:"column",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent:"center",
		alignItems:"center"
	},
	textStyle: {
		color: "#000",
		fontSize: 10,
		textAlign:"center"
	},
});
