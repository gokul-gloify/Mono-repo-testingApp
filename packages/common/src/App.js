import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import CustomCard from './components/button/Card/CustomCard';

function App() {
  return (
    <div className="App">
      <h1>Common Page</h1>
      <CustomCard name={"Common Card"} img={"card1"}/>
      <Button textColor="success">Common Page Btn</Button>
    </div>
  );
}

export default App;
