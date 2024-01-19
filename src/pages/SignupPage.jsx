import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";

export default function SignupPage() {
    return (
        <div>
            <NavBar token={false} />
            <div className="bg-[#414E9B] w-[40%] mt-[25%] rounded-lg shadow-[8px_8px_3px_0px_rgba(0,0,0,0.3)] -translate-y-1/2 m-auto flex flex-col justify-center items-center">
                <h1 className="text-5xl text-[#ffa200] my-12">Sign Up</h1>
                <div className="flex flex-col">
                    <input
                        className="px-4 w-[400px] py-2 my-2"
                        type="text"
                        placeholder="Create Username"
                    />
                    <input
                        className="px-4 w-[400px] py-2 my-2"
                        type="email"
                        placeholder="Enter your Email"
                    />
                    <input
                        className="px-4 w-[400px] py-2 my-2"
                        type="password"
                        placeholder="Create Password"
                    />
                </div>
                <button className="bg-[#ffa200] text-[#414e9b] px-6 py-2 rounded-full my-6">
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
