import React from 'react';
import NavBar from "./components/navbar";
import { createTheme, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import About from "./pages/About";

const theme = createTheme({
    palette:{
        primary:{
            main:'#272727'
        },
        secondary:{
            main:'#FDFDFD'
        }
    }
})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="Home" element={<Home/>}/>
                    <Route path="Generate" element={<Generate/>}/>
                    <Route path="About" element={<About/>}/>
                </Routes>
            </div>
        </ThemeProvider>
        );
}
export default App;