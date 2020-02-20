import React    from 'react';
import {Router} from "@reach/router";
import Footballers   from './Footballers';
import Footballer    from './Footballer';
import AddFootballer from './AddFootballer';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Footballers   path='/' />
        <Footballer    path='/Footballer/:FootballerID' />
        <AddFootballer path='/add-Footballer/' />
      </Router>
    );
  }

}

export default App;
