import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddQuizPage from "./pages/AddQuizPage";
import AllQuizPage from "./pages/AllQuizPage";
import PlayQuizPage from "./pages/PlayQuizPage";
import CheckScore from "./pages/CheckScore";
import AboutPage from "./pages/AboutPage";
import RulesPage from "./pages/RulesPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/signup" element={<SignupPage />} />
                <Route exact path="/add" element={<AddQuizPage />} />
                <Route exact path="/quizzes" element={<AllQuizPage />} />
                <Route exact path="/play" element={<PlayQuizPage />} />
                <Route exact path="/checkscore" element={<CheckScore />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/rules" element={<RulesPage />} />
            </Routes>
        </Router>
    );
}
