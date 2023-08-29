import { useState, useRef } from "react";
import { Text, View, ImageBackground, StyleSheet, Pressable, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";
import { v4 as uuid } from "uuid";
import { State, TapGestureHandler } from "react-native-gesture-handler";

const CreateProblem = ({ vectorColor }) => {
  const [newVectors, setNewVectors] = useState([]);
  

  const onSingleTap = (event) => {
    if (event.nativeEvent.state === State.Active) {
      alert("tap!");
      console.log("here");
    }
    const { locationX, locationY } = event.nativeEvent;
    const addVector = {
      color: `#${vectorColor}`,
      x: locationX - 15,
      y: locationY - 15,
      id: uuid(),
    };

    setNewVectors((prevVectors) => [...prevVectors, addVector]);
  };

  const savedVectors = newVectors.map((vector) => {
    const { color, x, y, id } = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: "absolute",
    };

    return (
      <TapGestureHandler
        onHandlerStateChange={onSingleTap}
        numberOfTaps={1}
        style={styles.viewContainer}
      >
        <Animated.View key={id} style={vectorStyle}>
          <AddVectors vectorColor={color} />
        </Animated.View>
      </TapGestureHandler>
    );
  });

  const [likeColour, setLikeColour] = useState('#28b5b5');
  const doubleTapRef = useRef(null);

  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      likeColour === '#28b5b5'
        ? setLikeColour('red')
        : setLikeColour('#28b5b5');
    }
  };

  const onSingleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('Hey single tap!');
    }
  };

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: "100%",
      // height: "100%",
    },
    viewContainer: {
      flex: 1,
    },
    square: {
      width: 150,
      height: 150,
      backgroundColor: `${likeColour}`,
      marginTop: 22,
      marginBottom: 22,
    },
  });


  return (
    // <ImageBackground
    //   source={require("../assets/pexels-allan-mas-5383501.jpg")}
    //   resizeMode="cover"
    //   style={styles.image}
    // >
    <View>
      {savedVectors}
      <>
      <Text>Double and Single Tap Gesture Handler</Text>
      <TapGestureHandler
        onHandlerStateChange={onSingleTapEvent}
        waitFor={doubleTapRef}
      >
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={onDoubleTapEvent}
          numberOfTaps={2}
        >
          <View style={styles.square} />
        </TapGestureHandler>
      </TapGestureHandler>
    </>
    </View>
    // </ImageBackground>
  );
};

export default CreateProblem;


