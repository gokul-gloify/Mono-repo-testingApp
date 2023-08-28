import  { Button, CustomCard } from "@tuomo/common";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Client Page</h1>
      <CustomCard  name={"Admin Card"} img={"card2"}/>
      <Button textColor="secondary">Client Page Btn</Button>
    </div>
  );
}

export default App;
