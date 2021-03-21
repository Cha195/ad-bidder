import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
