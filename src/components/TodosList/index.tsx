import * as React from "react";
import {Divider, List, Typography} from "antd";
import Todo from "../Todo";
import style from "./TodosList.module.css"

interface TodosListProps {
    todos: any[];
}

const TodosList: React.FC<TodosListProps> = ({todos}) => {
    return (
        <div className={style.divContainer}>
            <Typography.Title className={style.todosTitle}>Todos</Typography.Title>
            <List
                className={style.todoList}
                dataSource={todos}
                renderItem={item => <div className={style.todoContainer}>
                    <Todo content={item[0]} category={item[1]} priority={item[2]}/></div>}
            />
            <Divider className={style.divider}/>
            <List
                className={style.todoList}
                dataSource={todos.slice(0, 1)}
                renderItem={item => <div className={style.todoContainer}>
                      <Todo content={item[0]} category={item[1]} priority={item[2]}/></div>}
            />
        </div>
    )
}
export default TodosList