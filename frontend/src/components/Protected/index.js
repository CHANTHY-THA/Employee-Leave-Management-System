import { useEffect, useState } from "react";
import Login from "../../pages/Login";
import axios from "axios";
import UserContext from "../../context/user-token";

const Protected = (props) => {
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        // get token from localStorage
        const token = localStorage.getItem("token");

        if (token) {
            axios.post(process.env.REACT_APP_URL + '/auth/profile', {}, {
                headers: { Authorization: `Bearer ${token}` },
            }).then((response) => {
                // console.log("🚀 ~ useEffect ~ response:", response)
                setLogin(true)
            }).catch((err) => {
                setLogin(false)
                console.log(err);
            });
        }
    }, []);


    return <UserContext.Provider value={{ isLogin, setLogin }}>
        {!isLogin ? <Login /> : props.children}
    </UserContext.Provider>
    // if (!isLogin) {
    //   return ;
    // } else {
    //   return props.children;
    // }
};

export default Protected;