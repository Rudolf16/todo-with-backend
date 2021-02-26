import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Card, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap"

export const EditTodo = () => {
    const [openModal, setOpenModal] = useState(false);
    const [editItem, setEditItem] = useState('');
    const { id } = useParams();
    const [todo, setTodo] = useState({})

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/item${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(response)
            setTodo(response.data)
        } catch (error) {
            console.log(error)
        }

    }
    const handleUpdateTodo = async () => {
        setOpenModal(!openModal)
        try {
            if (editItem) {
                const response = await axios.patch(`http://localhost:5000/item${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: {
                        item: editItem
                    }
                })
                console.log(response)
                fetchData()
            }
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Card style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Row style={{ display: "flex", justifyContent: "space-between", padding: "5px", alignItems: "center" }}>
                <span>{todo.item}</span>
                <Button color="primary" className="waves-effect waves-light btn-small light-blue lighten-3" onClick={() => { setOpenModal(!openModal) }}>edit todo</Button>
            </Row>
            <Modal isOpen={openModal} toggle={() => setOpenModal(!openModal)}>
                <ModalHeader>Edit your todo</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="edidTodo">Edit your todo</Label>
                            <Input id="editTodo" defaultValue={todo.Item} onChange={(e) => setEditItem(e.target.value)} />
                            <Button style={{marginTop:"10px"}} onClick={() => { handleUpdateTodo() }}>Update</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </Card>
    )
}
