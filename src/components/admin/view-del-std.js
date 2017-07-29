import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';

class ViewDeleteStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewStudent : [],
            deleteStd : []
        }
    }
componentDidMount(){
    firebase.database().ref('user').orderByChild('typeOfUser').equalTo('student').once('value').then(snapshot=>{
      const refRoot = snapshot.val();
      console.log(refRoot);
        let student = [];
        let deleteStd = [];
      for(let key in refRoot){
        student.push(refRoot[key]);
        deleteStd.push(key);
      }
      console.log(student)
      console.log(deleteStd)
      this.setState({viewStudent : student, deleteStd : deleteStd})
    })
      }

      deleteStd(i){
        firebase.database().ref('user/'+this.state.deleteStd[i]).remove(); 
      }
  render() {
      return(
        firebase.auth().currentUser ? (
      <div>
          <NavBarSignOut />
        <center><h1>Student List</h1></center>
         {this.state.viewStudent.map((data , index) => (
             <div key={index} className="container">
    <table className="table">
        <thead >
      <tr>
        <th>Name</th>
        <th>Email</th>   
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.uName}</td>
        <td>{data.uEmail}</td>
        <td><button className='btn btn-danger' onClick={this.deleteStd.bind(this,index)}>Remove</button></td>
        
      </tr>
    </tbody>
  </table>
    
</div>      ))}
   <Link to="admin" className="btn btn-primary">
    Go Back Admin Panel
  </Link>
      </div>
        ) : (<div>{browserHistory.push("admin")}</div>)
      );
  }
}
export default ViewDeleteStudent;
