import StartGameScreen from './screens/StartGameScreen';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import bgImage from "./assets/images/background.png"
export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground 
          source={bgImage} 
          resizeMode="cover" 
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage} 
      >
        <StartGameScreen />
      </ImageBackground>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
