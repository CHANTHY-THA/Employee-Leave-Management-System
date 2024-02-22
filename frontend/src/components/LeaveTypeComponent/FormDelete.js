import React, { useState,useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import {  Form ,Row} from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function FormDeleteItem(props) {
    const [leavetype, setValues] = useState({
        id: "",
        name: "",
        amount: "",
    });
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const ConfirmDeleteItem = (e) => {
        e.preventDefault();
        axios.delete(process.env.REACT_APP_URL+'/leavetype/'+leavetype.id,{validateStatus: () => true}).then((res)=>{
            if(res.data.id > 0){
                props.deleteItemFromState(res.data);
                setModal(false);
            }
        })
    };
    const CloseModal = (e)=>{
        e.preventDefault();
        setModal(false);
    }
    useEffect(() => {
        if (props.item) {
        const { id, name,amount } = props.item;
        setValues({ id, name,amount });
        }
    }, [props.item]);
    return (
        <div className="mb-2">
             <MdDelete
              size={18}
              className="deleteIcon"
              onClick={toggle}
              style={{marginLeft:"5px"}}
        />
            <Modal centered backdrop="static"  show={modal}>
                <Modal.Header >
                    <Modal.Title >Delete Leave Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  className="">
                        <Form.Group as={Row} className="mb-4" style={{marginTop:"-20px"}}>
                            <Form.Label column sm="12">Are you sure, you want to delete leave type <q className="font-weight-bold">{leavetype.name}</q> ?</Form.Label>
                        </Form.Group>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <Button  style={{width:"80px", marginRight:"10px"}} onClick={ConfirmDeleteItem}>Yes</Button> 
                            <Button style={{width:"80px"}} className="btn btn-danger" onClick={CloseModal}>No</Button>                   
                        </div>
                    </Form> 
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default FormDeleteItem;
