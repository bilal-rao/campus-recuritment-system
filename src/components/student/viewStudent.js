import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
import AllJobs from '../jobs list/allJobs';

class ViewStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewStudent : []
        }
    }
componentDidMount(){
    const refRoot = firebase.database().ref();
    const rootRef = refRoot.child('updateProfile');
    rootRef.once('value',snapshot =>{
        var userObj = snapshot.val();
        this.setState({ viewStudent : userObj })
    })
      }
  render() {
      return(
      <div>
          <NavBarSignOut />
        <center><h1>Student List</h1></center>
        {this.state.viewStudent  && this.state.viewStudent.length ?
        this.state.viewStudent.map((data,index)=>{
            return <div key={index} className="container">
  <table className="table">
    <thead >
      <tr>
        <th> Name</th>
        <th> Email</th>
        <th> Current Education</th>
        <th> Skills</th>  
        <th> Location </th>                      
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.name}</td>       
        <td>{data.email}</td>        
        <td>{data.currentEducation}</td>        
        <td>{data.skill}</td>        
        <td>{data.location}</td>        
         
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

export default ViewStudent;
