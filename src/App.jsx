import { BrowserRouter, Routes, Route } from "react";
import "./assets/styles/App.scss";
import { Home } from "./pages/Home";
import { Memories } from "./components/Memories/Memories";
import { Profiles } from "./components/Profiles/Profiles";

function App() {
  // <BrowserRouter>
  //   <Router>
  //     <Route></Route>
  //   </Router>
  // </BrowserRouter>;
  return (
    <>
      <Profiles />
      <Memories />
    </>
  );
}

export default App;
