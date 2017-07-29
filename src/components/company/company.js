import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
import PostJob from '../jobs list/postJob';

class Company extends Component {
  render() {
      return(
          firebase.auth().currentUser ? (
      <div>
          <NavBarSignOut />
        <center><h1>Company Panel</h1></center>
        <Link to="viewStudent">View Student</Link><br />
         {/* <Link to="viewjobsbycompany">All Jobs</Link><br /> */}
        <Link to="postjob">Post Job</Link><br />          
        <Link to="myjobs">My Posted Jobs</Link><br />
        
      </div>
          ) : (<div>{browserHistory.push("login")}</div>)
      );
  }
}

export default Company;
