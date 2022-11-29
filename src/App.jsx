import {Routes,Route, Link} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Features from "./pages/Features"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"

import styles from "./index.css"
function App() {
  return (
    <div className="cover_container">
      <header className="musthead">
        <div className="header_div">
          <h3 className="header_text">Cover</h3>
          <nav className="nav_header">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      <footer className="mastfoot">
        <div>
          <p className="footer_p">
          Cover template for 
          <a href="https://getbootstrap.com/"> Bootstrap</a>
          , by 
          <a href="https://twitter.com/mdo"> @mdo</a>
          .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
