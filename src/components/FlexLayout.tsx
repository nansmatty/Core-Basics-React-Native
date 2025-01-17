import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlexLayout = () => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.textHeading}>Flex Layout Example</Text>
      <Text style={{marginBottom: 10}}>Main Axis (Flex Direction: Row)</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.box, {backgroundColor: '#8b5cf6'}]}></View>
        <View style={[styles.box, {backgroundColor: '#7c3aed'}]}></View>
        <View style={[styles.box, {backgroundColor: '#6d28d9'}]}></View>
        <View style={[styles.box, {backgroundColor: '#5b21b6'}]}></View>
      </View>
      <Text style={{marginBottom: 10}}>
        Cross Axis (Flex Direction: Column (default))
      </Text>
      <View style={styles.columnContainer}>
        <View style={[styles.box, {backgroundColor: '#4ade80'}]}></View>
        <View style={[styles.box, {backgroundColor: '#22c55e'}]}></View>
        <View style={[styles.box, {backgroundColor: '#65a30d'}]}></View>
        <View style={[styles.box, {backgroundColor: '#4d7c0f'}]}></View>
      </View>
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

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  columnContainer: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  box: {
    width: 60,
    height: 60,
  },
});

export default FlexLayout;
