import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import { Form, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function FormDeleteItem(props) {
    const [user, setValues] = useState({
        id: "",
        firstname: "",
        lastname: "",
        username: "",
        gender: "",
        email: "",
        password: "",
        phonenumber: "",
        position: "",
        departmentId: "",
        country: "",
        city: "",
        address: "",
    });
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const ConfirmDeleteItem = (e) => {
        e.preventDefault();
        axios.delete(process.env.REACT_APP_URL + '/user/' + user.id, { validateStatus: () => true }).then((res) => {
            if (res.data.id > 0) {
                props.deleteItemFromState(res.data);
                setModal(false);
            }
        })
    };
    const CloseModal = (e) => {
        e.preventDefault();
        setModal(false);
    }
    useEffect(() => {
        if (props.item) {
            const user = props.item;
            setValues(user);
        }
    }, [props.item]);
    return (
        <div className="mb-2">
            <MdDelete
                size={18}
                className="deleteIcon"
                onClick={toggle}
                style={{ marginLeft: "5px" }}
            />
            <Modal centered backdrop="static" show={modal}>
                <Modal.Header >
                    <Modal.Title >Delete Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="">
                        <Form.Group as={Row} className="mb-4" style={{ marginTop: "-20px" }}>
                            <Form.Label column sm="12">Are you sure, you want to delete employee <q className="font-weight-bold">{user.firstname} {user.lastname}</q> ?</Form.Label>
                        </Form.Group>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button style={{ width: "80px", marginRight: "10px" }} onClick={ConfirmDeleteItem}>Yes</Button>
                            <Button style={{ width: "80px" }} className="btn btn-danger" onClick={CloseModal}>No</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default FormDeleteItem;
