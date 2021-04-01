import React from 'react'
import { Button,Card } from "react-bootstrap"
import EditTask from "../EditTask/EditTask"
import "./Task.css"
import { useDispatch } from "react-redux"
import { toggleTask } from "../../Actions"

function Task({ toDo_task, index }) {

    const dispatch = useDispatch()

    const handleClick = () => {
        // dispatching the toggle task action
        dispatch(toggleTask({ id: toDo_task.id }))
    }
    return (
            <Card className="TaskCard" bg={toDo_task.isDone ? "success" : "Light"} >
                <Card.Header><span style={toDo_task.isDone ? {color:'#ffffff'}:{color:'#15b49f'}}>Task {Number(index) + 1}</span></Card.Header>
            <Card.Body>
            <h4 style={{ textDecoration: toDo_task.isDone ? "line-through" : "none" , color : toDo_task.isDone ? "#ffffff" : "#000000" }}> {toDo_task.task}</h4>
            </Card.Body>
            <Card.Footer className="TaskFooter">
                <Button variant={toDo_task.isDone ? "outline-light" : "success"} onClick={handleClick}>{toDo_task.isDone ? "Undo" : "Done"}</Button>
                <EditTask taskID={toDo_task.id} />
            </Card.Footer>
            
            </Card>
    )
}

export default Task
