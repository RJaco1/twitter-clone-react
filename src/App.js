import "./App.css";
import AuthProvider from './context/AuthProvided'
import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";

function App() {

  return (
    <AuthProvider>
      <div className="container app">
        <Switch>
          <Layout exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
