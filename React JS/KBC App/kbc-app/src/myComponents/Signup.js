import React, { Component } from 'react';
import firebase, { auth, provider } from 'firebase';
import 'firebase/database';
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            email: "",
            pass: ""
        }
    }
    // submit(){
    //     auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
    //     .then(function (success) {

    //         console.log(success.uid);

    //         firebase.database.child('user/' + success.uid).once("value", function (snapshot) {
    //             console.log(snapshot.val());
    //             localStorage.setItem("user", JSON.stringify(snapshot.val()));

    //         });

    //     })
    //     .catch(function (error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
           
    //         console.log(error);
    //     });
    // }
    inputHandler(ev) {
        this.setState({
            fullName: ev.target.value,
            email: ev.target.value,
            pass: ev.target.value
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Sign Up</h1>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <label htmlFor="usr">Fullname:</label>
                        <input onChange={this.inputHandler.bind(this)} type="text" className="form-control input-lg forBorder" id="usr" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <label htmlFor="email">@Email:</label>
                        <input onChange={this.inputHandler.bind(this)} type="email" className="form-control input-lg forBorder" id="email" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <label htmlFor="pwd">*Password:</label>
                        <input onChange={this.inputHandler.bind(this)} type="password" className="form-control input-lg forBorder" id="pwd" />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary btn-lg pull-right">Sign Up</button>
                {/* <div className="row">
                    <div className="col-xs-12">
                        <h4 className="text-center">Dont Have an Account ?</h4>
                        <a href="#" class="btn btn-primary center-block" role="button">Create One</a>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xs-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">

                    </div>
                </div>
            </div>

        )
    }
}
export default Signup; 