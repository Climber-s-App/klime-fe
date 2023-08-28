import { StyleSheet, View, Image } from 'react-native';
import SavedWalls from '../Components/SavedWalls';


export default function Home({savedWalls}) {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Klime.png')}
          style={styles.image}
        />
      </View>
      <SavedWalls savedWalls={savedWalls}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    alignSelf: 'center'
  },
  imageContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 8
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#d7dbdb',
    width: '100%',
  },
})

