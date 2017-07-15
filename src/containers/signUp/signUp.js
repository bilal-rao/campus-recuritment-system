import React, { Component } from 'react';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router';
import NavBar from '../../components/navBar/navBar';
import DashBoard from '../../components/dashBoard/dashBoard';

// import Paper from 'material-ui/Paper';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';


// const style = {
//   height: 250,
//   width: 500,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };


class SignUp extends Component {
        constructor(){
            super();
            this.state = {
                user : null
            }
     }

     SignUp(ev){
         ev.preventDefault();
         var email = this.refs.email.value;
         var password = this.refs.password.value;
         var name = this.refs.name.value;
         console.log(email);
         console.log(password);
        const auth=firebase.auth();
       auth.createUserWithEmailAndPassword(email,password).catch(function(error){alert(error);
    }).then(()=>{firebase.auth().currentUser.updateProfile({
           displayName: name
       });console.log(firebase.auth().currentUser);
        browserHistory.push("/login"); 
        var rootRef = firebase.database().ref("user" + "/" + firebase.auth().currentUser.uid ).set({
            uName : name,
            uEmail : email,
            uPassword : password,
            typeOfUser : this.state.user
        });

    // this.props.handlstate(this.state.user)
    });

     }
     setUser(event){
        this.setState({
            user : event.target.value
        });
     }
  render() {
    return (
      <div>
          {/*<NavBar />*/}
    {/*style = {{ display :  ( <DashBoard typeOfUser={this.state.user} />  ?  'none' : 'block') }}*/}
         <center> <h1>SignUp</h1> </center>
     <div className="container">
        <form onSubmit={this.SignUp.bind(this)}>
            <div className="form-group">
                <label htmlFor="text">Enter Name:</label>
                <input type="text" className="form-control" placeholder="Enter Name" ref="name"/> <br />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" placeholder="Email" ref="email"/> <br/>
            </div>
            <div className="form-group">
                <label htmlFor="password">password:</label>
                <input type="password" className="form-control" ref="password" placeholder="password" /> <br/>
            </div>

                <input className="btn btn-primary" type="submit" value="SignUp"/>
                    <div className="radio" onChange={this.setUser.bind(this)}>
                    <label><input type="radio" value="student" name="user"/>Student</label> <br/>
                    <label><input type="radio" value="company" name="user"/>Company</label> <br/>
                    
                </div>
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
export default SignUp;