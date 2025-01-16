import ViewComponent from './src/components/ViewComponent';
import TextComponent from './src/components/TextComponent';
import ImageComponent from './src/components/ImageComponent';
import ButtonComponent from './src/components/ButtonComponent';
import TextInputComponent from './src/components/TextInputComponent';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import NestedScrollViewComponent from './src/components/NestedScrollViewComponent';

function App(): React.JSX.Element {
  return (
    <View>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.container}
        bounces={true}>
        <ViewComponent />
        <TextComponent />
        <ImageComponent />
        <ButtonComponent />
        <TextInputComponent />
        <NestedScrollViewComponent />
      </ScrollView>
      {/* <Text style={styles.textBottom}>This wont move</Text> */}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  textBottom: {
    backgroundColor: '#4ad5af',
    padding: 20,
    textAlign: 'center',
  },
});

export default App;
