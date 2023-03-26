import React from "react";
import CloseIcon from "../../icons/CloseIcon";
import {Checkbox, Tag, Typography} from "antd";
import style from "./Todo.module.css"

interface TodoProps {
    content: string;
    category: string;
    priority: string;
    completed?: boolean;
}

const Todo: React.FC<TodoProps> = ({priority,category,content}) =>{
    return (
        <div className={style.todoContainer}>
            <div className={style.titleRow}>
                <CloseIcon className={style.removeBtn}/>
                <Typography.Text className={style.titleText}>{content}</Typography.Text>
                <div className={style.checkbox}>
                    <Checkbox/>
                </div>
            </div>
            <div className={style.categoryRow}>
                <Typography.Text className={style.categoryText}>{category}</Typography.Text>
            </div>
            <div className={style.priorityRow}>
                <Tag color={"blue"}>{priority}</Tag>
            </div>
        </div>
    )
}
export default Todo;