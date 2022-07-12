import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
  <>
      <Router>
            <div className="App">
              <NavBar/>
              <div className="content">
                <Switch>
                  <Route path="/" exact/>
                </Switch>
              </div>
            </div>

      </Router>
    </>
  );
}

export default App;
