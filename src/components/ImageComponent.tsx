import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const ImageComponent = () => {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/app-development.png')}
      />

      {/* <Image style={styles.imageStyle} source={{uri: 'online image url'}} /> */}
    </View>
  );
};

export const styles = StyleSheet.create({
  imageStyle: {
    width: 370,
    height: 380,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default ImageComponent;
