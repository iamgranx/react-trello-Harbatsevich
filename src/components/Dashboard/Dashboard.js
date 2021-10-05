import React from "react";
import css from "./styles.module.css"
import { Card } from "../Card";
// import { Input } from "../common/Input";
import { Button } from "../common/Button";


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            tasks: [
                { text: "text1", id: 1,  status: "toDo" },
                { text: "text2", id: 2,  status: "toDo" },
                { text: "text3", id: 3,  status: "toDo" },
                { text: "text4", id: 4,  status: "toDo" },
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
              { text: prevState.value, status:"toDo", id: prevState.tasks.length + 1 }
            ],
           value: ""
          }));
    };
    toStartProcess = () => {
        this.setState((prevState) => ({
            status: "toProcess"
        }));

    };

    filterTasks () {

    }
    
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
                                    <button type="button" onClick={this.toStartProcess}>start</button>
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
                        <button type="button" onClick={this.addTasksOnClick}>ADD</button>
                    </form>
                  }
                >
                </Card>
                <Card title="In process"
                children={<div>
                    <ul>
                        {this.state.tasks.filter(() => {
                            if(this.state.status === "toProcess") {
                                return true;
                            }
                        }).map((item) => {
                            return (
                                <div key={item.id} className={css.tasks}>
                                    <div>{item.text} </div>
                                </div>

                            )
                        })}
                    </ul>
                </div>} />
                <Card title="Done"
                children={<div>
                    <ul>
                        {this.state.tasks.map((item) => {
                            return (
                                <div key={item.id} className={css.tasks}>
                                    <Button className={css.tasks_button} title="Приступить к выполнению" />
                                    <div>{item.text} </div>
                                </div>

                            )
                        })}
                    </ul>
                </div>} />
            </div>
        );
    }
} 