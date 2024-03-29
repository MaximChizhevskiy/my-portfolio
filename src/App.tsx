import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Projects} from "./layout/section/projects/Projects";
import {Contact} from "./layout/section/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particles";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
