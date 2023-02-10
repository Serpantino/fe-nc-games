import "./App.css";
import { Routes, Route } from "react-router-dom";
//===========================//
//===== Component Import =====//
//===========================//
import Nav from "./components/Nav";
import Search from "./components/Search";
import {UserProvider} from "./context/UserProvider";

//=========================//
//===== Pages Import =====//
//=========================//
import Home from "./pages/Home";
import Review from "./pages/Review";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Nav />
        <Search />
        <Home>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/review/:review_id" element={<Review />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Home>
      </UserProvider>
    </div>
  );
}

export default App;
