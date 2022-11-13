import { Route, Routes } from "react-router-dom";
import ReferAndEarn from "./Pages/ReferAndEarn/ReferAndEarn";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import './App.css';
import FriendsReferred from "./Pages/FriendsReferred/FriendsReferred";
import Breadcrumbs from "./Pages/Shared/Breadcrumbs/Breadcrumbs";


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Breadcrumbs></Breadcrumbs>
       <Routes>
          <Route path="/" element={<ReferAndEarn/>}/>
          <Route path="/friendsReferred" element={<FriendsReferred/>}/>
       </Routes>
    </div>
  );
}

export default App;
