import React from "react";
import css from "./styles.module.css"

export class Input extends React.Component {
    state = {
        value: ""
    };

    changeValue = (event) => {
        this.setState({ value: event.target.value });
    };


    render() {
        return (
                    <input 
                    value={this.state.value}
                    onChange={this.changeValue}
                    className={css.input}
                    />
        );
    }
}