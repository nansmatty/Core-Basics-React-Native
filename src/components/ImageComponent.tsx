import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/app-development.png')}
      />

      {/* <Image style={styles.imageStyle} source={{uri: 'online image url'}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  imageStyle: {
    width: 370,
    height: 380,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default ImageComponent;
