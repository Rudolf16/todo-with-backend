import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from "reactstrap"

export const ListItem = ({ todo, onHandleDelete }) => {

    return (
        <Row style={{ marginTop: "10px", padding: "15px" }}>
            <Card style={{ width: "100%" }}>
                <Col style={{display:"flex", justifyContent: "space-between", padding:"5px",alignItems:"center" }}>
                    <Link to={`/edit${todo._id}`} >
                        <span>{todo.item}</span>
                    </Link>
                    <Button size="sm" onClick={() => onHandleDelete(todo._id)}>&#10008;</Button>
                </Col>
            </Card>
        </Row>

    )
}
