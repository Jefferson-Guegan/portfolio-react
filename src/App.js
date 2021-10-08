import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Techno from './components/Techno';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Techno/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
