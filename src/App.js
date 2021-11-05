import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Movie from "./components/Pages/Movie";
import NotFound from "./components/Pages/NotFound";


const App = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:movieId' element={<Movie/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>

    </Router>
)

export default App;
