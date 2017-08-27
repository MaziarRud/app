import React from 'react';
import ReactDom from 'react-dom';


export default class helloWorld extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            greetings: ['Hello', 'Goodbye'],
            greeting: this.greetings[0]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let reverseGreeting = this.state.greetings.reverse()[0];
        return this.setState({greeting: reverseGreeting})
    }
    
    render(){
        return (
            <h1 className="header" onClick={this.handleClick}>
                {this.state.greeting} + ' World'
            </h1>
        );
    };
}


ReactDom.render(
    <helloWorld />,
    document.querySelector('#app')
)