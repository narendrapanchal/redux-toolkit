import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Authentication = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState("");

    const { loggedIn:isLoggedIn } = useSelector(state => state.auth)
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedIn(isLoggedIn);
    }, []);

    if (loggedIn) {
        return children;
    } else {
        navigate("/login");
    }
};

export default Authentication;