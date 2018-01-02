import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'jquery';
// import $ from 'jquery';
import 'materialize-css'
import 'jquery/dist/jquery.slim'
import 'uikit'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            details: "",
            todo: []
        }
        this.addTodo = this.addTodo.bind(this)
        this.titleForm - this.titleForm.bind(this)
        this.detailsForm = this.detailsForm.bind(this)

    }

    titleForm = (ev) => {

        this.setState({
            title: ev.target.value
        })
        // console.log(this.state.title)
    }
    detailsForm = (ev) => {
        this.setState({
            details: ev.target.value
        })
    }

    addTodo(ev) {
        let todoClone = this.state.todo
        todoClone.push(this.state.title)
        todoClone.push(this.state.details)

        this.setState({
            todo: todoClone,
        })
        console.log(this.state.todo)
    }






    render() {



        return (
            <div>
                {/* {
                    this.state.todo.map((val, ind) => {
                        return (
                            <h3 key={ind}>{val}</h3>
                        )
                    })
                } */}
                <div className="row">
                    <h1>Create Your Todo</h1>
                    <form className="col s3">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="first_name" type="text" value={this.state.title} className="validate" onChange={this.titleForm} />
                                <label htmlFor="first_name">Title</label>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="last_name" value={this.state.details} onChange={this.detailsForm} type="text" className="validate" />
                                    <label htmlFor="last_name">Description</label>
                                </div>
                            </div>

                            <div className="row">
                                <a onClick={this.addTodo} className="waves-effect waves-light btn blue">Add</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col s3 #1de9b6 teal accent-3" uk-grid="true">
                        <div>
                            <h4 className="white-text center">Todo</h4>
                            <div uk-sortable="group: sortable-group">
                                {
                                    this.state.todo.map((val, ind) => {
                                        return (
                                            <div className="uk-card uk-card-default">
                                                <div className="uk-card-header">
                                                    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                                        <div className="uk-width-auto">

                                                        </div>
                                                        <div className="uk-width-small">

                                                            <h3 key={ind} className="uk-card-title black-text uk-margin-remove-bottom">{val}</h3>

                                                        </div>
                                                    </div>
                                                </div>
                                                
                                             
                                                        <div className="uk-card-body">
                                                            <p key={ind}>{val}</p>
                                                        </div>
                                                    
                                                

                                                
                                                        <div className="uk-card-footer">
                                                            <button className="uk-button uk-button-text"><i className="material-icons">delete</i></button>
                                                        </div>
                                                
                                                
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>

                    <div className="col s3 #aeea00 lime accent-4">
                        <div>
                            <h4 className="white-text center">Doing</h4>
                            <div uk-sortable="group: sortable-group">

                            </div>
                        </div>
                    </div>

                    <div className="col s3 #37474f blue-grey darken-3">
                        <div>
                            <h4 className="white-text center">Review</h4>
                            <div uk-sortable="group: sortable-group">

                            </div>
                        </div>
                    </div>

                    <div className="col s3 #0d47a1 blue darken-4">
                        <div>
                            <h4 className="white-text center">Done</h4>
                            <div uk-sortable="group: sortable-group">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
