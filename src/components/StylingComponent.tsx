import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const StylingComponent = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#4856ea',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center',
          }}>
          Styling Component
        </Text>
      </View>
      <View style={[styles.combinedStyling, {backgroundColor: '#fa455d'}]}>
        <Text style={[styles.combinedStylingText, {textAlign: 'right'}]}>
          Combined Styling Example
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  combinedStyling: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },

  combinedStylingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default StylingComponent;
