import css from "./styles.modules.css"
import React from "react";

export function Button ({onClick, title}) {
    return (
        <button className={css.buttonClick}>
                {title}
                {onClick}
        </button>
    );
}