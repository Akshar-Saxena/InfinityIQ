import React, { useState } from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import firebaseConfig from "../constants/firebaseCreds";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DotLoader } from "react-spinners";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const showError = (msg) => {
        toast.error(msg);
    };

    const validation = () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("Invalid email");
        } else if (password == "") {
            showError("Enter a password");
        } else {
            loginHandler();
        }
    };

    const loginHandler = async () => {
        setIsSaving(true);
        const getUsers = await getDocs(collection(db, "users"));
        getUsers.forEach((element) => {
            if (
                element.data().email == email &&
                element.data().password == password
            ) {
                document.cookie = `token=${element.data().key}`;
                navigate("/");
            }
        });
        showError("Invalid email or password");
        setIsSaving(false);
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
            <div className="bg-[#414E9B] w-[40%] mt-[25%] rounded-lg shadow-[8px_8px_3px_0px_rgba(0,0,0,0.3)] -translate-y-1/2 m-auto flex flex-col justify-center items-center">
                <h1 className="text-5xl text-[#ffa200] my-12">Login</h1>
                <div className="flex flex-col">
                    <input
                        className="px-4 w-[400px] py-2 my-2"
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={emailHandler}
                    />
                    <input
                        className="px-4 w-[400px] py-2 my-2"
                        type="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={passwordHandler}
                    />
                </div>
                <button
                    className="bg-[#ffa200] text-[#414e9b] px-6 py-2 rounded-full my-6"
                    onClick={validation}
                >
                    Login
                </button>
                <span className="mt-2 mb-10 text-white">
                    Want an account?{" "}
                    <a className="text-[#ffa200]" href="/signup">
                        Signup
                    </a>
                </span>
            </div>
        </div>
    );
}
