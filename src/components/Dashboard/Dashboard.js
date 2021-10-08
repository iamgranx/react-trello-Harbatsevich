import React from "react";
import css from "./styles.module.css"
import { Card } from "../Card";
import { Input } from "../common/Input";
import { Button } from "../common/Button";


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            tasks: [
                { text: "text1", id: 1, status: "todo" },
                { text: "text2", id: 2, status: "todo" }
            ]
          };
          this.addTasksOnClick=this.addTasksOnClick.bind(this);
          this.toStartProcess=this.toStartProcess.bind(this);
        //   this.toEndProcess=this.toEndProcess.bind(this);

    };


    changeValue = (event) => {
        this.setState({ value: event.target.value });
        
      };

//добавляем новые задачи через кнопки
    addTasksOnClick () {
        this.setState((prevState) => ({
            tasks: [
              ...prevState.tasks,
              { text: prevState.value, status: "todo", id: prevState.tasks.length + 1 }
            ],
           value: ""
          }));
    };
    toStartProcess = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
              task.id !== id ? task : { ...task, status: "in_process" }
            )
          }));
    };

    // НИЖЕ не могу понять как мне проверить статус и изменить на нужный, что бы одной функцией менять на нужное

        // toStartProcess =(id) => {
        //     if(this.state.status === "todo") {
        //         this.setState((prevState) => ({
        //             tasks: prevState.tasks.map((task) => 
        //             task.id !==id ? task : { ...task, status: "in_process"}
        //             )
        //         }))
        //     } else if(this.state.status === "in_process") {
        //         this.setState((prevState) => ({
        //             tasks: prevState.tasks.map((task) => 
        //             task.id !==id ? task : { ...task, status: "done"}
        //             )
        //         }))
        //     };             
        // };

        toFinish = (id) => {
            this.setState((prevState) => ({
                tasks: prevState.tasks.map((task) =>
                  task.id !== id ? task : { ...task, status: "done" }
                )
              }));
        };

    filterTasks () {
    }
    
    render(){
        return (
            <div className={css.wrapper}>
        <div className={css.card_wrapper}>
        {["todo", "in_process", "done"].map((status) => (
          <Card
            title={status}
            children={
              <div>
                <ul>
                  {this.state.tasks
                    .filter((task) => task.status === status)
                    .map((item) => {
                      return (
                        <div key={item.id} className={css.tasks}>
                          <div onClick={() => this.toStartProcess(item.id)}>
                            {item.text}
                          </div>
                        </div>
                      );
                    })}
                </ul>
              </div>
            }
          />
        ))}            
        </div>
        <form className={css.dashboard_input}>
            <label>
                <input 
                    value={this.state.value}
                    onChange={this.changeValue}
                    className={css.input} />
                    <Button
                        type="button"
                        onClick={this.addTasksOnClick}
                        title="ADD"
                    />
                {/* <button type="button" onClick={this.addTasksOnClick}>ADD</button> */}
            </label>
        </form>

      </div>
        );
    }
} 