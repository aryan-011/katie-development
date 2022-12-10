import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './components/landing-page/Landing-page';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<LandingPage/>}/>
      </Switch>
    </Router>

  );
}

export default App;
