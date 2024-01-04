import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AllServices from './components/AllServices';
import Clients from './Clients';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
           <Route path="/services" component={AllServices}></Route>
          <Route path="/clients" component={Clients}></Route>
          <Route path="/testimonials" component={Testimonials}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
