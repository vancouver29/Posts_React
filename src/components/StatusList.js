import React, { Component } from "react";
import Status from "./Status";

export default class StatusList extends Component {
    constructor() {
        super();

        this.state = {
            statuses: [
                "Wow, i had the most delicious today.",
                "There was no traffic today!",
                "Finally finished that big project",
                "Happy to be learning ReactJS",
                "Hello World",
            ],
        };
    }

    render() {
        return this.state.statuses.map((statusText) => {
            return <Status mytext = { statusText }
            />;
        });
    }
}