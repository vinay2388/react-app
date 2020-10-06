import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import PostList from './postForm';
import ReadList from './readList';
// var cors = require('cors')
// import TreeMenu from 'react-simple-tree-menu';
// import ReactTree from './reactTree';



class App extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome to {process.env.REACT_APP_BASE_URL}</p>
        <Router>
          <div className="">
            <ul className="">
              <li>
                <Link to="/">Read Category List</Link>
              </li>
              <li>
                <Link to="/save">Save Category</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact path='/' component={ReadList}></Route>
              <Route exact path='/save' component={PostList}></Route>
              <Route exact path='/read' component={ReadList}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

export default App;
