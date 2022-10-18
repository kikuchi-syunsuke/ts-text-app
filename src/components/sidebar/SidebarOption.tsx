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
        <Sdiv>
            <Icon />
            <p>{text}</p>
        </Sdiv>
    );
};

const Sdiv = styled.div`
    width: 80%;
    margin-inline: auto;
    border: 1px solid blue;
    background-color: gray;
`;

export default SidebarOption;
