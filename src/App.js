import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Status from "./components/Status";

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