import React, { useState } from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import firebaseConfig from "../constants/firebaseCreds";
import "react-toastify/dist/ReactToastify.css";
import { DotLoader } from "react-spinners";
import { v4 as uuidv4 } from "uuid";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };
    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const validation = () => {
        if (username == "") {
            showError("Enter a username");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("Invalid email");
        } else if (password == "") {
            showError("Enter a password");
        } else {
            signupHandler();
        }
    };

    const signupHandler = async () => {
        setIsSaving(true);
        const id = uuidv4();
        await addDoc(collection(db, "users"), {
            key: id,
            username: username,
            email: email,
            password: password,
        });
        document.cookie = `token=${id};`;
        navigate("/");
    };

    const showError = (msg) => {
        toast.error(msg);
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return (
        <div>
            {isSaving && (
                <div className="absolute z-50 flex justify-center items-center t-0 l-0 bg-[#414e9b84] h-[100vh] w-full bg-opacity-60">
                    <DotLoader size={100} color="#ffa200" />
                </div>
            )}
            <ToastContainer />
            <NavBar token={document.cookie != "" ? true : false} />
            <div className="bg-[#414E9B] w-[40%] mt-[25%] rounded-lg shadow-[8px_8px_3px_0px_rgba(0,0,0,0.3)] -translate-y-1/2 m-auto flex flex-col justify-center items-center max-[1130px]:mt-[40%] max-[1100px]:w-[60%] max-[750px]:mt-[60%] max-[550px]:mt-[90%] max-[450px]:w-[80%]">
                <h1 className="text-5xl text-[#ffa200] my-12">Sign Up</h1>
                <div className="flex flex-col">
                    <input
                        className="px-4 w-[400px]  max-[720px]:w-[90%] m-auto py-2 my-2"
                        type="text"
                        placeholder="Create Username"
                        value={username}
                        onChange={usernameHandler}
                    />
                    <input
                        className="px-4 w-[400px]  max-[720px]:w-[90%] m-auto py-2 my-2"
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={emailHandler}
                    />
                    <input
                        className="px-4 w-[400px]  max-[720px]:w-[90%] m-auto py-2 my-2"
                        type="password"
                        placeholder="Create Password"
                        value={password}
                        onChange={passwordHandler}
                    />
                </div>
                <button
                    className="bg-[#ffa200] text-[#414e9b] px-6 py-2 rounded-full my-6"
                    onClickCapture={validation}
                >
                    Signup
                </button>
                <span className="mt-2 mb-10 text-white">
                    Already have an account?{" "}
                    <a className="text-[#ffa200]" href="/login">
                        Login
                    </a>
                </span>
            </div>
        </div>
    );
}
