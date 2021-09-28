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
            <div>
                <label>
                    <input 
                    value={this.state.value}
                    onChange={this.changeValue}
                    className={css.input}
                    />
                </label>
            </div>
        );
    }
}