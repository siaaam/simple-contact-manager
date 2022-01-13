import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NavBar from './components/component/NavBar';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
