import  { Button, CustomCard } from "@tuomo/common"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Admin Page</h1>
      <CustomCard  name={"Client Card"} img={"card3"}/>
      <Button textColor="error">SecondWeb Page Btn</Button>
    </div>
  );
}

export default App;
