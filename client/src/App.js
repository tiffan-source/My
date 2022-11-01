import "./Scss/index.scss";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Article from "./Views/Article";
import Home from "./Views/Home";
import Work from "./Views/Work";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/article" element={<Article/>}/>
        </Routes>
        <Footer/>

      </Router>
    </>
  );
}

export default App;