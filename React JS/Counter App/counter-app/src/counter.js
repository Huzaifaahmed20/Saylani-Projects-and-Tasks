import React, { Component } from 'react';
import App from './App';
// import Alert from './alert';

class counterMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            warning: 0,
            disab: "",
            timer: 31,
            timerdisplay: "none"
        }
        this.increm = this.increm.bind(this)
        this.decrem = this.decrem.bind(this)
    }
    increm = () => {
        if (this.state.count === 10) {
            this.setState({
                warning: this.state.warning + 1
            })
            if (this.state.warning === 0) {
                alert("you have reached the max limit, You have 2 chances left")
            }
            else if (this.state.warning === 1) {
                alert("you have 1 chancees left")
            }

            else if (this.state.warning === 2) {
                this.setState({
                    count: 0,
                    warning: 0
                })
                alert("you have 0 chances left")
                alert("now wait for 30 seconds")
                setTimeout(()=>{
                    this.setState({
                        disab:false
                    })
                },31000)
                let inter = setInterval(() => {
                    this.setState({
                    disab:"disabled"
                    })
                    this.setState({
                        timerdisplay: "block"
                    })
                    this.setState({
                        timer: this.state.timer - 1
                    })
                    if (this.state.timer === 0) {
                        this.state.timer = 31
                        clearInterval(inter);
                        this.setState({
                            timerdisplay: "none",
                            disab:false
                        })
                    }
                }, 1000)
            }
        }
        
        else {
            this.setState({
                count: this.state.count + 1
            })
        }
    }




    decrem = () => {
        if (this.state.count === -5) {
            this.setState({
                warning: this.state.warning + 1
            })
            if (this.state.warning === 0) {
                
                alert("you have reached the min limit, You have 2 chances left")
            }
            else if (this.state.warning === 1) {
                alert("you have 1 chancees left")
            }

            else if (this.state.warning === 2) {
                this.setState({
                    count: 0,
                    warning: 0
                })
                alert("you have 0 chances left")
                alert("now wait for 30 seconds")
                setTimeout(()=>{
                    this.setState({
                        disab:false
                    })
                },31000)
                let inter = setInterval(() => {
                    this.setState({
                        disab:"disabled"
                    })
                    this.setState({
                        timerdisplay: "block"
                    })
                    this.setState({
                        timer: this.state.timer - 1
                    })
                    if (this.state.timer === 0) {
                        this.state.timer = 31
                        clearInterval(inter);
                        alert("now you are free to go")
                        this.setState({
                            timerdisplay: "none",
                            disab:false
                        })
                    }
                }, 1000)
            }
        }
        
        else {
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    
    render() {
        return (
            <div>
            <App disable={this.state.disab} counter={this.state.count} decr={this.decrem} incr={this.increm} decr={this.decrem} incrDisplay={this.state.disp} decrDisplay={this.state.disp}  whattime={this.state.timer} displaytime={this.state.timerdisplay } />
            </div>
        )
    }
}
export default counterMethod;