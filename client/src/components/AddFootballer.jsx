import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Footballer extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.Footballer && this.state.FootballerLoaded === true) {
      return (
        <p>Error loading Footballers. Try again later.</p>
      );
    } else if (!this.state.Footballer) {
      return (
        <p>Loading Footballers...</p>
      );
    } else if (this.state.Footballer.length === 0) {
      return (
        <p>Sorry, no Footballers are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.Footballer.title}</h1>
          <Link to='/'>Back to All Footballers</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.FootballersAPI}/${this.props.FootballerID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({Footballer       : json});
        this.setState({FootballerLoaded : true});
      })
      .catch(err => {
        this.setState({FootballerLoaded: true});
      });
  }

}

export default Footballer;
