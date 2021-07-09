import './App.css';
import Home from './Pages/Home.js';
import Scroll from './Pages/scroll.js';
import Aboutme from './Pages/aboutMe.js';
import Proj from './Pages/Proj.js';
import Contact from './Pages/contact.js';


function App() {
  return (
    <div className="App">
      <Home/>
      <Scroll />
      <Aboutme/>
      <Proj />
      <Contact />
    </div>
  )
}

export default App;
