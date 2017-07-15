import React, { Component } from 'react';
import SignIn from './containers/signIn/signIn';
import SignUp from './containers/signUp/signUp';
import DashBoard from './components/dashBoard/dashBoard';
import * as firebase from 'firebase';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import NavBar from './components/navBar/navBar';
import Dashboard from './components/dashBoard/dashBoard';
import Main from './components/main/main';
import Student from './components/student/student';
import Company from './components/company/company';
import Admin from './components/admin/admin';
import AllJobs from './components/jobs list/allJobs';
import ViewJob from './components/jobs list/viewJob';
import ViewCompany from './components/company/viewCompany';
import UpdateProfile from './components/student/updateProfile';
import ViewStudent from './components/student/viewStudent';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBaPugtcxCkKS8ODLx5tAavx3h6DHCEYtY",
    authDomain: "campus-recuirtment-system.firebaseapp.com",
    databaseURL: "https://campus-recuirtment-system.firebaseio.com",
    projectId: "campus-recuirtment-system",
    storageBucket: "",
    messagingSenderId: "743601707256"
};
firebase.initializeApp(config);


class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={NavBar}>
                    <IndexRoute component={Main} />
                    <Route path="login" component={SignIn} />
                    <Route path="signup" component={SignUp} />  
                    </Route >
                       <Route path="dashboard" component={Dashboard} />
                       <Route path="student" component={Student} />
                       <Route path="company" component={Company} />  
                       <Route path="admin" component={Admin} /> 
                       <Route path="alljobs" component={AllJobs} />  
                       <Route path="viewjobs" component={ViewJob} />  
                       <Route path="viewcompany" component={ViewCompany} />
                       <Route path="updateProfile" component={UpdateProfile} />                       
                       <Route path="viewStudent" component={ViewStudent} />                       
                                              
            </Router>
        );
    }
}


export default Routes;