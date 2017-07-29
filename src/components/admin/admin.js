import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
class Admin extends Component {
  render() {
      return(
        firebase.auth().currentUser ? (
      <div>
          <NavBarSignOut />
          <center><h1>Admin Panel</h1></center>
           <Link to="viewdelstd">View Student</Link><br />
           <Link to="viewdelcmp">View Companies</Link><br />
           
      </div>
        ) : (<div>{browserHistory.push("login")}</div>)
      );
  }
}

export default Admin;