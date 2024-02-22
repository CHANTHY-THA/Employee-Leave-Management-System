import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

function AddEditForm(props) {
    const [predata, setValues] = useState({
        id: "",
        criterial: "",
        value: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const onChange = (e) => {
        setValues({
            ...predata,
            [e.target.name]: e.target.value
        });
        if (e.target.name !== "") {
            setErrorMessage("");
        }
    };
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } }

    const submitFormAdd = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_URL + '/predata', predata, headers, { validateStatus: () => true }).then((res) => {
            if (res.data.id > 0) {
                props.addItemToState(res.data);
                props.toggle();
            } else {
                setErrorMessage(res.data.message)
            }
        })
    };

    const submitFormEdit = (e) => {
        e.preventDefault();
        axios.put(process.env.REACT_APP_URL + '/predata', predata, headers, { validateStatus: () => true })
            .then((res) => {
                if (res.data.id > 0) {
                    props.updateState(res.data);
                    props.toggle();
                } else {
                    setErrorMessage(res.data.message)
                }
            })
    };
    const CloseModal = (e) => {
        e.preventDefault();
        props.toggle();
    }
    useEffect(() => {
        if (props.item) {
            const { id, criterial, value } = props.item;
            setValues({ id, criterial, value });
        }
    }, [props.item]);

    return (
        <Form className="">
            <Form.Group as={Row} className="mb-4" style={{ marginTop: "-20px" }}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Criterial</Form.Label>
                        <Form.Control onChange={onChange}
                            name="criterial"
                            type="text"
                            placeholder="criterial"
                            value={predata.criterial === null ? "" : predata.criterial}
                            required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Value</Form.Label>
                        <Form.Control onChange={onChange}
                            name="value"
                            type="text"
                            placeholder="value"
                            value={predata.value === null ? "" : predata.value}
                            required />
                    </Form.Group>
                </Row>
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button style={{ width: "100px", marginRight: "10px" }} onClick={props.item ? submitFormEdit : submitFormAdd}>Submit</Button>
                <Button style={{ width: "100px" }} className="btn btn-danger" onClick={CloseModal}>Cancel</Button>
            </div>

        </Form>

    );
}

export default AddEditForm;
