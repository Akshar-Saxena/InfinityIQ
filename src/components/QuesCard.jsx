import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DotLoader } from "react-spinners";
import { v4 as uuidv4 } from "uuid";

export default function QuesCard(props) {
    const [questionName, setQuestionName] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [color, setColor] = useState("transparent");
    const [isSaving, setIsSaving] = useState(false);
    const [state, setState] = useState(false);

    const quesNameHandler = (e) => {
        setQuestionName(e.target.value);
    };
    const option1Handler = (e) => {
        setOption1(e.target.value);
    };
    const option2Handler = (e) => {
        setOption2(e.target.value);
    };
    const option3Handler = (e) => {
        setOption3(e.target.value);
    };
    const option4Handler = (e) => {
        setOption4(e.target.value);
    };

    const saveHandler = () => {
        setIsSaving(true);
        if (
            questionName == "" ||
            option1 == "" ||
            option2 == "" ||
            option3 == "" ||
            option4 == ""
        ) {
            setColor("red");
        } else {
            setColor("green");
            const q = {
                questionName: questionName,
                options: [option1, option2, option3, option4],
            };
            try {
                let data = localStorage.getItem("data");
                data = JSON.parse(data);
                data[questionName] = q;
                localStorage.setItem("data", JSON.stringify(data));
            } catch (e) {
                const temp = {};
                temp[questionName] = q;
                localStorage.setItem("data", JSON.stringify(temp));
            }
            setState(true);
        }
        setIsSaving(false);
    };
    return (
        <>
            {isSaving && (
                <div className="absolute z-50 flex justify-center items-center t-0 l-0 bg-[#414e9b84] h-[100vh] w-full bg-opacity-60">
                    <DotLoader size={100} color="#ffa200" />
                </div>
            )}
            <div
                className="w-[80%] bg-gray-100 p-8 rounded-2xl my-6"
                style={{ outline: `1px solid ${color}` }}
            >
                <ToastContainer />
                <h3 className="text-right">2 marks</h3>
                <input
                    disabled={state}
                    className="shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] my-3 py-3 px-4 rounded-3xl w-full"
                    type="text"
                    placeholder={`Question ${props.quesNo}`}
                    value={questionName}
                    onChange={quesNameHandler}
                />
                <div className="flex flex-col w-[35%]">
                    <input
                        disabled={state}
                        className="shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] my-3 py-3 px-4 rounded-3xl"
                        type="text"
                        placeholder="Option 1 (Correct option)"
                        value={option1}
                        onChange={option1Handler}
                    />
                    <input
                        disabled={state}
                        className="shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] my-3 py-3 px-4 rounded-3xl"
                        type="text"
                        placeholder="Option 2"
                        value={option2}
                        onChange={option2Handler}
                    />
                    <input
                        disabled={state}
                        className="shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] my-3 py-3 px-4 rounded-3xl"
                        type="text"
                        placeholder="Option 3"
                        value={option3}
                        onChange={option3Handler}
                    />
                    <input
                        disabled={state}
                        className="shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] my-3 py-3 px-4 rounded-3xl"
                        type="text"
                        placeholder="Option 4"
                        value={option4}
                        onChange={option4Handler}
                    />
                </div>
                <div className="flex items-end justify-end w-full">
                    <button disabled={state} onClick={saveHandler}>
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}
