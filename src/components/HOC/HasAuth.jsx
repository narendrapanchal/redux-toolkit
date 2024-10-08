import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HasAuth = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState("");
	const navigate = useNavigate();

    const { loggedIn:isLoggedIn } = useSelector(state=>state.auth)

	useEffect(() => {
		setLoggedIn(isLoggedIn);
	}, []);

	if (loggedIn) {
		navigate("/");
	} else {
		return children;
	}
};

export default HasAuth;