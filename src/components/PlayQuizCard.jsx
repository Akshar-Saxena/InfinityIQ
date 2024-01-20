import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlayQuizCard(props) {
    const navigate = useNavigate();
    const playQuiz = () => {
        navigate("/play", { state: { token: props.token } });
    };
    return (
        <div className="outline outline-1 my-4 outline-black rounded-lg p-5 flex flex-col justify-end items-end">
            <h1 className="text-[#4149be] w-full">
                Name of the quiz:{" "}
                <span className="text-[#ffa200]">{props.title}</span>
            </h1>
            <h2 className="text-[#4149be] w-full">
                {" "}
                Description of the quiz:{" "}
                <span className="text-[#ffa200]">{props.desc}</span>
            </h2>
            <button onClick={playQuiz}>
                <img className="w-[30px]" src="/play.png" alt="" />
            </button>
        </div>
    );
}
