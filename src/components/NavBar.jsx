import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavBar(props) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const logoutHandler = () => {
        document.cookie = `${document.cookie}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        navigate("/");
    };
    return (
        <div className="flex items-center justify-between w-[90%] m-auto">
            <img
                className="cursor-pointer"
                onClick={() => navigate("/")}
                src="/logo.png"
                alt=""
            />
            <ul className="flex w-[20%] justify-between items-center max-[850px]:hidden">
                <Link to="/about">
                    <li className="cursor-pointer text-[#414E9B]">About</li>
                </Link>
                <Link to="/quizzes">
                    <li className="cursor-pointer text-[#414E9B]">Quizzes</li>
                </Link>
                <Link to="/rules">
                    <li className="cursor-pointer text-[#414E9B]">Rules</li>
                </Link>
            </ul>
            <button
                className="hamburger-icon block text-4xl min-[850px]:hidden"
                onClick={toggleMenu}
            >
                ☰
            </button>
            {isMenuOpen && (
                <div className="menu-items z-40 py-12 min-[850px]:hidden absolute text-center top-[80px] left-0 w-full bg-[#ffa200c8] flex flex-col">
                    <a className="py-4 text-lg" href="/about">
                        About
                    </a>
                    <a className="py-4 text-lg" href="/quizzes">
                        Quizzes
                    </a>
                    <a className="py-4 text-lg" href="/rules">
                        Rules
                    </a>
                    {props.token == false ? (
                        <a className="py-4 text-lg" href="/login">
                            Get Started
                        </a>
                    ) : (
                        <a className="py-4 text-lg" onClick={logoutHandler}>
                            Logout
                        </a>
                    )}
                </div>
            )}
            {document.cookie == "" ? (
                <button
                    className="bg-[#414E9B] max-[850px]:hidden text-[#FFA200] px-5 py-2 rounded-md hover:shadow-md hover:shadow-[#FFA200]"
                    onClick={() => navigate("/login")}
                >
                    Get Started
                </button>
            ) : (
                <button
                    className="bg-[#414E9B] max-[850px]:hidden text-[#FFA200] px-5 py-2 rounded-md hover:shadow-md hover:shadow-[#414E9B]"
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            )}
        </div>
    );
}
