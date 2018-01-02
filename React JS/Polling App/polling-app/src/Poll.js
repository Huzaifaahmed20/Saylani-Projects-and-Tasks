import React, { Component } from 'react';
import firebase from 'firebase'

class Poll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Poll: "",
            pollName: "",
            question: "",
            optA: "",
            optB: "",
            optC: "",
            optD: "",
            voteA: "",
            voteB: "",
            voteC: "",
            voteD: "",
        }
        console.log(this.props.match.params.pollname)
        let urlParam = this.props.match.params.pollname
        let that = this;
        firebase.database().ref("/polls/" + urlParam + "/").once('value', (snap) => {
            console.log(snap.val());
            let fireSnap = snap.val();
            that.setState({
                Poll: fireSnap,
                pollName: fireSnap.pollName,
                question: fireSnap.question,
                optA: fireSnap.a.option,
                optB: fireSnap.b.option,
                optC: fireSnap.c.option,
                optD: fireSnap.d.option,
            })
        })
    }
    casteVote(option,ev){
        let cloneDB = this.state.Poll
        if(option === 'a')
        {
            cloneDB.a.vote += 1;
        }
        else if(option === 'b'){
            cloneDB.b.vote += 1;
        }
        else if(option === 'c'){
            cloneDB.c.vote += 1;
        }
        else if(option === 'd'){
            cloneDB.d.vote += 1;
        }
        console.log(cloneDB,'cloneDB')
        this.setState({
            Poll:cloneDB
        })
        firebase.database().ref("/polls/"+this.state.pollName+"/").set(cloneDB)
    }
    render() {
        return (
            <div className='custome-container'>
                <div className="container">
                    <h1 className="text-primary text-center">{this.state.question}</h1>
                    <br/>
                    <div className='btn-container'>
                        <button type="button" onClick={this.casteVote.bind(this, 'a')} className="btn btn-warning custome-btn">{this.state.optA}</button>
                        <button type="button" onClick={this.casteVote.bind(this, 'b')} className="btn btn-primary custome-btn">{this.state.optB}</button>
                        <br />
                        <button type="button" onClick={this.casteVote.bind(this, 'c')} className="btn btn-success custome-btn">{this.state.optC}</button>
                        <button type="button" onClick={this.casteVote.bind(this, 'd')} className="btn btn-info custome-btn">{this.state.optD}</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Poll