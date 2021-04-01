import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { editTask } from "../../Actions"
import { useDispatch } from "react-redux"

function EditTask({ taskID }) {
    const [show, setShow] = useState(false);
    const [editThisTask, setEditTask] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const handleChange = (input) => {
        setEditTask(input);
    }
    const handleSubmit = () => {
        dispatch(editTask({ editedTask: editThisTask , editID : taskID }))
        setEditTask('');
        handleClose();
    }
    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" placeholder="Edit your task here..." onChange={(e) => handleChange(e.target.value)} value={editThisTask} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask