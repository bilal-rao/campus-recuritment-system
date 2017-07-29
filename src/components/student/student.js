import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
class Student extends Component {
  render() {
      return(
        firebase.auth().currentUser ? (
      <div>
          <NavBarSignOut />
        <center><h1>Student Panel</h1></center>
        <Link to="viewjobs">View Jobs</Link>  <br/>      
        <Link to="viewcompany">View Company</Link><br/>
        <Link to="createcv">Create CV</Link><br/>
        <Link to="myProfile">My Profile</Link><br/>
        
      </div>
        ) : (<div>{browserHistory.push("login")}</div>)
      );
  }
}

export default Student;
