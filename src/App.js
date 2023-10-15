import Dashboard from "./layout/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./layout/Login";
import Public from "./route/publicRouter/public";
import PublicRouting from "./route/publicRouter/publicRouting";
import Private from "./route/privateRouter/private";
import PrivateRouting from "./route/privateRouter/privateRouting";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<Public />}>
            {PublicRouting?.map((publicRoute, index) => {
              const { path, Component } = publicRoute;
              return <Route key={index} path={path} element={<Component />} />;
            })}
          </Route>

          <Route exact={true} path="/" element={<Private />}>
            {PrivateRouting?.map((privateRoute, index) => {
              const { path, Component } = privateRoute;
              return <Route key={index} path={path} element={<Component />} />;
            })}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
