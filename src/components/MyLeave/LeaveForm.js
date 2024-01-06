import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import jsonData from "../../data.json";
import { format } from 'date-fns';

function LeaveForm(props) {
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
                <Form className='container'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Leave Type</Form.Label>
                            <Form.Select aria-label="Default select example">

                                <option value="1">Annual Leave</option>
                                <option value="2">Special Leave</option>
                                <option value="3">Sick Leave</option>
                            </Form.Select>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Total Leaves</Form.Label>
                            <Form.Control type="number" placeholder="Total Leave" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridDateOfBirth">
                            <Form.Label>From Date</Form.Label>
                            <Form.Control type="date" placeholder="Date Of Birth" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDateOfBirth">
                            <Form.Label>To Date</Form.Label>
                            <Form.Control type="date" placeholder="Date Of Birth" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label>Reason</Form.Label>
                            <Form.Control as="textarea" placeholder="Reason" />
                        </Form.Group>
                    </Row>
                </Form>
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <Button style={{ width: "100px", marginRight: "10px" }} href="/my-leave">Apply</Button>
                <Button variant="danger" onClick={CloseModal}>Cancel</Button>
            </div>
        </Form>

    );
}

export default LeaveForm;
