import React from "react";
import styled from "styled-components";

type propsType = {
    text: string;
    icon: string;
};

const SidebarOption: React.FC<propsType> = (props) => {
    const { text, icon } = props;
    return (
        <Sdiv>
            <p>{`${text}:${icon}`}</p>
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
