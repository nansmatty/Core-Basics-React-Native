import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';

const TouchableComponent = () => {
  const [opacityCount, setOpacityCount] = useState(0);
  const [highlightCount, setHighlightCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Touchable Components</Text>
      <TouchableOpacity
        style={[styles.touchableButton, {backgroundColor: '#7c3aed'}]}
        onPress={() => setOpacityCount(opacityCount + 0.001)}>
        <Text style={styles.touchableText}>
          Touchable Opacity {opacityCount}
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor={'#4ad5af'}
        style={[styles.touchableButton, {backgroundColor: '#65a30d'}]}
        onPress={() => setHighlightCount(highlightCount + 1)}>
        <Text style={styles.touchableText}>
          Touchable Highlight {highlightCount}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  textHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },

  touchableButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  touchableText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TouchableComponent;
