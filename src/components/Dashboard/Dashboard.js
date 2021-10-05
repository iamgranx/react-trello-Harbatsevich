import React from "react";
import css from "./styles.module.css"
import { Card } from "../Card";
import { useState } from "react";
// import { Input } from "../common/Input";
// import { Button } from "../common/Button";


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            tasks: [
                { text: "text1", id: 1, isDone: true },
                { text: "text2", id: 2, isDone: false },
                { text: "text3", id: 3, isDone: true },
                { text: "text4", id: 4, isDone: false },
            ]
          };
          this.addTasksOnClick=this.addTasksOnClick.bind(this);

    };


    changeValue = (event) => {
        this.setState({ value: event.target.value });
        
      };

//добавляем новые задачи через кнопку
    addTasksOnClick () {
        this.setState((prevState) => ({
            tasks: [
              ...prevState.tasks,
              { text: prevState.value, isDone: false, id: prevState.tasks.length + 1 }
            ],
           
          }));
    };
    
    render(){
        return (
            <div className={css.wrapper}>
                <Card
                title="ToDo"
                children={<div>
                    <ul>
                        {this.state.tasks.map((item) => {
                            return (
                                <div key={item.id} className={css.tasks}>
                                    {/* <Button className={css.tasks_button} title="Приступить к выполнению" /> */}
                                    <div>{item.text} </div>
                                </div>

                            )
                        })}
                    </ul>
                </div>}
                footer={
                    <form className={css.dashboard_input}>
                        <label>
                            <input 
                                value={this.state.value}
                                onChange={this.changeValue}
                                className={css.input} /> 
                        </label>
                        <button onClick={this.addTasksOnClick}>ADD</button>
                            {/* <Button
                                title="Добавить"
                                onClick={this.addTasksOnClick} /> */}
                            {/* <Button title="Отмена"
                                    onClick={this.addTasksOnClick} /> */}
                    </form>
                  }
                >
                </Card>
                <Card title="In process" />
                <Card title="Done" />
            </div>
        );
    }
} 