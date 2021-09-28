import React from "react";
import css from "./styles.module.css";



export class Header extends React.Component {
    state = {
        test: false
    };

    render() {
        return (
            <div className={css.header_wrapper}>
                <div className ={css.header_logo}> Trello </div>
                <div className={css.header_menu}> Menu </div>       
            </div>
            
        );
    }
}