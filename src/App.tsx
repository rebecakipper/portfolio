import React from "react";
import "./App.css";
import { Header } from "./Header";

import ResponsiveAppBar from "./Nav";
import {
    AppBar,
    Button,
    Typography,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Icon,
    createTheme,
    colors,
    ThemeProvider,
    Paper,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import NavBar from "./Nav";
import { HashRouter, Route } from "react-router-dom";
import { Section } from "./HeroSection";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#757ce8",
            main: "#000000",
            dark: "#002884",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#ffde59",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    typography: {
        fontFamily: ["Press Start 2P"].join(","),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Paper className="App">
                    <CssBaseline />
                    <NavBar />
                    <main>
                        <Route path="/about">
                            <div>
                                <Typography variant="h1">About</Typography>
                                <Section />
                            </div>
                        </Route>
                        <Route path="/experience">
                            <div>
                                <Typography variant="h1">Experience</Typography>
                                <Section />
                            </div>
                        </Route>
                        <Route path="/projects">
                            <div>
                                <Typography variant="h1">Projects</Typography>
                                <Section />
                            </div>
                        </Route>
                        <Route path="/contact">
                            <div>
                                <Typography variant="h1">Contact</Typography>
                                <Section />
                            </div>
                        </Route>
                    </main>
                </Paper>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
