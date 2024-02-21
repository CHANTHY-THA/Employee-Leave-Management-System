import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function EmployeeForm(props) {
    const [employee, setValues] = useState({
        id: '',
        userName: '',
        lastName: '',
        gender: '',
        dateOfBir: '',
        email: '',
        phone: '',
        password: '',
        department: '',
        address: ''
    });
    const [errorMessage, setErrorMessage] = useState("");


    const submitFormAdd = (e) => {
        e.preventDefault();

        console.log(employee);
        axios.post(process.env.REACT_APP_URL+'/employee',employee,{validateStatus: () => true}).then((res)=>{
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

        axios.put(process.env.REACT_APP_URL+'/employee',employee,{validateStatus: () => true})
             .then((res)=>{
                if(res.data.id > 0){
                    props.updateState(res.data);
                    props.toggle();
                }else{
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
            const { id, userName, gender, dateOfBir, email, phone, password, department, address } = props.item;
            setValues({ id, userName, gender, dateOfBir, email, phone, password, department, address });
        }
    }, [props.item]);

    //get from input
    const onChange = e => {
        setValues({
            ...employee,
            [e.target.name]: e.target.value
        });
        if (e.target.name !== "") {
            setErrorMessage("");
        }
    };

    // submit info 
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     // Perform password change logic here
    //     console.log(formData);
    //     // Reset data after submit
    //     setFormData({
    //         currentPassword: '',
    //         newPassword: '',
    //         confirmPassword: ''
    //     });
    // };

    return (
        <div className="leave-detail-page">
            <div className="page">
                <h4 className="pt-3 pb-2 ">Create Employee</h4>
                <Form className='container'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='userName'
                                value={employee.userName}
                                type="text"
                                placeholder="First Name"
                                required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='lastName'
                                value={employee.lastName}
                                type="text"
                                placeholder="Last name"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='gender'
                                value={employee.gender}
                                type="text"
                                placeholder="Gender"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDateOfBirth">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='dateOfBir'
                                value={employee.dateOfBir}
                                type="date"
                                placeholder="Date Of Birth"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='email'
                                value={employee.email}
                                type="email"
                                placeholder="Email"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='phone'
                                value={employee.phone}
                                type="text"
                                placeholder="Phone Number"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='password'
                                value={employee.password}
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDepartment">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='department'
                                value={employee.department}
                                type="text"
                                placeholder="Department"
                            />
                        </Form.Group>
                    </Row>
                    {/* <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Country" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                    </Row> */}
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                onChange={onChange}
                                name='address'
                                value={employee.address}
                                as="textarea"
                                placeholder="Address"
                            />
                        </Form.Group>
                    </Row>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button style={{ width: "100px", marginRight: "10px" }} onClick={props.item ? submitFormEdit : submitFormAdd}>Submit</Button>
                        <Button style={{ width: "100px" }} className="btn btn-danger" onClick={CloseModal}>Cancel</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default EmployeeForm;