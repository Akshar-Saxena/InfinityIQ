import React from "react";
import NavBar from "../components/NavBar";

const RulesPage = () => {
    return (
        <>
            <NavBar />
            <div className="max-w-2xl mt-[100px] mx-auto mb-10 p-4 bg-gray-100 rounded-lg  shadow-md shadow-[#ffa200]">
                <h1 className="text-4xl font-bold text-[#4149be] mb-6">
                    Infinity IQ Rules
                </h1>

                <div className="mb-8">
                    <h2 className="text-xl text-[#ffa200] font-semibold mb-2">
                        Creating Quizzes
                    </h2>
                    <p className="text-justify">
                        As a quiz creator, you have the freedom to craft quizzes
                        on any topic of your choice. Ensure that your questions
                        are clear, accurate, and adhere to our content
                        guidelines.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl text-[#ffa200] font-semibold mb-2">
                        Playing Quizzes
                    </h2>
                    <p className="text-justify">
                        When playing quizzes, answer each question to the best
                        of your knowledge. Respect the community by avoiding
                        inappropriate content or cheating.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl text-[#ffa200] font-semibold mb-2">
                        Community Guidelines
                    </h2>
                    <p className="text-justify">
                        Be respectful and inclusive in your interactions with
                        other users. Report any content that violates our
                        guidelines for prompt action.
                    </p>
                </div>

                {/* Add more rule sections as needed */}

                <div className="mb-8">
                    <h2 className="text-xl text-[#ffa200] font-semibold mb-2">
                        Enjoy the Infinity IQ Experience!
                    </h2>
                    <p className="text-justify">
                        Embrace the spirit of learning and fun on Infinity IQ.
                        Connect with fellow quiz enthusiasts and elevate your IQ
                        in an infinite world of knowledge.
                    </p>
                </div>
            </div>
        </>
    );
};

export default RulesPage;
