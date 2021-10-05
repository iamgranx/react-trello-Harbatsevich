import React from "react";
import css from "./styles.module.css"
import { Card } from "../Card";
import { Input } from "../common/Input";
import { Button } from "../common/Button";


export class Dashboard extends React.Component {
state = {
        value: "",
        // isEdit: true,
        tasks: [
            { text: "text1", id: 1, isDone: true },
            { text: "text2", id: 2, isDone: false },
            { text: "text3", id: 3, isDone: true },
            { text: "text4", id: 4, isDone: false }
        ],
        // filters: "all",
        // showFilters: true,
      };

    

// Поёдем другим путем через кнопки,пусть пока будет так
//  фильтруем списки и выводим
    //   tasksFilter = () => 
    //     {return (
    //         this.state.tasks.filter((item) => {
    //         if(this.state.tasks.filter === true) {
    //             return item.isDone;
    //         } else {
    //             return !item.isDone
    //         }
            

    //     })
    //     .map((item) => {
    //         return (
    //             <li key={item.id}>
    //                 <input
    //                   type="checkbox"
    //                   checked={item.isDone}
    //                   onChange={() => this.changeCheckBox(item.id)}
    //                 />{" "}
    //                 {item.text}
    //               </li>
    //         )
    //     }))
    // };
//добавляем новые задачи через кнопку
    addTasksOnClick = () => {
        alert('123')
        // this.setState.value((prevState) => ({
        //     tasks: [
        //       ...prevState.tasks,
        //       { text: prevState.value, isDone: false, id: prevState.tasks.length + 1 }
        //     ],
        //     value: ""
        //   }));
          
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
                                <div className={css.tasks}>
                                    <Button className={css.tasks_button} title="Приступить к выполнению" />
                                    <div key={item.id}>{item.text}</div>
                                </div>

                            )
                        })}
                    </ul>
                </div>}
                footer={
                    <form className={css.dashboard_input}>
                        <label>
                            <Input /> 
                        </label>
                            <Button
                                title="Добавить"
                                onClick={this.addTasksOnClick} />
                            {/* <Button title="Отмена"
                                    onClick={this.addTasksOnClick} /> */}
                    </form>
                  }
                >
                </Card>
                <Card title="In process"

                children={this.tasksFilter} />
                <Card title="Done"

                children={this.tasksFilter} />
            </div>
        );
    }
} 