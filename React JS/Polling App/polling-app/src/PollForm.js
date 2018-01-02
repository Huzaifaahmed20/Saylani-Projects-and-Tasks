
import React, { Component } from 'react';
import firebase from 'firebase'

class PollForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pollName: "",
            question: "",
            a: "",
            b: "",
            c: "",
            d: ""
        }
    }
    updateForm(formLabel, ev) {
        let currentState = {}
        currentState[formLabel] = ev.target.value
        this.setState(currentState)
    }

    saveToFirebase() {
        console.log(this.state, 'states');
        let db = firebase.database();
        let that = this;
        db.ref('/polls/' + this.state.pollName + '/').once('value', function (snapshot) {
            if (snapshot.val() === null) {
                // console.log(this,'this',that.state.a, 'that');
                that.setState({
                    a: { option: that.state.a, vote: 0 },
                    b: { option: that.state.b, vote: 0 },
                    c: { option: that.state.c, vote: 0 },
                    d: { option: that.state.d, vote: 0 }
                })
                // console.log(that.state);
                let thatIs = that;
                db.ref('/polls/' + that.state.pollName + '/').set(that.state)
                    .then((success) => {
                        console.log(success, 'success');
                        thatIs.setState({
                            pollName: '',
                            question: '',
                            a: '',
                            b: '',
                            c: '',
                            d: ''
                        })
                    })
                    .catch((error) => {
                        console.log(error, 'error');
                    })
            }
            else {
                alert('This poll name is already exist, kindly change the poll name.');
            }
        })

}
render() {
    return (
        <div className="container">
            <div>
                <h2 className="text-center text-primary">Create Your Own Poll</h2>
            </div>
            <div>
                <div className="form-group">
                    <label htmlFor="pollName">Poll Name: </label>
                    <input type="text" value={this.state.pollName} onChange={this.updateForm.bind(this, 'pollName')} className="form-control" id="pollName" />
                </div>
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <textarea type="text" value={this.state.question} onChange={this.updateForm.bind(this, 'question')} className="form-control" id="question" ></textarea>
                </div>
                <h3 className="text-warning">Options</h3>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="a">A:</label>
                            <input type="text" value={this.state.a} onChange={this.updateForm.bind(this, 'a')} className="form-control" id="a" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="b">B:</label>
                            <input type="text" value={this.state.b} onChange={this.updateForm.bind(this, 'b')} className="form-control" id="b" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="c">C:</label>
                            <input type="text" value={this.state.c} onChange={this.updateForm.bind(this, 'c')} className="form-control" id="c" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="d">D:</label>
                            <input type="text" value={this.state.d} onChange={this.updateForm.bind(this, 'd')} className="form-control" id="d" />
                        </div>
                    </div>
                </div>
                <hr />

                <button type="submit" onClick={this.saveToFirebase.bind(this)} className="btn btn-primary">Submit</button>
            </div>
        </div>

    )
}
}

export default PollForm;