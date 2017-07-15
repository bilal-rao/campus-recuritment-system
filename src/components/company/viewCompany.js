import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
import AllJobs from '../jobs list/allJobs';

class ViewCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewCompany : []
        }
    }
componentDidMount(){
    const refRoot = firebase.database().ref();
    const rootRef = refRoot.child('job');
    rootRef.once('value',snapshot =>{
        var userObj = snapshot.val();
        this.setState({ viewCompany : userObj })
    })
      }
  render() {
      return(
      <div>
          <NavBarSignOut />
        <center><h1>Companies List</h1></center>
        {this.state.viewCompany  && this.state.viewCompany.length ?
        this.state.viewCompany.map((data,index)=>{
            return <div key={index} className="container">
  <table className="table">
    <thead >
      <tr>
        <th>Companies Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.companyName}</td>        
      </tr>
    </tbody>
  </table>
</div>     
        })
: false }
      </div>
      );
  }
}

export default ViewCompany;
