import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.heading}> Current weather </Text>
      <Position />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cacae3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16'
  }
});
