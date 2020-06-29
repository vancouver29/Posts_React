import React, { Component } from "react";
import StatusList from "./StatusList";

export default class StatusAll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newStatusText: "new Text",
            statuses: [
                "Wow, i had the most delicious today.",
                "There was no traffic today!",
                "Finally finished that big project",
                "Happy to be learning ReactJS",
                "Hello World",
            ],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({ newStatusText: ev.target.value });
    }

    render() {
        return ( <
            div >
            <
            div className = "status" >
            <
            h1 > Enter New Status < /h1> <
            form >
            <
            input type = "text"
            value = { this.state.newStatusText }
            onChange = { this.handleChange }
            placeholder = "What's on your mind?" /
            >
            <
            button type = "submit" > Add Status < /button> <
            /form> <
            /div>

            <
            div className = "status" >
            <
            h1 > All Statuses < /h1> <
            StatusList statuses = { this.state.statuses }
            /> <
            /div> <
            /div>
        );
    }
}