import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import moment from 'moment';
// moment().format();
// import jsonData from "../../data.json";
// import { format } from 'date-fns';

function LeaveForm(props) {

    const employeeid = Number(localStorage.getItem("userID"));
    const [myleave, setValues] = useState({
        employeeid: employeeid,
        leaveStatusid: 1,
        leaveTypeid: 1,
        totalLeave: "",
        fromDate: "",
        toDate: "",
        reason: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const onChange = (e) => {
        setValues({
            ...myleave,
            [e.target.name]: e.target.value
        });
    };

    const submitFormAdd = (e) => {
        e.preventDefault();
       
        myleave.leaveTypeid = Number(myleave.leaveTypeid)
        myleave.totalLeave = Number(myleave.totalLeave)
        myleave.fromDate = moment().toISOString(myleave.fromDate);
        myleave.toDate = moment().toISOString(myleave.toDate);

         console.log(myleave);

        axios.post(process.env.REACT_APP_URL + '/leave', myleave, { validateStatus: () => true }).then((res) => {
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
        axios.put(process.env.REACT_APP_URL + '/leave', myleave, { validateStatus: () => true })
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
            const { employeeid,leaveStatusid, leaveTypeid, totalLeave, fromDate, toDate, reason } = props.item;
            setValues({ employeeid,leaveStatusid, leaveTypeid, totalLeave, fromDate, toDate, reason });
        }
    }, [props.item]);

    return (
        <Form className="">
            <Form.Group as={Row} className="mb-4" style={{ marginTop: "-20px" }}>
                <Form className='container'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Leave Type</Form.Label>
                            <Form.Select
                                onChange={onChange}
                                name="leaveTypeid"
                                value={myleave.leaveTypeid}
                                aria-label="Default select example">
                                <option value="1">Annual Leave</option>
                                <option value="2">Special Leave</option>
                                <option value="3">Sick Leave</option>
                            </Form.Select>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Total Leaves</Form.Label>
                            <Form.Control onChange={onChange}
                                name="totalLeave"
                                value={myleave.totalLeave}
                                type="number"
                                placeholder="Total Leave"
                            />
                            <small className="text-danger">{errorMessage}</small>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridDateOfBirth">
                            <Form.Label>From Date</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name="fromDate"
                                type="date"
                                placeholder="from date"
                                value={myleave.fromDate}
                            />
                            <small className="text-danger">{errorMessage}</small>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDateOfBirth">
                            <Form.Label>To Date</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name="toDate"
                                type="date"
                                placeholder="to date"
                                value={myleave.toDate}
                            />
                            <small className="text-danger">{errorMessage}</small>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label>Reason</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name="reason"
                                value={myleave.reason === null ? "" : myleave.reason}
                                as="textarea"
                                placeholder="Reason"
                                required />
                            <small className="text-danger">{errorMessage}</small>
                        </Form.Group>
                    </Row>
                </Form>
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <Button style={{ width: "100px", marginRight: "10px" }} onClick={props.item ? submitFormEdit : submitFormAdd}>Apply</Button>
                <Button variant="danger" onClick={CloseModal}>Cancel</Button>
            </div>
        </Form>

    );
}

export default LeaveForm;
