import React from "react";
import NavBar from "../components/NavBar";

export default function AboutPage() {
    return (
        <div>
            <NavBar />
            <div className="w-[60%] p-6 max-[550px]:w-[80%] max-[550px]:mt-[100px] bg-gray-100 rounded-3xl shadow-md shadow-[#ffa200] m-auto mt-[200px]">
                <h1 className="text-4xl text-[#4149be]">About</h1>
                <p className="text-[#ffa200] my-4 text-lg text-justify">
                    Infinity IQ is a dynamic online platform designed for quiz
                    enthusiasts to create and engage in a diverse range of
                    quizzes. With an intuitive interface, users can effortlessly
                    craft personalized quizzes spanning various topics and share
                    them with a global community. The platform offers an
                    immersive quiz-playing experience, encouraging users to test
                    their knowledge and challenge friends. At Infinity IQ, our
                    mission is to foster a vibrant community of learners and
                    quiz creators, providing an entertaining and educational hub
                    for individuals of all interests. Join us in the world of
                    infinite possibilities as we continue to inspire curiosity
                    and knowledge-sharing through the art of quizzing.
                </p>
            </div>
        </div>
    );
}
