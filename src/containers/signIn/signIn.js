import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory, Link } from 'react-router';
import NavBar from '../../components/navBar/navBar';



class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    }
    this.SignIn = this.SignIn.bind(this);
  }

  SignIn(ev) {
    ev.preventDefault();
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      // browserHistory.push("/dashboard");
      var userId = firebase.auth().currentUser.uid;
      return firebase.database().ref('user/' + userId).once('value').then((snapshot) => {
        var username = snapshot.val().typeOfUser;
        console.log(username);
        this.setState({
          error: null,
        })
        if (username === "student") {
          browserHistory.push('student');
        }
        else if (username === "company") {
          browserHistory.push('company');
        }
        else if (username === "admin") {
          browserHistory.push('admin');
        }
      });
    }).catch((error) => {
      // Handle Errors here.
      // alert(error);
      console.log("error", error)
      this.setState({
        error: error.message,
      })
      // ...
    });
    //  var user = firebase.auth().currentUser;
  }
  render() {
    return (
      <div>
        <center> <h1>SignIn</h1> </center>
        <div className="container">
          <form onSubmit={this.SignIn.bind(this)}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" placeholder="Email" ref="email" /> <br />
            </div>
            <div className="form-group">
              <label htmlFor="password">password:</label>
              <input type="password" className="form-control" ref="password" placeholder="password" /> <br />
            </div>

            <input className="btn btn-primary" type="submit" value="Login" />
            {this.state.error && <div style={{color: 'red'}}> {this.state.error}</div>}
            <Link to="/signup">Don't Have an Account</Link>

          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
