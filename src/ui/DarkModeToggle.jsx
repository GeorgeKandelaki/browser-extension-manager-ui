import { useEffect, useState } from "react";
import styled from "styled-components";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import { useDarkMode } from "../context/DarkModeContext";

const StyledDarkModeToggle = styled.div`
    line-height: 0;
    padding: 1.8rem 1.5rem;
    background-color: var(--color-neutral-200);
    border-radius: 1.2rem;

    &:hover {
        background-color: var(--color-neutral-300);
    }
`;

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <StyledDarkModeToggle onClick={toggleDarkMode}>
            <img src={isDarkMode ? sunIcon : moonIcon} alt="dark mode switch icon" />
        </StyledDarkModeToggle>
    );
}

export default DarkModeToggle;
