import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import { Form, Row } from "react-bootstrap";
// import { MdDelete } from "react-icons/md";
import axios from "axios";

function FormReject(props) {
    const [leave, setValues] = useState({
        id: "",
        leaveStatus: "",
        remark: "",
    });
    const [modal, setModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const toggle = () => {
        setModal(!modal);
    };
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    const ConfirmRejectLeave = (e) => {
        e.preventDefault();
        leave.leaveStatus = "Not Approve"
        if (leave.remark !== "") {
            axios.put(process.env.REACT_APP_URL + '/leave/reject', leave, headers, { validateStatus: () => true }).then((res) => {
                if (res.data.id > 0) {
                    props.rejectLeaveFormState(res.data);
                    setModal(false);
                }
            })
        } else {
            setErrorMessage("Remark can't emptyy")
        }

    };

    const onChange = (e) => {
        setValues({
            ...leave,
            [e.target.name]: e.target.value
        });
        if (e.target.name !== "") {
            setErrorMessage("");
        }
    };

    const CloseModal = (e) => {
        e.preventDefault();
        setModal(false);
    }
    useEffect(() => {
        if (props.item) {
            const { id, leaveStatus, remark } = props.item;
            setValues({ id, leaveStatus, remark });
        }
    }, [props.item]);
    return (
        <div className="mb-2">
            <Button
                size={18}
                className="btn btn-danger"
                onClick={toggle}
                style={{ width: "100px", marginRight: "10px" }}
            >Reject</Button>

            <Modal centered backdrop="static" show={modal}>
                <Modal.Header >
                    <Modal.Title >Reject Leave</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="">
                        <Form.Group as={Row} className="mb-4" style={{ marginTop: "-20px" }}>
                            <Form.Label column sm="12">Remark</Form.Label>
                            <Form.Control onChange={onChange}
                                name="remark"
                                type="text"
                                placeholder="Remark"
                                value={leave.remark === null ? "" : leave.remark}
                                required />
                            <small className="text-danger">{errorMessage}</small>
                        </Form.Group>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button disabled={!leave.remark} style={{ width: "80px", marginRight: "35px" }} onClick={ConfirmRejectLeave}>Yes</Button>
                            <Button style={{ width: "80px" }} className="btn btn-danger" onClick={CloseModal}>No</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default FormReject;
