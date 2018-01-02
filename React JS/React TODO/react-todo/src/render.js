import React, { Component } from 'react';
import firebase from 'firebase';

class renderTodo extends Component{

    constructor(prop){
        super(prop)
        this.state={
            todo:obj.key
        }
        this.renderText();
    }
    renderText(){
    firebase.database("todo").on("child_added",function(snap){
        var obj = snap.val();
        obj.key = snap.key
        console.log(obj);
    })
}
    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.todo}</li>
                </ul>
            </div>
        )
    }
}

export default renderTodo;