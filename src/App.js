import "./App.css";
import Home from "./component/home";
import Login from "./component/login/login";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   <Home/>
    // </div>
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/admin" component={Login} />
        {/* <Route path="/shop" component={Shop} /> */}
        {/* <Route component={Error} /> */}
      </Switch>
    </>
  );
}

export default App;
