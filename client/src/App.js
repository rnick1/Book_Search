import './App.css';
// import Search from './pages/Search.js';
// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <Search/>
//     </div>
//   );
// }

// export default App;
// =================================
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={["/saved"]}>
            <Saved/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;