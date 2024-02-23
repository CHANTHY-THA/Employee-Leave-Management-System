import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';




function ProfileForm(props) {
    const [user, setUser] = useState([{}])
    const [file, setfile] = useState(null);
    const [preShow, setpreShow] = useState(null);
    const token = localStorage.getItem("token");


    const getUser = () => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        axios.post(process.env.REACT_APP_URL + '/auth/profile', {}, { headers: headers }, { validateStatus: () => true })
            .then(res => {
                console.log("profile", res.data.result);
                setUser(res.data.result)
            })

    };
    const navigate = useNavigate();
    const toProfile = () => {
        window.location.reload();
        navigate('/profile', { replace: true })
    }


    const updateProfile = (e) => {
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        e.preventDefault();

        console.log("🚀 ~ onImageChange ~ img23:", file);
        let formData = new FormData()
        formData.append('file', file)

        axios.post(process.env.REACT_APP_URL + '/user/proileImage', formData, { headers: headers }, { validateStatus: () => true }).then((res) => {
            console.log("🚀 ~ axios.post ~ res:", res)
            e.preventDefault();
            props.toggle();
            toProfile() // Navigate to the checkout page



        })

    };

    const onImageChange = (event) => {

        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            console.log("🚀 ~ onImageChange ~ img1:", file);
            setpreShow(URL.createObjectURL(file))
            setfile(file)
        }
    };
    const CloseModal = (e) => {
        e.preventDefault();
        props.toggle();
    }
    useEffect(() => {

        getUser();

    }, [props.item]);

    return (
        <Form className="">
            <Form.Group as={Row} className="mb-4" style={{ marginTop: "-20px" }}>
                <Row className="mb-3">
                    <img src={preShow !== null ? preShow : user.profile} ></img>
                    <input type="file" name="myImage" onChange={onImageChange} />
                </Row>
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button style={{ width: "100px", marginRight: "10px" }} onClick={updateProfile}>Save</Button>
                <Button style={{ width: "100px" }} className="btn btn-danger" onClick={CloseModal}>Cancel</Button>
            </div>

        </Form>

    );
}

export default ProfileForm;
