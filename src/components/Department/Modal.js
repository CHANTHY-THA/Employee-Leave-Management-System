import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import AddEditForm from "./FormAddEdit";
import { MdEdit } from "react-icons/md";
import "../../pages/Dapartment/department.css"

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
        title = "Edit Item";
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
        title = "Add New Item";
    }
    return (
        <div className="mb-2">
        {button}
        <Modal centered backdrop="static"  show={modal} >
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
