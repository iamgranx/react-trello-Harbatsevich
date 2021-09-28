import React from "react";
import css from "./styles.module.css"
import { Card } from "../Card";
import { Input } from "../common/Input";
import { Button } from "../common/Button";


export class Dashboard extends React.Component {
    state = {
        value: "",
        isEdit: true,
        tasks: [
            { text: "text1", id: 1 },
            { text: "text2", id: 2 }
        ],
      };
    
    render () {
        return (
            <div className={css.wrapper}>
                <Card
                title="todo"
                children={
                    <div>
                        <ul>
                            {this.state.tasks.map((item) => {
                                return (
                                    <li key={item.id}>{item.text}</li>
                                )
                            })}
                        </ul>
                    </div>
                }
                footer={
                    <form>
                        <Input/>
                            <Button
                            onClick={ () => {
                                this.setState((prevState) => ({
                                    tasks: [
                                      ...prevState.tasks,
                                      { text: prevState.value, id: prevState.todos.length + 1 }
                                    ],
                                    value: ""
                                  }));
                            }}
                            title="Добавить" />
                            <Button title="Отмена" />
                    </form>
                  }
                >
                </Card>
                <Card title="in process" />
                <Card title="done" />
            
            </div>
        );
    }
} 