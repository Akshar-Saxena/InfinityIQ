import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import QuesCard from "../components/QuesCard";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DotLoader } from "react-spinners";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseConfig from "../constants/firebaseCreds";
import { useNavigate } from "react-router-dom";

export default function AddQuizPage() {
    const [no, setNo] = useState(1);
    const [quizName, setQuizName] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();
    const [color, setColor] = useState({ s: "1", c: "black" });
    const increment = () => {
        setNo((prev) => prev + 1);
    };
    const error = (e) => {
        toast.error(e);
    };
    const quizNameHandler = (e) => {
        setQuizName(e.target.value);
    };
    const descHandler = (e) => {
        setDesc(e.target.value);
    };
    const [isSaving, setIsSaving] = useState(false);
    const createHandler = async () => {
        if (desc == "" || quizName == "") {
            setColor({ s: "2", c: "red" });
        } else {
            setColor({ s: "1", c: "black" });
            setIsSaving(true);
            let data = localStorage.getItem("data");
            data = JSON.parse(data);
            console.log(data);
            await addDoc(collection(db, "quizzes"), {
                key: document.cookie.slice(6),
                quizName: quizName,
                desc: desc,
                content: data,
            });
            setIsSaving(false);
            navigate("/quizzes");
        }
    };
    useEffect(() => {
        try {
            localStorage.removeItem("data");
        } catch (e) {
            null;
        }
        if (document.cookie == "") {
            navigate("/login");
        }
    }, []);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return (
        <div>
            <ToastContainer />
            <NavBar />
            {isSaving && (
                <div className="absolute z-50 flex justify-center items-center t-0 l-0 bg-[#414e9b84] h-[100vh] w-full bg-opacity-60">
                    <DotLoader size={100} color="#ffa200" />
                </div>
            )}
            <div className="mt-[100px] w-[70%] m-auto max-[550px]:w-[90%]">
                <h1 className="text-5xl my-4">Create a Quiz</h1>
                <div
                    style={{ outline: `${color.s}px solid ${color.c}` }}
                    className="outline outline-1 flex flex-col justify-center items-center outline-black rounded-lg pb-10 mb-10"
                >
                    <input
                        className="shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] my-3 py-3 px-4 rounded-3xl w-[80%]"
                        type="text"
                        placeholder="Name of the quiz"
                        value={quizName}
                        onChange={quizNameHandler}
                    />
                    <textarea
                        className="shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] my-3 py-3 px-4 rounded-3xl w-[80%]"
                        cols="30"
                        rows="10"
                        placeholder="Description of the quiz"
                        value={desc}
                        onChange={descHandler}
                    ></textarea>
                    {Array.from({ length: no }, (_, i) => i + 1).map(
                        (element, id) => (
                            <QuesCard quesNo={element} key={id} />
                        )
                    )}
                    <button
                        className="flex justify-center items-center"
                        onClick={increment}
                    >
                        <img className="w-[10%]" src="/add.png" alt="" />
                        <span className="ml-2">Add More Questions</span>
                    </button>
                </div>
                <button
                    onClick={createHandler}
                    className="bg-[#414E9B] w-[100px] ml-[50%] -translate-x-1/2 mb-5 text-[#FFA200] px-5 py-2 rounded-md hover:shadow-md hover:shadow-[#FFA200]"
                >
                    Create
                </button>
            </div>
            <Footer />
        </div>
    );
}
