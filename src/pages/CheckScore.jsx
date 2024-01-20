import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function CheckScore() {
    const location = useLocation();
    return (
        <div>
            <NavBar />
            <div className="mt-[100px] w-[70%] m-auto outline outline-1 outline-black shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] rounded-xl flex flex-col justify-center items-center">
                <img className="w-[40%]" src="/score.jpg" alt="" />
                <h1 className="text-5xl my-4 text-[#4149be]">
                    Score:
                    <span className="ml-4 text-[#ffa200]">
                        {location.state.score}
                    </span>
                </h1>
            </div>
        </div>
    );
}
