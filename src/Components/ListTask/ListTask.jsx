import React, { useState } from 'react'
import Task from '../Task/Task'
import "./ListTask.css"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"

function ListTask() {

    const todos = useSelector(state => state.todosReducer.todos)
    const [filterTask, setFilterTask] = useState(0)
    const handleFilterTask = (input) => {
        setFilterTask(input);
    }

    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={() => handleFilterTask(1)}>Show Done</Button>
                <Button variant="outline-danger" onClick={() => handleFilterTask(2)}> Show Not Done</Button>
                <Button variant="info" onClick={() => handleFilterTask(0)}>Remove All Filters</Button>
            </div>
            <div className="cards">
            {filterTask === 0 ? todos.map((task, index) => (<Task toDo_task={task} key={index} index={index} />)) :
            filterTask === 1 ? todos.filter(e => e.isDone === true ).map((task, index) => (<Task toDo_task={task} key={index} index={index} />)) :
            filterTask === 2 ? todos.filter(e => e.isDone === false ).map((task, index) => (<Task toDo_task={task} key={index} index={index} />)) :
            null
        }
        </div>
        </div >
    )
}

export default ListTask
