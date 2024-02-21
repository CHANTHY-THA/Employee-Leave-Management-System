// import React, { useState, useEffect } from 'react';
// import "./style.css";
// import Header from "../../../components/HeaderComponent";
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';

// const EmployeeForm = () => {
//     const [formData, setFormData] = useState({
//         currentPassword: '',
//         newPassword: '',
//         confirmPassword: ''
//     });

//     useEffect(() => {
//         fetch('../../data.json')
//             .then(response => response.json())
//             .then(data => {
//                 if (data && data.Users) {
//                     setFormData(prevData => ({
//                         ...prevData,
//                         currentPassword: data.Users[0]?.password || '', // Set the initial current password value
//                     }));
//                 }
//             })
//             .catch(error => {
//                 console.log('Error fetching sample data:', error);
//             });
//     }, []);
//     //get from input
//     const handleChange = e => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     // submit info
//     const handleSubmit = e => {
//         e.preventDefault();
//         // Perform password change logic here
//         console.log(formData);
//         // Reset data after submit
//         setFormData({
//             currentPassword: '',
//             newPassword: '',
//             confirmPassword: ''
//         });
//     };

//     //     <div className="leave-detail-page">
//     //     <Header parentToChild={"Employee Leave Management System"} />
//     //     <div className="page">
//     //         <h4 className="pt-3 pb-2 ">Create Employee</h4>
//     //         <Form className='container'>
//     //             <Row className="mb-3">
//     //                 <Form.Group as={Col} controlId="formGridFirstName">
//     //                     <Form.Label>First Name</Form.Label>
//     //                     <Form.Control type="text" placeholder="First Name" />
//     //                 </Form.Group>

//     //                 <Form.Group as={Col} controlId="formGridLastName">
//     //                     <Form.Label>Last Name</Form.Label>
//     //                     <Form.Control type="text" placeholder="Last name" />
//     //                 </Form.Group>
//     //             </Row>
//     //             <Row className="mb-3">
//     //                 <Form.Group as={Col} controlId="formGridGender">
//     //                     <Form.Label>Gender</Form.Label>
//     //                     <Form.Control type="text" placeholder="Gender" />
//     //                 </Form.Group>

//     //                 <Form.Group as={Col} controlId="formGridDateOfBirth">
//     //                     <Form.Label>Date Of Birth</Form.Label>
//     //                     <Form.Control type="date" placeholder="Date Of Birth" />
//     //                 </Form.Group>
//     //             </Row>
//     //             <Row className="mb-3">
//     //                 <Form.Group as={Col} controlId="formGridEmail">
//     //                     <Form.Label>Email</Form.Label>
//     //                     <Form.Control type="email" placeholder="Email" />
//     //                 </Form.Group>

//     //                 <Form.Group as={Col} controlId="formGridPassword">
//     //                     <Form.Label>Phone Number</Form.Label>
//     //                     <Form.Control type="text" placeholder="Phone Number" />
//     //                 </Form.Group>
//     //             </Row>
//     //             <Row className="mb-3">
//     //                 <Form.Group as={Col} controlId="formGridPassword">
//     //                     <Form.Label>Password</Form.Label>
//     //                     <Form.Control type="password" placeholder="Enter Password" />
//     //                 </Form.Group>

//     //                 <Form.Group as={Col} controlId="formGridDepartment">
//     //                     <Form.Label>Department</Form.Label>
//     //                     <Form.Control type="text" placeholder="Department" />
//     //                 </Form.Group>
//     //             </Row>
//     //             <Row className="mb-3">
//     //                 <Form.Group as={Col} controlId="formGridCountry">
//     //                     <Form.Label>Country</Form.Label>
//     //                     <Form.Control type="text" placeholder="Country" />
//     //                 </Form.Group>

//     //                 <Form.Group as={Col} controlId="formGridCity">
//     //                     <Form.Label>City</Form.Label>
//     //                     <Form.Control type="text" placeholder="City" />
//     //                 </Form.Group>
//     //             </Row>
//     //             <Row className="mb-3">
//     //                 <Form.Group as={Col} controlId="formGridAddress">
//     //                     <Form.Label>Address</Form.Label>
//     //                     <Form.Control as="textarea" placeholder="Address" />
//     //                 </Form.Group>
//     //             </Row>
//     //             <Button href="/employees" variant="primary" type="submit">
//     //                 Submit
//     //             </Button>
//     //         </Form>
//     //     </div>
//     // </div>

//     return (
//         <div>
//             <div className="dashboard-page">
//                 <Header parentToChild={"Employee Leave Management System"} />
//                 <div className="department-main">
//                     <div className="department-container">
//                         <div >
//                             <ToastContainer className="mt-5" position="top-end">
//                                 <Toast
//                                     onClose={() => setShowAlert(false)}
//                                     bg={background.toLowerCase()}
//                                     show={showAlert}
//                                     className="d-inline-block m-1"
//                                     delay={3000}
//                                     autohide
//                                     position='top-end'
//                                 >
//                                     <Toast.Body className='text-white font-weight-bold'>
//                                         {message}
//                                     </Toast.Body>
//                                 </Toast>
//                             </ToastContainer>
//                         </div>
//                         <div>

//                             <h4 className="">Department List</h4>

//                             <div className="pb-5">
//                                 <ModalForm buttonLabel="Add Department" addItemToState={addItemToState} />

//                             </div>
//                             <div className="card-table">
//                                 <div className="mt-2 mb-2 d-flex justify-content-between">
//                                     <div></div>
//                                     <div className=" ">
//                                         <input type="text" className="form-control " placeholder="Search" onChange={filterData} />
//                                     </div>
//                                 </div>
//                                 <DataTable
//                                     items={items}
//                                     updateState={updateState}
//                                     deleteItemFromState={deleteItemFromState}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EmployeeForm;