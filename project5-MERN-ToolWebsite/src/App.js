import "./App.css";
import DrinkList from "./components/DrinkList";
import FoodList from "./components/FoodList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Footer from "./components/footer";
import Log from "./components/log";
import LandingPage from "./LandingPage";
import ContactUs from "./components/ContactUs";
import About from "./components/component1/M_About";
import Profile from "./components/ProfilePage";
import OrdersPage from "./components/OrdersPage";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/food" exact component={FoodList} />
          <Route path="/drink" component={DrinkList} />
          <Route path="/log" component={Log} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/test" component={OrdersPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
