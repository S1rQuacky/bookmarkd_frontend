import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Update from './pages/Update';

function App() {
  return (
    <main>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Update/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
