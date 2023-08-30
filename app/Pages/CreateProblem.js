import { useState, useContext, useEffect } from "react";
import { ImageBackground, StyleSheet, Pressable, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";
import { v4 as uuid } from 'uuid';
import RouteContext from "../Components/RouteContext";
import { useRoute, useNavigation } from '@react-navigation/native';

const CreateProblem = ({vectorColor}) => {
  const [newVectors, setNewVectors] = useState([])
  const { setCurrentRoute } = useContext(RouteContext)
  const currentScreen = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      setCurrentRoute(currentScreen.name);
    });

    return () => {
      unsubscribeFocus();
    };
  }, [navigation, currentScreen, setCurrentRoute]);

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const addVector = { color: `#${vectorColor}`, x: locationX - 15, y: locationY - 15, id: uuid() };
    
    setNewVectors((prevVectors) => [...prevVectors, addVector])
  };

  const savedVectors = newVectors.map((vector) => {
    const {color, x, y, id} = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: 'absolute',
    };

    return (
      <Animated.View style={vectorStyle} key={id}>
        <AddVectors vectorColor={color} />
      </Animated.View>
    );
  }) 

  return (
    <ImageBackground source={require('../assets/pexels-allan-mas-5383501.jpg')} resizeMode="cover" style={styles.image} >
      <Pressable onPress={handlePress} style={styles.viewContainer}>
        {savedVectors}
      </Pressable>
    </ImageBackground>
  );
}

export default CreateProblem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
  viewContainer: {
    flex: 1, 
  }
})