import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './components/landing-page/Landing-page';
import ScrollToTop from './components/scrollToTop.js'
function App() {
  return (
    <Router>
        <ScrollToTop/>
      <Switch>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/waitlist' element={<div>Waitlist</div>} />
      </Switch>
    </Router>

  );
}

export default App;
