import React from "react";
import { View, Image, ImageBackground, Text, StyleSheet } from "react-native";
import backgroundPic from "../assets/background.jpg";
import logoPic from "../assets/logo-red.png";

export default function WelcomeScreen() {
	const welcomeStyle = StyleSheet.create({
		image: {
			flex: 1,
			resizeMode: "cover",
			justifyContent: "center",
			alignItems: "center",
            flexDirection:"column"
		},
		logo: {
			width: 100,
			height: 100,
		},
        logoArea:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            flexDirection:"column"
        },
        buttons:{
            flex:1,
            width:"100%",
            flexDirection:"column",
            justifyContent:"flex-end",
            alignItems:"center"
        },
        login:{
            width:"100%",
            backgroundColor:"#fc5c65",
            height:75,
        },
        register:{
            width:"100%",
            backgroundColor:"#4ECDC4",
            height:75,
        }
	});
	return (
		<ImageBackground source={backgroundPic} style={welcomeStyle.image}>
			<View style={welcomeStyle.logoArea}>
				<Image style={welcomeStyle.logo} source={logoPic}></Image>
				<Text>Sell What You Don't Need</Text>
			</View>
            <View style={welcomeStyle.buttons}>
                <View style={welcomeStyle.login}></View>
                <View style={welcomeStyle.register}></View>
            </View>
		</ImageBackground>
	);
}
