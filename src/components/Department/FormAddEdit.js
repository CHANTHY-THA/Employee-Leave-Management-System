import React, { useState, useEffect } from "react";
import { Button, Form ,Row,Col} from "react-bootstrap";
import axios from "axios";

function AddEditForm(props) {
    const [department, setValues] = useState({
        id: "",
        departmentName: "",
        created: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const onChange = (e) => {
        setValues({
        ...department,
        [e.target.name]: e.target.value
        });
        if(e.target.name !== ""){
            setErrorMessage("");
        }
    };

    const submitFormAdd = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_URL+'/department',department,{validateStatus: () => true}).then((res)=>{
            if(res.data.id > 0){
                props.addItemToState(res.data);
                props.toggle();
            }else{
                setErrorMessage(res.data.message)
            }
        })
    };

    const submitFormEdit = (e) => {
        e.preventDefault();
        axios.put(process.env.REACT_APP_URL+'/department',department,{validateStatus: () => true})
             .then((res)=>{
                if(res.data.id > 0){
                    props.updateState(res.data);
                    props.toggle();
                }else{
                    setErrorMessage(res.data.message)
                }
        })
    };
    const CloseModal = (e)=>{
        e.preventDefault();
        props.toggle();
    }
    useEffect(() => {
        if (props.item) {
            const { id, departmentName,created } = props.item;
            setValues({ id, departmentName,created });
        }
    }, [props.item]);

    return (
        <Form  className="">
            <Form.Group as={Row} className="mb-4" style={{marginTop:"-20px"}}>
                <Form.Label column sm="6">Department Name</Form.Label>
                <Col sm="12">
                    <Form.Control onChange={onChange}
                    name="departmentName"
                    type="text"
                    placeholder="Enter Name"
                    value={department.departmentName === null ? "" : department.departmentName}
                    required />
                    <small className="text-danger">{errorMessage}</small>
                </Col>
            </Form.Group>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Button  style={{width:"100px", marginRight:"10px"}} onClick={props.item ? submitFormEdit : submitFormAdd}>Submit</Button> 
                <Button style={{width:"100px"}} className="btn btn-danger" onClick={CloseModal}>Cancel</Button>                   
            </div>
                   
        </Form>        
        
    );
}

export default AddEditForm;
