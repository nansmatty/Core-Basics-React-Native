import ViewComponent from './src/components/ViewComponent';
import TextComponent from './src/components/TextComponent';
import ImageComponent from './src/components/ImageComponent';
import ButtonComponent from './src/components/ButtonComponent';

function App(): React.JSX.Element {
  return (
    <>
      <ViewComponent />
      <TextComponent />
      <ImageComponent />
      <ButtonComponent />
    </>
  );
}

export default App;
