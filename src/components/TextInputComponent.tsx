import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles as imageStyles} from './ImageComponent';

const TextInputComponent = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <View style={imageStyles.container}>
      <Text style={styles.textHeading}>Text Input Component</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Type Something..."
        onChangeText={setValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },

  textInputStyle: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default TextInputComponent;
