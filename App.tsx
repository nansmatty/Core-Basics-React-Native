import ViewComponent from './src/components/ViewComponent';
import TextComponent from './src/components/TextComponent';
import ImageComponent from './src/components/ImageComponent';
import ButtonComponent from './src/components/ButtonComponent';
import TextInputComponent from './src/components/TextInputComponent';
import {ScrollView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <ScrollView>
      <ViewComponent />
      <TextComponent />
      <ImageComponent />
      <ButtonComponent />
      <TextInputComponent />
    </ScrollView>
  );
}

export default App;
