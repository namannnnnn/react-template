import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
// import './App.css';
import Header from './components/Header';
import Side from './components/Side';
import Screen from './components/Screen'
// import '../src/custom.scss';


function App() {
  return (
    <>
     <Router> 
     <Header />
     <Side />
     <Routes>
     <Route path="/" element = { < Screen /> } /> 
     {/* <Route path="/" element = { < SideNavbar /> } /> */}
     </Routes>
     </Router>
   </>
  );
}

export default App;
