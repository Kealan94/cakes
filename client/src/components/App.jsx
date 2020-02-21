import React    from 'react';
import {Router} from "@reach/router";
import Footballers   from './Footballers';
import Footballer    from './Footballer';
import AddFootball  from './AddFootball';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Footballers   path='/' />
        <Footballer    path='/Footballer/:FootballerID' />
        <AddFootball path='/add-Football/' />
      </Router>
    );
  }

}

export default App;
