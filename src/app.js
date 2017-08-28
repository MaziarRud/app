import React from 'react';
import ReactDom from 'react-dom';
require('./app.css');

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // greetings: ["Hello", "Goodbye"],
            greeting: props.greetings[0]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let reverseGreeting = this.props.greetings.reverse()[0];
        this.setState({
            greeting: reverseGreeting
        })
    }
    
    render(){
        return (
            <h1 className="header" onClick={this.handleClick} >
                {this.props.greetings[0]}
            </h1>
        );
    };
}

// function Test(props){
//     return (
//         <h1 className="header">{props.name}</h1>
//     )
// }

let mods = (
    <div>
        <Test greetings={["Hello", "Goodbye"]} />
        <Test greetings={["Me", "You"]} />
    </div>
)

ReactDom.render(
    mods,
    // <Test name="Maziar" />,
    document.getElementById("app")
)