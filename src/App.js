import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NavBar from './components/component/NavBar';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={AddUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
