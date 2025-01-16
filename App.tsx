import {StyleSheet, View} from 'react-native';
import ViewComponent from './src/components/ViewComponent';
import TextComponent from './src/components/TextComponent';

function App(): React.JSX.Element {
  return (
    <>
      <ViewComponent />
      <TextComponent />
    </>
  );
}

export default App;
