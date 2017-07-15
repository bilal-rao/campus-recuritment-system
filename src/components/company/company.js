import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
import AllJobs from '../jobs list/allJobs';

class Company extends Component {
componentWillMount(){
          
      }
  render() {
      return(
      <div>
          <NavBarSignOut />
        <center><h1>Company Panel</h1></center>
        <AllJobs />
        <Link to="viewStudent">View Student</Link>
      </div>
      );
  }
}

export default Company;
