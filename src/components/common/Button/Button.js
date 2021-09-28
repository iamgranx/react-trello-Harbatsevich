import css from "./styles.modules.css"
import React from "react";

export function Button ({onClick, title}) {
    return (
        <button onClick className={css.buttonClick}>
            {title}
        </button>
    );
}