import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

function AddEditForm(props) {
    const [employee, setValues] = useState({

        firstname: "",
        lastname: "",
        username: "",
        gender: "",
        email: "",
        password: "",
        phonenumber: "",
        position: "",
        departmentId: "",
        country: "",
        city: "",
        address: "",

    });
    const [errorMessage, setErrorMessage] = useState("");

    const onChange = (e) => {
        setValues({
            ...employee,
            [e.target.name]: e.target.value
        });
        if (e.target.name !== "") {
            setErrorMessage("");
        }
        console.log("🚀 ~ onChange ~ employee:", employee)

    };

    const submitFormAdd = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_URL + '/user', employee, { validateStatus: () => true }).then((res) => {
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
        axios.put(process.env.REACT_APP_URL + '/user', employee, { validateStatus: () => true })
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
            console.log("🚀 ~ useEffect ~ props.item:", props.item)
            const employee = props.item;
            setValues(employee);
            console.log("🚀 ~ useEffect ~ employee:", employee)

        }
    }, [props.item]);

    return (
        <Form className="">

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={onChange}
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        value={employee.firstname === null ? "" : employee.firstname}
                        required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={onChange}
                        name="lastname"
                        type="text"
                        placeholder="Last name"
                        value={employee.lastname === null ? "" : employee.lastname}
                        required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={onChange}
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={employee.username === null ? "" : employee.username}
                        required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control onChange={onChange}
                        name="gender"
                        type="text"
                        placeholder="Gender"
                        value={employee.gender === null ? "" : employee.gender}
                        required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={onChange}
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={employee.email === null ? "" : employee.email}
                        required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={onChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={employee.password === null ? "" : employee.password}
                        required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={onChange}
                        name="phonenumber"
                        type="text"
                        placeholder="Phone Number"
                        value={employee.phonenumber === null ? "" : employee.phonenumber}
                        required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Position</Form.Label>
                    <Form.Control onChange={onChange}
                        name="position"
                        type="text"
                        value={employee.position === null ? "" : employee.position}
                        placeholder="Position" required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Department</Form.Label>
                    <Form.Control onChange={onChange}
                        name="departmentId"
                        type="text"
                        placeholder="Department"
                        value={employee.departmentId === null ? "" : employee.departmentId}
                        required />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Country</Form.Label>
                    <Form.Control onChange={onChange}
                        name="country"
                        type="text"
                        placeholder="Country"
                        value={employee.country === null ? "" : employee.country}
                        required />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={onChange}
                        name="city"
                        type="text"
                        placeholder="City"
                        value={employee.city === null ? "" : employee.city}
                        required />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={onChange}
                        name="address"
                        type="text"
                        placeholder="Address"
                        value={employee.address === null ? "" : employee.address}
                        required />
                </Form.Group>
            </Row>
            <Row className="mb-3">

            </Row>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <Button style={{ width: "100px", marginRight: "10px" }} onClick={props.item ? submitFormEdit : submitFormAdd}>Submit</Button>
                <Button style={{ width: "100px" }} className="btn btn-danger" onClick={CloseModal}>Cancel</Button>
            </div>

        </Form>

    );
}

export default AddEditForm;
