import React from "react";
import styled from "@emotion/styled";

export const Header = styled("h1")({
    color: "red",
    textAlign: "left",
    fontSize: "30px",
});

const HelloWorld: React.SFC = (props) => {
    return (
        <Header>
            Hello Boo
        </Header>
    );
};

export default HelloWorld;
