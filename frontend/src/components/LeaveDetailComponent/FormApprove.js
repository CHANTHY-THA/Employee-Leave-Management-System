import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import { Form, Row } from "react-bootstrap";
// import { MdDelete } from "react-icons/md";
import axios from "axios";

function FormApprove(props) {
    const userID = Number(localStorage.getItem("userID"));
    const [leave, setValues] = useState({
        id: "",
        leaveStatus: "",
        approveBy: "",
        approveDate: ""
    });
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    const ConfirmApproveLeave = (e) => {
        e.preventDefault();
        leave.leaveStatus = "Approved"
        leave.approveBy = ""
        leave.approveDate = new Date();
        // console.log(leave);
        axios.put(process.env.REACT_APP_URL + '/leave/approve', leave, headers, { validateStatus: () => true }).then((res) => {
            if (res.data.id > 0) {
                props.confirmApproveLeave(res.data);
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
            const { id, leaveStatus, approveBy, approveDate } = props.item;
            setValues({ id, leaveStatus, approveBy, approveDate });
        }
    }, [props.item]);
    return (
        <div className="mb-2">
            <Button
                size={18}
                onClick={toggle}
                style={{ width: "100px", marginRight: "30px" }}
            >Approve</Button>

            <Modal centered backdrop="static" show={modal}>
                <Modal.Header >
                    <Modal.Title >Approve Leave</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="">
                        <Form.Group as={Row} className="mb-4" style={{ marginTop: "-20px" }}>
                            <Form.Label column sm="12">Are you sure to approve this leave?</Form.Label>
                        </Form.Group>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button style={{ width: "80px", marginRight: "35px" }} onClick={ConfirmApproveLeave}>Yes</Button>
                            <Button style={{ width: "80px" }} className="btn btn-danger" onClick={CloseModal}>No</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default FormApprove;
