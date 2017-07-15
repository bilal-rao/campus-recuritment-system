import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
class AllJobs extends Component {
    constructor(props){
        super(props);
        this.state = {
            job : []
        }
    }
postJob(ev){
      ev.preventDefault();
    var jobData =[ {
             jobTitle : this.refs.jobTitle.value,
             education : this.refs.education.value,
             skills : this.refs.skills.value,
             email : this.refs.email.value,
             companyName : this.refs.compName.value
    } ]
        this.setState((prev)=>({
           job: prev.job.concat(jobData)}))
           var Allref = firebase.database().ref();
           Allref.child('job').set(
                this.state.job
           )
}
  render() {
      return(
      <div>
        <center><h1>All Jobs</h1></center>
        <form onSubmit={this.postJob.bind(this)}>
           jobTitle: <input type="text"  ref="jobTitle" /><br/>
           Education <input type="text"  ref="education" /><br/>
           Skills <input type="text"  ref="skills" /><br/>
           Email <input type="email"  ref="email" /><br/>
           Company Name <input type="text"  ref="compName" /><br/>
           
           
            <button type="submit">Post Job</button>
        </form>

      </div>
      );
  }
}

export default AllJobs;
