import React    from 'react';
import {Router} from "@reach/router";
import Footballers   from './Footballers';
import AddFootballer from './AddFootballer';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Footballers   path='/' />
        <Footballers   path='/Footballers/:FootballerID' />
        <AddFootballer path='/add-Footballer/' />
      </Router>
    );
  }

}

export default App;
