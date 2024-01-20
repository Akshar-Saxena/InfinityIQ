import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PlayQuizCard from "../components/PlayQuizCard";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
} from "firebase/firestore";
import firebaseConfig from "../constants/firebaseCreds";
import { useNavigate } from "react-router-dom";

export default function AllQuizPage() {
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState([]);
    const getQuiz = async () => {
        const quizzes = await getDocs(collection(db, "quizzes"));
        quizzes.forEach((element) => {
            setQuiz((prev) => [...prev, { ...element.data(), id: element.id }]);
        });
        console.log(quiz);
    };

    useEffect(() => {
        if (document.cookie != "") {
            getQuiz();
        } else {
            navigate("/login");
        }
    }, []);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return (
        <div>
            <NavBar />
            {document.cookie != "" ? (
                <div className="mt-[100px] w-[70%] m-auto">
                    <h1 className="text-5xl my-4">Play a Quiz</h1>
                    {quiz.map((element, id) => (
                        <PlayQuizCard
                            key={id}
                            title={element.quizName}
                            desc={element.desc}
                            token={element.id}
                        />
                    ))}
                </div>
            ) : (
                () => navigate("/login")
            )}
        </div>
    );
}
