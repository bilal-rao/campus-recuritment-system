import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
class Admin extends Component {
  render() {
      return(
      <div>
          <NavBarSignOut />
        Admin component
      </div>
      );
  }
}

export default Admin;
