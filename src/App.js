import Home from './Home';
import Create from "./Create"
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div className="continer">
          <Navbar />
        </div>
        <div className="content">
          <Switch>

            <Router exact path="/">
              <Home />
            </Router>

            <Router exact path="/create">
              <Create />
            </Router>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
