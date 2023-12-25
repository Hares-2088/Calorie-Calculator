import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from "./Components/MyNavbar";
import HomePage from "./Pages/HomePage";
import Documentation from "./Pages/Documentation";
import Gender from "./Pages/Gender";
import Habits from "./Pages/Habits";
import Sources from "./Pages/Sources";



export default function App() {
  return (
    <Router>
    <MyNavBar />
    <Routes>

        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/documentation" element={<Documentation />} />
        <Route exact path="/gender" element={<Gender />} />
        <Route exact path="/habits" element={<Habits />} />
        <Route exact path="/sources" element={<Sources />} />

    </Routes>

  </Router>
  );
}
