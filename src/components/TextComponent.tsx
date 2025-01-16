import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TextComponent = () => {
  return (
    <>
      <View style={styles.boxContainer}>
        <Text style={styles.textStyle}>Sky Box</Text>
        <Text style={styles.textStyle}>Emerald Box</Text>
        <Text style={styles.textStyle}>Red Box</Text>
      </View>
      <View style={styles.boxContainer2}>
        <Text style={{marginBottom: 20}}>
          Text Components can be <Text style={styles.textNested}>nested</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
  },

  boxContainer2: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },

  textStyle: {
    fontWeight: 'semibold',
    letterSpacing: 3,
  },

  textNested: {
    fontWeight: 'bold',
  },
});

export default TextComponent;
