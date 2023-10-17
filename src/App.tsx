import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/Main";
import styled from "styled-components";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
