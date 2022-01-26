import css from "./styles.modules.css"
import React from "react";

export function Button ({onClick, title, type}) {
    return (
        <button type={type} onClick={onClick} className={css.buttonClick}>
                {title}
                
        </button>
    );
}