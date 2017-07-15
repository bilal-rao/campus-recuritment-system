import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
class DashBoard extends Component {
  getData(){
    
  }
  render() {
    return firebase.auth().currentUser ?
    (
      <div>
        <NavBarSignOut/>
        hey DashBoard <br />
         {/*<button className="btn btn-primary" onClick={this.getData.bind(this)} > Get Data </button> <br />*/}
        {/*{JSON.stringify(firebase.auth().currentUser)}*/}
        {/*<div>{snapshot.val()}</div>*/}
      </div>
    ): (
    <div>  {browserHistory.push('/login')} </div>
    )
  }
}

export default DashBoard;
