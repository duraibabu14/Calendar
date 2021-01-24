//Importing the css
import "./App.css";

//Importing the components
import Calendar from "./Calendar";
import Home from "./Home";
import NotFound from "./NotFound";

//Importing the React-Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
