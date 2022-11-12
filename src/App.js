import { Route, Routes } from "react-router-dom";
import ReferAndEarn from "./Pages/ReferAndEarn/ReferAndEarn";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import './App.css';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
          <Route path="/" element={<ReferAndEarn/>}/>
       </Routes>
    </div>
  );
}

export default App;
