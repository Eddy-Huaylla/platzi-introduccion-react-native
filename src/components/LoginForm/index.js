import React from "react";
import { Button, TextInput, View } from "react-native";

export const LoginForm = () => {
	return (
		<View>
			<TextInput placeholder="Email" />
			<TextInput placeholder="Password" />
			<Button title="Enviar" onPress={ (e) => console.log( e ) } />
		</View>
	)
}