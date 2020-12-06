import "./App.css";
import { useState } from "react";
import "../src/pages/services/services.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "../src/pages/services/Gallery";
import Users from "../src/pages/services/Users";
import Body from "../../Project4/src/components/S-Component/Body";
import Login from "./components/A-Components/LoginForm";
import RegisterForm from "../../Project4/src/components/A-Components/RegisterForm";
import Booking from "../../Project4/src/components/A-Components/Booking";
import ScrollToTop from "./components/ScrollToTop";
// import { UseContext } from "./UseContext";
function App() {
  const [user, setUser] = useState();
  return (
    <Router>
      <div className="App">
        {/* <UseContext.Provider value={{ user, setUser }}> */}
        <Navbar />
        <ScrollToTop />
        <Switch>
          {/* <Route path="/Booking/:id" component={Booking} /> */}
          <Route path="/" exact component={Home} />
          {/* <Route path="/services" component={Gallery} /> */}
          <Route path="/services" component={Users} />
          <Route path="/Body" component={Body} />
          <Route path="/Login" component={Login} />
          <Route path="/registerform" component={RegisterForm} />
          <Route path="/details/:language" component={Booking} />
        </Switch>
        <Footer />

        {/* </UseContext.Provider> */}
      </div>
    </Router>
  );
}
export default App;
