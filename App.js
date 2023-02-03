import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginForm } from './src/components/LoginForm';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World - Eddy</Text>
        <LoginForm />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
