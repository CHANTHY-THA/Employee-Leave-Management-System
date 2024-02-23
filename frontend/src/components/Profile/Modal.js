import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import "../../pages/Dapartment/department.css"
import ProfileForm from "./ProfileForm";

function ModalForm(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    let title = "Upload Profile";
    // let button = "";
    let button = (
        <Button
            variant="primary"
            onClick={toggle}
            style={{ float: "right" }}
        >
            {title}
        </Button>
    );


    return (
        <div className="">
            {button}
            <Modal centered backdrop="static" show={modal} >
                <Modal.Header >
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProfileForm
                        toggle={toggle}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalForm;
