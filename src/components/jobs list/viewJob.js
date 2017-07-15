import React from "react"
import * as firebase from 'firebase';
import NavBarSignOut from '../navBar/navBarSignOut';
import {Link,browserHistory} from 'react-router';



class ViewJob extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewJob : []
        }
    }
    componentDidMount(){
        const refRoot = firebase.database().ref();
        const rootRef = refRoot.child('job');
        rootRef.on('value',snapshot=>{
            var userObj = snapshot.val();
            this.setState({viewJob : userObj})
        })
    }
    render(){
        return  firebase.auth().currentUser ? (
            <div>
                <NavBarSignOut />
               <center> <h1>Vicancies</h1> </center>
                {this.state.viewJob && this.state.viewJob.length ? 
                 this.state.viewJob.map((data , index) => {
                        return <div key={index} className="container">
  <table className="table">
    <thead >
      <tr>
        <th>Job Title</th>
        <th>education</th>
        <th>skills</th>
        <th>Email</th>
        <th>Company Name</th>        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.jobTitle}</td>
        <td>{data.education}</td>
        <td>{data.skills}</td>
        <td>{data.email}</td>
        <td>{data.companyName}</td>
        
        
      </tr>
    </tbody>
  </table>
</div>      }) : false }
            </div>
        ) : ( <div>browserHistory.push('login')</div> )
    }
}
export default ViewJob;