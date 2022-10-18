import { SvgIconProps } from "@mui/material";
import React from "react";
import styled from "styled-components";

type PROPS = {
    text: string;
    Icon: any;
};

const SidebarOption: React.FC<PROPS> = (props) => {
    const { text, Icon } = props;
    return (
        <SSidebarOption>
            <Icon />
            <h2>{text}</h2>
        </SSidebarOption>
    );
};

const SSidebarOption = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.15s ease-out;
    margin-left: 20px;
    &:hover {
        background-color: #e8f5fe;
        border-radius: 30px;
        color: var(--app-color);
    }
    .MuiSvgIcon-root {
        padding-right: 20px;
    }
    h2 {
        font-size: 20px;
        margin-right: 20px;
        font-weight: 800;
    }
`;

export default SidebarOption;
