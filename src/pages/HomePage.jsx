import React from "react";
import NavBar from "../components/NavBar";
import "../App.css";
import Footer from "../components/Footer";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import firebaseConfig from "../constants/firebaseCreds";

export default function HomePage() {
    return (
        <div>
            <NavBar token={false} />
            <div className="flex justify-between items-center w-[75%] m-auto mt-[60px] ">
                <img className="w-[40%]" src="/hero.png" alt="" />
                <p className="text-[#FFA200] text-lg w-[50%]">
                    <h1 className="text-4xl text-[#414E9B]">
                        InfinityIQ: Ignite Your Mind, <br /> Challenge Your
                        World!"
                    </h1>
                    Welcome to InfinityIQ, your portal to limitless quiz
                    exploration! Immerse yourself in a world where you can not
                    only craft mind-bending quizzes but also challenge your
                    intellect with an endless array of user-created brain
                    teasers. Join us on a journey where curiosity knows no
                    bounds, and every quiz is a unique adventure waiting to
                    unfold. Let your infinite IQ shine!
                </p>
            </div>
            <div className="pb-[100px]">
                <h1 className="text-5xl text-center my-10">Quizzes</h1>
                <div className="flex w-[50%] m-auto justify-between">
                    <div className="bg-gray-200 rounded-xl shadow-md hover:shadow-[#414E9B] cursor-pointer flex flex-col justify-center items-center w-[200px] h-[200px]">
                        <img className="w-[70px]" src="/add.png" alt="" />
                        <h1 className="text-3xl text-[#FFA200]">
                            Create a quiz
                        </h1>
                    </div>
                    <div className="bg-gray-200 rounded-xl shadow-md hover:shadow-[#414E9B] cursor-pointer flex flex-col justify-center items-center w-[200px] h-[200px]">
                        <img className="w-[70px]" src="/play.png" alt="" />
                        <h1 className="text-3xl text-[#FFA200]">Play a quiz</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
