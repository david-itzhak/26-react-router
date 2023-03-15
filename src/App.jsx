import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="courses" element={<Courses/>}/>
                        <Route path="courses/:slug" element={<SingleCourse/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="contacts" element={<Contacts/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
