import React, { useEffect, useState } from "react";
import data from "../constants/score.json";
import "../App.css";

export default function PlayCard(props) {
    const correctAns = props.options[0];
    const [selectedOption, setSelectedOption] = useState(null);
    const [op, setOP] = useState(props.options);
    useEffect(() => {
        setOP(
            props.options
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
        );
    }, []);
    const getStyle = (e) => {
        if (selectedOption != null) {
            if (e == correctAns) {
                return { backgroundColor: "green" };
            } else if (e == selectedOption) {
                return { backgroundColor: "red" };
            } else {
            }
        }
    };
    const ansChecker = (e) => {
        data.score += e == correctAns ? 2 : -0.5;
        setSelectedOption(e);
    };
    return (
        <div className="bg-gray-100 p-6 my-4 max-[350px]:text-sm">
            <h1 className="text-right mr-3 max-[400px]:mr-0 text-gray-500">
                2 marks
            </h1>
            <div className="bg-white my-4 px-10 shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] p-4 rounded-[100px]">
                {props.quesName}
            </div>
            <div
                onClick={() => ansChecker(op[0])}
                style={getStyle(op[0])}
                className="bg-white cursor-pointer my-4 px-10 shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] p-4 rounded-[100px] w-[40%] max-[400px]:w-[80%]"
            >
                {op[0]}
            </div>
            <div
                onClick={() => ansChecker(op[1])}
                style={getStyle(op[1])}
                className="bg-white cursor-pointer my-4 px-10 shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] p-4 rounded-[100px] w-[40%] max-[400px]:w-[80%]"
            >
                {op[1]}
            </div>
            <div
                onClick={() => ansChecker(op[2])}
                style={getStyle(op[2])}
                className="bg-white cursor-pointer my-4 px-10 shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] p-4 rounded-[100px] w-[40%] max-[400px]:w-[80%]"
            >
                {op[2]}
            </div>
            <div
                onClick={() => ansChecker(op[3])}
                style={getStyle(op[3])}
                className="bg-white cursor-pointer my-4 px-10 shadow-[3px_3px_3px_0px_rgba(0,0,0,0.3)] p-4 rounded-[100px] w-[40%] max-[400px]:w-[80%]"
            >
                {op[3]}
            </div>
        </div>
    );
}
