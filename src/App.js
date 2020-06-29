import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Status extends Component {
    constructor() {
        super();

        this.state = {
            likes: 0,
        };

        this.like = this.like.bind(this);
    }

    like() {
        this.setState({
            likes: this.state.likes + 1,
        });
    }

    render() {
        return ( <
            div className = "status" >
            <
            p > { this.props.mytext } < /p> <
            p >
            <
            button onClick = { this.like } > { this.state.likes }
            Likes < /button> <
            /p> <
            /div>
        );
    }
}

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        Status mytext = "Wow, i had the most delicious today." / >
        <
        Status mytext = "There was no traffic today!" / >
        <
        Status mytext = "Finally finished that big project" / >
        <
        Status mytext = "Happy to be learning ReactJS" / >
        <
        Status mytext = "Hello World" / >
        <
        /header> <
        /div>
    );
}

export default App;