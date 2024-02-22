import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import AddEditForm from "./FormAddEdit";
import { MdEdit } from "react-icons/md";
import "../../pages/Employees/employee.css"

function ModalForm(props) {
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
        title = "Edit Employee";
    } else {
        button = (
            <Button
                variant="primary"
                onClick={toggle}
                style={{ float: "right" }}
            >
                {label}
            </Button>
        );
        title = "Add New Employee";
    }
    return (
        <div className="mb-2" >
            {button}
            <Modal centered backdrop="static" show={modal} className="employ">
                <Modal.Header >
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEditForm
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

export default ModalForm;
