import React ,{Component }from 'react';
import ReactDOM from 'react-dom';
import {Heading1} from './body'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            name:""
        }
    }

    change(){
        this.setState={
            name: this.refs.abc.value
        }
    }
    render(){
        return(
            <div>
            <Heading1 data={this.state.name}/>

            <button onClick={this.change.bind(this)}>Submit</button>
            <input type="text" refs="abc"/>
            </div>
        )
    }
}

export default App;


