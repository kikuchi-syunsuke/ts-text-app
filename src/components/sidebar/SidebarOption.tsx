import React from "react";

type propsType = {
    text: string;
    icon: string;
}

const SidebarOption: React.FC<propsType> = (props) => {
    const { text, icon } = props;
    return (
        <div>
            <p>{`${text}:${icon}`}</p>
        </div>
    )
}

export default SidebarOption;