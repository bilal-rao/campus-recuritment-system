import React from "react"
import NavBarSignOut from '../navBar/navBarSignOut';
import * as firebase from 'firebase';

class UpdateProfile extends React.Component{
     constructor(props){
     super(props);
     this.state = {
         updateProfile : []
     }
        }
        updateProfile(ev){
      ev.preventDefault();
    var userProfile = {
             name : this.refs.name.value,
             email : this.refs.email.value,
             location : this.refs.location.value,
             currentEducation : this.refs.currentEducation.value,
             skill : this.refs.skill.value
    }
        this.setState((prev)=>({
           updateProfile: prev.updateProfile.concat(userProfile)}))
           var Allref = firebase.database().ref();
           Allref.child('updateProfile').set(
                this.state.updateProfile
           )
}
        
    render(){
        return (            
                  <div>
                      <NavBarSignOut />
           <center> <h1>Update Profile</h1> </center>
     <div className="container">
        <form onSubmit={this.updateProfile.bind(this)}>
             <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="name" className="form-control" placeholder="name" ref="name" /> <br/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" placeholder="Email" ref="email" /> <br/>
            </div>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input type="text" className="form-control" ref="location" placeholder="location" /> <br/>
            </div>
              <div className="form-group">
                <label htmlFor="currentEducation">Current Education:</label>
                <input type="text" className="form-control" ref="currentEducation" placeholder="Cuurent Education" /> <br/>
            </div>  <div className="form-group">
                <label htmlFor="skill">Skills:</label>
                <input type="text" className="form-control" ref="skill" placeholder="skills" /> <br/>
            </div>
                <input className="btn btn-primary" type="submit" value="Submit"/>
        </form>
         </div>
      </div>
        )
    }
}
export default UpdateProfile;