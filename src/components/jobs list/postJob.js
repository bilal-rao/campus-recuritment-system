import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link, browserHistory } from 'react-router';
import NavBarSignOut from '../navBar/navBarSignOut';
class PostJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: [],
            uEmail: ' ',    
            uName: ' ',
            userId : ' ',
        }
        console.log(this.state.uEmail, this.state.uName);
    }
    componentWillMount(){
        var userId = firebase.auth().currentUser.uid;
        var compEmail;
        var compName;
        var compData = firebase.database().ref().child('user/' + userId).on('value', snap => {
            compEmail = snap.val().uEmail;
            compName = snap.val().uName;
            this.setState({
                uEmail: compEmail,
                uName: compName,
                userId : userId
            })
        })
    }
    postJob(ev) {
        ev.preventDefault();
        var jobData = {
            jobTitle: this.refs.jobTitle.value,
            education: this.refs.education.value,
            skills: this.refs.skills.value,
            email: this.state.uEmail,
            companyName: this.state.uName,
            cId: this.state.userId
        }
        console.log(this.state);
        //Firebase Data insert code start
        console.log(this.state);
        console.log(jobData);
        var rootRef = firebase.database().ref();

        var refRoot = rootRef.child('jobs').push(jobData);
        this.setState({
            job:  jobData// ye line kia kr rhi ha?
        })
        alert('job posted');
         browserHistory.push('company');
        //Firebase Data insert code end
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(() => {
            if (firebase.auth().currentUser) {
                firebase.database().ref('jobs').orderByChild('id').equalTo(firebase.auth().currentUser.uid).once('value').then((snap) => {
                    var obj = snap.val();
                    console.log(obj);
                    let jobs = [];
                    for (let key in obj) {
                        jobs.push(
                            obj[key]
                        )
                    }
                    console.log(jobs);
                    this.setState({ jobs })
                    console.log(this.state.jobs);
                })
            }
        })
    }
    render() {
        return (
            firebase.auth().currentUser ? (
                <div>
                    <NavBarSignOut />
                    <center><h1>Post Job</h1></center>
                    <div className="container">
                        <form onSubmit={this.postJob.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="jobTitle">jobTitle:</label>
                                <input type="text" className="form-control" placeholder="jobTitle" ref="jobTitle" /> <br />
                            </div>
                            <div className="form-group">
                                <label htmlFor="education">Education:</label>
                                <input type="text" className="form-control" placeholder="Current Education" ref="education" /> <br />
                            </div>
                            <div className="form-group">
                                <label htmlFor="skills">Skill Set:</label>
                                <input type="text" className="form-control" ref="skills" placeholder="skills" /> <br />
                            </div>  <div className="form-group">
                                <label htmlFor="experience">Experience:</label>
                                <input type="text" className="form-control" ref="experience" placeholder="Experienced?" /> <br />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Post Job" />
                        </form>
                    </div>

                </div>
            ) : (<div>{browserHistory.push("login")}</div>)
        );
    }
}

export default PostJob;
