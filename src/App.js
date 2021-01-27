import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import ClassDetails from './Components/ClassDetails/ClassDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='home'>
            <Home />
          </Route>
          <Route path='/details/:id'>
              <ClassDetails></ClassDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
