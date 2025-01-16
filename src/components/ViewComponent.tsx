import {View, StyleSheet} from 'react-native';
import React from 'react';

const ViewComponent = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.skyBox}></View>
      <View style={styles.emeraldBox}></View>
      <View style={styles.redBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  redBox: {
    width: 100,
    height: 100,
    backgroundColor: '#b91c1c',
  },
  skyBox: {
    width: 100,
    height: 100,
    backgroundColor: '#0369a1',
  },
  emeraldBox: {
    width: 100,
    height: 100,
    backgroundColor: '#047857',
  },
});

export default ViewComponent;
