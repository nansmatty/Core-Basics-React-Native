import {View, Button} from 'react-native';
import React, {useState} from 'react';
import {styles} from './ImageComponent';

const ButtonComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button
        title={`Click Me ---- ${count}`}
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
};

export default ButtonComponent;
