import logo from './logo.svg';
import './App.css';
import ApplicationChecker from './components/ApplicationChecker'
import Garage from './components/Garage'
import moment from 'moment';

const cars = [
  {
    name: 'Ford',
    speed: 70
  },
  {
    name: 'Audi',
    speed: 150
  },
  {
    name: 'Toyota',
    speed: 120
  }
]


function App() {
  return (
    <div className="App">
      <ApplicationChecker date={moment()} />
      <ApplicationChecker date={moment().add(1, 'day')} />
      <ApplicationChecker date={moment().subtract(1, 'day')} />
      <ApplicationChecker/>

      {/* Nice conditional rendering with && */}
      <Garage cars={['Ford', 'Audi', 'Audi']}/>

      {/* Using objects and arrays */}
      <Garage cars={cars}/>
      <Garage cars={[]}/>
    </div>
  );
}

export default App;