import './App.css';
import Slider from './components/Slider'
import SliderAlternative from './components/SliderAlternative'

function App() {
  return (
    <>
      <Slider/>
      <div className="test test-1">Text in the middle</div>
      <SliderAlternative/>
    </>
  );
}

export default App;
