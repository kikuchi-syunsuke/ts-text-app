import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";

function App() {
    return (
        <SApp>
            <Sidebar />
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
