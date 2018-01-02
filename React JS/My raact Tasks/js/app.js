let h1 = React.createElement("h1",null,"Hazrat Abu Ubaida Bin Jarrah (R.A)");

let container = document.getElementById("container");


class Name extends React.Component{
    render(){
        return React.createElement("div",null,h1);
    }
}



ReactDOM.render(
   React.createElement(Name,null),
   container
)