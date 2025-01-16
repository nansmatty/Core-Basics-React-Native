import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const NestedScrollViewComponent = () => {
  return (
    <View style={styles.viewBox}>
      <Text style={styles.textHeading}>Nested Scroll View Component</Text>
      <ScrollView
        nestedScrollEnabled={true}
        bounces={true}
        showsVerticalScrollIndicator={true}>
        {[...Array(20)].map((_, index) => (
          <View key={index}>
            <Text style={styles.textBox}>Text Box {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
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
    marginVertical: 20,
  },

  viewBox: {
    height: 400,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  textBox: {
    backgroundColor: '#4ad5af',
    padding: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default NestedScrollViewComponent;
