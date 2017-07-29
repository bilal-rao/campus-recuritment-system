import React from "react"
import NavBarSignOut from '../navBar/navBarSignOut';
import * as firebase from 'firebase';
import {Link,browserHistory} from 'react-router';


class CreateCV extends React.Component{
     constructor(props){
     super(props);
     this.state = {
         updateProfile : null,
         uName : '',
         uEmail : '',
         userId : ''
     }
        }
    componentDidMount(){
        var userId = firebase.auth().currentUser.uid;
        var name;
        var email;
        //   const data = firebase.database().ref().child('jobs').on('value',snap=>{
        //             var obj = snap.val();
        //             console.log('jobs object '+obj);
        //             let keys = [];
        //             console.log('keys '+ Object.keys(obj))
        //   });
        var student = firebase.database().ref().child('user/'+userId).on('value',snap=>{
            name = snap.val().uName;
            email = snap.val().uEmail;
            console.log(name +' '+email);
               this.setState({
                uName : name,
                uEmail : email,
                userId : userId
            })
        })
    }
        updateProfile(ev){
      ev.preventDefault();
        var education = this.refs.education.value;
        var gpa = this.refs.gpa.value;
        var skills = this.refs.skills.value;
        var experience = this.refs.experience.value;
        firebase.database().ref('update Profile').child(this.state.userId).set({
            sName : this.state.uName,
            sEmail : this.state.uEmail,
            education : education,
            gpa : gpa,
            skills : skills,
            experience : experience,
            sId : this.state.userId
        });

}
        
    render(){
        return firebase.auth().currentUser ? (            
                  <div>
                      <NavBarSignOut />
           <center> <h1>Update Profile</h1> </center>
     <div className="container">
        <form onSubmit={this.updateProfile.bind(this)}>
            <div className="form-group">
                <label htmlFor="education">Education:</label>
                <input type="text" className="form-control" placeholder="Current Education" ref="education" /> <br/>
            </div>
            <div className="form-group">
                <label htmlFor="gpa">GPA:</label>
                <input type="number" className="form-control" ref="gpa" placeholder="Your GPA" /> <br/>
            </div>
              <div className="form-group">
                <label htmlFor="skills">Skill Set:</label>
                <input type="text" className="form-control" ref="skills" placeholder="Skills" /> <br/>
            </div>  <div className="form-group">
                <label htmlFor="experience">Experience:</label>
                <input type="text" className="form-control" ref="experience" placeholder="Experienced?" /> <br/>
            </div>
                <input className="btn btn-primary" type="submit" value="Submit"/>
        </form>
         </div>
          <center> <Link to="student" className="btn btn-danger">
            Go Back student Panel
            </Link>
            </center>
      </div>
        ) : (<div>{browserHistory.push('student')}</div>)
    }
}
export default CreateCV;