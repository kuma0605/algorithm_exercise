import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BubbleSort from './algorithm/bubbleSort.js';
import PickSort from './algorithm/pickSort.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/bubbleSort" component={BubbleSort} />
          <Route path="/pickSort" component={PickSort} />
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}


function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/bubbleSort">BubbleSort</Link>
      </li>
      <li>
        <Link to="/pickSort">PickSort</Link>
      </li>
    </ul>
  );
}

export default App;