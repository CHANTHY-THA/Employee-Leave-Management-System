import React, { useState } from "react";
import { Button, Modal, Row, Form } from 'react-bootstrap';
import { FaArrowRightToBracket } from "react-icons/fa6";

function ConfirmModal(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const CloseModal = (e) => {
        e.preventDefault();
        setModal(!modal);
    }

    const logOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        setModal(!modal);
        window.location.replace("/login");
    }
    const label = props.buttonLabel;
    let link = (
        <div onClick={toggle}>
            <FaArrowRightToBracket />
            <span>{label}</span>
        </div>
    )
    let title = "Are you going to Logout?";
    return (
        <div className="mb-2">
            {link}
            <Modal centered backdrop="static" show={modal} toggle={toggle} >
                <Modal.Header style={{ display: "flex", justifyContent: "center" }} >
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="">
                        <Form.Group as={Row} className="" style={{ marginTop: "-20px",height:"30px"}}>
                            <Form className='container ' style={{padding:"0px" }}>
                                <div style={{ display: "flex", justifyContent: "center",alignItems:"center"}}>
                                    <Button style={{ width: "100px", marginRight: "10px" }} onClick={logOut} >Yes</Button>
                                    <Button style={{ width: "100px", marginLeft: "10px" }} variant="danger" onClick={CloseModal}>No</Button>
                                </div>
                            </Form>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ConfirmModal;
