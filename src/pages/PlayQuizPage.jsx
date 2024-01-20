import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import firebaseConfig from "../constants/firebaseCreds";
import NavBar from "../components/NavBar";
import PlayCard from "../components/PlayCard";
import data from "../constants/score.json";
import Footer from "../components/Footer";

export default function PlayQuizPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [loadQuiz, setLoadQuiz] = useState();

    const getQuiz = async () => {
        const quizzes = await getDocs(collection(db, "quizzes"));
        quizzes.forEach((element) => {
            if (element.id == location.state.token) {
                setLoadQuiz(element.data());
                let temp = element.data();
                // element.data().forEach((element) => {
                //     console.log(element);
                // });
            }
        });
    };
    useEffect(() => {
        data.score = 0;
        getQuiz();
    }, []);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return (
        <div>
            <NavBar />
            <div className="mt-[100px] w-[70%] m-auto">
                <h1 className="text-5xl my-4 text-[#4149be]">
                    {loadQuiz != undefined && loadQuiz.quizName}
                </h1>
                {loadQuiz != undefined &&
                    Object.entries(loadQuiz.content).map(([key, value], id) => (
                        <PlayCard
                            key={id}
                            options={loadQuiz.content[key].options}
                            quesName={key}
                        />
                    ))}
                <button
                    className="bg-[#414E9B] w-[200px] ml-[50%] -translate-x-1/2 mb-5 text-[#FFA200] px-5 py-2 rounded-md hover:shadow-md hover:shadow-[#FFA200]"
                    onClick={() =>
                        navigate("/checkscore", {
                            state: { score: data.score },
                        })
                    }
                >
                    Check Score
                </button>
            </div>
            <Footer />
        </div>
    );
}
