
import React from "react"
import * as firebase from 'firebase';
import NavBarSignOut from '../navBar/navBarSignOut';
import {Link,browserHistory} from 'react-router';



class ViewDeleteCompany extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewCompany : [],
            deleteCompany : []
        }
    }
    componentDidMount(){
        const refRoot = firebase.database().ref('user/').orderByChild('typeOfUser').equalTo('company').on('value',snapshot=>{
            var userObj = snapshot.val();
            if(userObj === null){
                alert("There is no Record Of Company in our Database");
                browserHistory.push('admin');
            }
            else{
             let vm = this;
             let obj = [];
             let deleteCompany = [];
                Object.keys(userObj).forEach(function (key) {
                 obj = userObj[key]
                 obj.id = key
                 deleteCompany.push(key);
                 console.log(deleteCompany)
            vm.state.viewCompany.push(obj)
            vm.setState({ viewCompany: vm.state.viewCompany, deleteCompany : deleteCompany})
                });
    }
            console.log(this.state.viewCompany);
        })
    }
    deleteComp(i){
        firebase.database().ref('user/'+this.state.deleteCompany[i]).remove();
        alert('succesFull Deleted')
    }
    render(){
        return  firebase.auth().currentUser ? (
            <div>
                <NavBarSignOut />
               <center> <h1>Company Record</h1> </center>
                 {this.state.viewCompany.map((data , index) => (
                         <div key={index} className="container">
    <table className="table">
        <thead >
      <tr>
        <th>Company Name</th>        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.uName}</td>
        <td>{data.uEmail}</td>
        <td><button className='btn btn-danger' onClick={this.deleteComp.bind(this,index)}>Remove</button></td>
      </tr>
    </tbody>
  </table>
    
</div>      ))}
 <Link to="admin" className="btn btn-primary">
    Go Back Admin Panel
  </Link>
            </div>
        ) : ( <div>{browserHistory.push('login')}</div> )
    }
}
export default ViewDeleteCompany;