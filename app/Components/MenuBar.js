import { View, Image, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';

export default function MenuBar({vectorColor, handleVectorColor}) {

  const styles = StyleSheet.create({
    image: {
      width: 40,
      height: 40,
      alignSelf: 'center'
    },
    menuContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      // backgroundColor: 'red',
      flexDirection: 'row',
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // width: 370,
      // width: '100%',
      // borderRadius: 10,
      // marginBottom: 12,
      padding: 6,
    },
    vectorColor: { 
      borderWidth: 5,
      borderColor: `#${vectorColor}`,
      position: 'absolute',
      width:40,
      height:40,
      backgroundColor:'transparent',
      borderRadius:30,
      right: 4,
    }
  });

  return (
    <View style={styles.menuContainer}>
      <Image
        source={require('../assets/add-sign.png')}
        style={styles.image}
      />
      <Pressable onPress={() => handleVectorColor(vectorColor)} style={styles.vectorColor} />
    </View>
  )
}

