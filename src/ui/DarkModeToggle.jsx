import { useEffect, useState } from "react";
import styled from "styled-components";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

const StyledDarkModeToggle = styled.div``;

function DarkModeToggle() {
    return (
        <StyledDarkModeToggle>
            {/* <img src={isDarkMode ? sunIcon : moonIcon} alt="dark mode switch icon" /> */}
        </StyledDarkModeToggle>
    );
}

export default DarkModeToggle;
