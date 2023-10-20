import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import styled from "styled-components";
import {Skills} from "./layout/section/skills/Skills";
import {Projects} from "./layout/section/projects/Projects";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
