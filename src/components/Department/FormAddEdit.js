import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import jsonData from "../../data.json";
import { format } from 'date-fns';

function AddEditForm(props) {
    let index = 0;
    const data = jsonData.Departments;
    let last_element = data[data.length - 1];

    const [form, setValues] = useState({
        id: last_element.id + index,
        departmentName: "",
        created: "",

    });

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submitFormAdd = (e) => {
        index += 1;
        form.id = last_element.id + index;
        form.created = format(new Date(), 'dd-MMM-yyyy h:mm a');
        e.preventDefault();
        props.addItemToState(form);
        props.toggle();
        data.push(form);

    };

    const submitFormEdit = (e) => {
        e.preventDefault();
        props.updateState(form);
        props.toggle();
    };
    const CloseModal = (e) => {
        e.preventDefault();
        props.toggle();
    }
    useEffect(() => {
        if (props.item) {
            const { id, departmentName, created } = props.item;
            setValues({ id, departmentName, created });
        }
    }, [props.item]);

    return (
        <Form className="">
            <Form.Group as={Row} className="mb-4" style={{ marginTop: "-20px" }}>
                <Form.Label column sm="6">
                    Department Name
                </Form.Label>
                <Col sm="12">
                    <Form.Control onChange={onChange}
                        name="departmentName"
                        type="text"
                        placeholder="Enter Name"
                        value={form.departmentName === null ? "" : form.departmentName}
                        required />
                </Col>
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button style={{ width: "100px", marginRight: "10px" }} onClick={props.item ? submitFormEdit : submitFormAdd}>Submit</Button>
                <Button className="btn btn-danger" onClick={CloseModal}>Cancel</Button>
            </div>

        </Form>

    );
}

export default AddEditForm;
