import React from "react";

const HeaderComponent = ({ header = "File Header" }): JSX.Element => {
    return (
        <>
            <h1>{header}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur molestiae cum quas quaerat porro quidem deserunt vero, inventore alias ut ex eveniet soluta reprehenderit eos dolor in et similique magnam.</p>
        </>
    );
};

export default HeaderComponent;
