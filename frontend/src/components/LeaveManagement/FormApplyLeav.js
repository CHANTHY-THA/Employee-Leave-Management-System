import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import LeaveForm from "../MyLeave/LeaveForm";
import { MdEdit } from "react-icons/md";

function ApplyLeaveFormModal(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const label = props.buttonLabel;
    let button = "";
    let title = "";

    if (label === "Edit") {
        button = (
            <MdEdit 
            onClick={toggle}
            size={18}
            className="editIcon"
            ></MdEdit>
          );
          title = "Edit Leave";
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

export default ApplyLeaveFormModal;
