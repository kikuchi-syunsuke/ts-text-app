import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/widgets/Widgets";
import styled from "styled-components";
import Timeline from "./components/timeline/Timeline";

function App() {
    return (
        <SApp>
            <Sidebar />
            <Timeline />
            <Widgets />
        </SApp>
    );
}
const SApp = styled.div`
    display: flex;
    height: 100vh;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
`;

export default App;
