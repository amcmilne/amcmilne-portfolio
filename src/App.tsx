import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SocialBar from "./components/SocialBar";
import Stack from "./components/Stack";
import Repos from "./components/Repos";

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Stack />
      <Repos repos={[]} />
      <SocialBar />
    </Router>
  );
}

export default App;
