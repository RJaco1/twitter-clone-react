import { Switch, Route } from "react-router-dom";
import "./App.css";

import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;