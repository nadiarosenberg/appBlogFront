import './css/style.css';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Router><Switch><Route path='/' exact><Home/></Route>
      <Route path='/form/:id?' exact><Form/></Route> {/* ? incluye form/ and form/:id, sino redirecciona */}
      <Route path='/post/:id?' exact><Post/></Route> 
      </Switch></Router>
    </div>
  );
}

export default App;
