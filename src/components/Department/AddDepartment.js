// import React, {useState} from 'react';
// import { Button, Modal,Form } from 'react-bootstrap';
// import { v4 as uuid } from "uuid";
// import jsonData from "../../data.json";
// import { format } from 'date-fns';
// import { Route} from "react-router-dom";
// import { Link } from "react-router-dom";
// import Department from '../../pages/Dapartment/Department';
// // import Department from './Department';
// //import { useHistory } from 'react-router';
// import { useNavigate } from 'react-router-dom';

// function AddDepartment() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [DepartmentName, setname] = useState("");
//   const [date, setDate] = useState(format(new Date(), 'MMMM-do-yyyy h:mm:ss a'));
//   const handelSubmit = (e) => {
//     e.preventDefault(); // Prevent reload

//     const ids = uuid(); // Creating unique id
//     let uni = ids.slice(0, 8); // Slicing unique id

//     jsonData.Departments.push({ id: uni, departmentName: DepartmentName, created:date.toString() });
//     handleClose();
//     <Route
//                         path="/department"
//                         element={<Department />}
//                     />
//     //navigate.push('/department');
//   }; 
//   return (
//     <div className="mb-2">
      
//         <Button variant="primary" onClick={handleShow}>
//         Add Department
//         </Button>
     
//       <Modal centered backdrop="static"  show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Department</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form
//                 className="d-grid gap-2"
//             >
//                 <Form.Group
//                     className="mb-3"
//                     controlId="formBasicName"
//                 >
//                     <Form.Control
//                         onChange={(e) =>
//                             setname(e.target.value)
//                         }
                       
//                         type="text"
//                         placeholder="Enter Name"
//                         required
//                     />
//                 </Form.Group>
//                 <Button
//                     onClick={(e) => handelSubmit(e)}
                    
//                     variant="primary"
//                     type="submit"
//                 >
//                     Submit
//                 </Button>
//                 <Button
//                     onClick={handleClose}
//                     variant="danger"
//                     type="submit"
//                 >
//                     Cancel
//                 </Button>
//             </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }
   
// export default AddDepartment;