import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavBar(props) {
    const navigate = useNavigate();
    const logoutHandler = () => {
        document.cookie = `${document.cookie}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        window.location.reload();
    };
    return (
        <div className="flex items-center justify-between w-[90%] m-auto">
            <img
                className="cursor-pointer"
                onClick={() => navigate("/")}
                src="/logo.png"
                alt=""
            />
            <ul className="flex w-[20%] justify-between items-center">
                <li className="cursor-pointer text-[#414E9B]">About</li>
                <Link to="/quizzes">
                    <li className="cursor-pointer text-[#414E9B]">Quizzes</li>
                </Link>
                <li className="cursor-pointer text-[#414E9B]">Rules</li>
            </ul>
            {props.token == false ? (
                <button
                    className="bg-[#414E9B] text-[#FFA200] px-5 py-2 rounded-md hover:shadow-md hover:shadow-[#FFA200]"
                    onClick={() => navigate("/login")}
                >
                    Get Started
                </button>
            ) : (
                <button
                    className="bg-[#414E9B] text-[#FFA200] px-5 py-2 rounded-md hover:shadow-md hover:shadow-[#414E9B]"
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            )}
        </div>
    );
}
