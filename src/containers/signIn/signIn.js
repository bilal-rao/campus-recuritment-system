import React, { Component } from 'react';
import * as firebase from 'firebase';
import {browserHistory,Link} from 'react-router';
import NavBar from '../../components/navBar/navBar';



class SignIn extends Component {
  SignIn(ev){
    ev.preventDefault();
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      // browserHistory.push("/dashboard");
      var userId = firebase.auth().currentUser.uid;
     return firebase.database().ref('user/' + userId).once('value').then(function(snapshot) {
    var username = snapshot.val().typeOfUser;
    console.log(username);
    if(username === "student"){
      browserHistory.push('student');
 }
 else if(username === "company"){
      browserHistory.push('company');
 }
 else if(username === "admin"){
   browserHistory.push('admin');
 }
});
    }).catch(function(error) {
  // Handle Errors here.
  alert(error);
  // ...
}); 
//  var user = firebase.auth().currentUser;

// if (user === user.uid) {
//   browserHistory.push('admin');
// } else {
//   alert("Admin Does'nt Have an Valid Id");
//}
    
  }
  render() {
    return (
        <div>
           <center> <h1>SignIn</h1> </center>
     <div className="container">
        <form onSubmit={this.SignIn.bind(this)}>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" placeholder="Email" ref="email" /> <br/>
            </div>
            <div className="form-group">
                <label htmlFor="password">password:</label>
                <input type="password" className="form-control" ref="password" placeholder="password"  /> <br/>
            </div>

                <input className="btn btn-primary" type="submit" value="Login"/>
                <Link to="/signup">Don't Have an Account</Link>
            {/*<MuiThemeProvider>
              <Paper 
              style={style} 
              zDepth={3} 
              rounded={false} 
              />
                <TextField
                 floatingLabelText="Email"
                 ref="email"
              />
               <TextField
                 floatingLabelText="Password"
                 ref="password"
              />
              </MuiThemeProvider>*/}
        </form>
         </div>
      </div>
    );
  }
}

export default SignIn;
