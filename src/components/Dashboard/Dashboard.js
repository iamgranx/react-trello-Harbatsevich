import React from "react";
import css from "./styles.module.css"
import { Card } from "../Card";
// import { Input } from "../common/Input";
// import { Button } from "../common/Button";


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            tasks: [
                { text: "text1", id: 1, isDone: false, inProcess: false },
                { text: "text2", id: 2, isDone: false, inProcess: false }
            ]
          };
          this.addTasksOnClick=this.addTasksOnClick.bind(this);
          this.toStartProcess=this.toStartProcess.bind(this);
          this.toEndProcess=this.toEndProcess.bind(this);

    };


    changeValue = (event) => {
        this.setState({ value: event.target.value });
        
      };

//добавляем новые задачи через кнопки
    addTasksOnClick () {
        this.setState((prevState) => ({
            tasks: [
              ...prevState.tasks,
              { text: prevState.value, isDone: false, inProcess: false, id: prevState.tasks.length + 1 }
            ],
           value: ""
          }));
    };
    toStartProcess = () => {
        this.setState((prevState) => ({
            inProcess: !prevState.inProcess
        }));

    };
    toEndProcess =() => {
        this.setState((prevState) => ({
            isDone: !prevState.isDone 
        }));
        this.setState((prevState) => ({
            inProcess: !prevState.inProcess
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
                        {/* {this.state.tasks.filter((item) => {
                            if(this.state.inProcess === false && this.state.isDone === false) {
                                return item.isDone;
                            } else {
                                return false;
                            }
                        }).map((item) => {
                            return (
                                <div key={item.id} className={css.tasks}>
                                    <div>
                                        <button type="button" onClick={this.toStartProcess}>start</button>{item.text}
                                     </div>
                                </div>
                            )
                        })
                    } */}
                    {this.state.tasks.map((item) => {
                            return (
                                <li key={item.id} className={css.tasks}>
                                    <div><button type="button" onClick={this.toStartProcess}>start</button>{item.text}</div>
                                </li>

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
                                <button type="button" onClick={this.addTasksOnClick}>ADD</button>
                        </label>
                    </form>
                  }
                >
                </Card>
                <Card title="In process"
                children={<div>
                    <ul>
                        {this.state.tasks.filter(() => {
                            if(this.state.inProcess === true) 
                                return true; 
                        }).map((item) => {
                            return (
                                <li key={item.id} className={css.tasks}>
                                    <div><button type="button" onClick={this.toEndProcess}>end</button>{item.text}</div>
                                </li>

                            )
                        })}
                    </ul>
                </div>} />
                <Card title="Done"
                children={<div>
                    <ul>
                    {this.state.tasks.filter(() => {
                            if(this.state.isDone === true) 
                                return true; 
                        }).map((item) => {
                            return (
                                <div key={item.id} className={css.tasks}>
                                <div>{item.text}</div>
                            </div>

                            )
                        })}
                    </ul>
                </div>} />
            </div>
        );
    }
} 