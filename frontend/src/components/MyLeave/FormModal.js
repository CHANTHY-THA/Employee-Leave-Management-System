import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import LeaveForm from "./LeaveForm";

function LeaveFormModal(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const label = props.buttonLabel;
    let button = "";
    let title = "";

    if (label === "Edit") {
        button = (
            <Button
                className="btn btn-sm"
                variant="success"
                onClick={toggle}
                style={{ float: "left", marginRight: "10px" }}
            >
                {label}
            </Button>
        );
        title = "Update Leave";
    } else {
        button = (
            <Button
                variant="primary"
                onClick={toggle}
                style={{ float: "left", marginRight: "10px" }}
            >
                {label}
            </Button>
        );
        title = "Add New Leave";
    }
    return (
        <div className="mb-2">
            {button}
            <Modal centered backdrop="static" show={modal} toggle={toggle}>
                <Modal.Header >
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LeaveForm
                         addItemToState={props.addItemToState}
                         updateState={props.updateState}
                         toggle={toggle}
                         item={props.item}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LeaveFormModal;
