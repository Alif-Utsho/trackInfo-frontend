import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

function App() {
  return (
    <div>
      <h1 className='text-center fw-bold alert alert-primary'>Track Info</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
