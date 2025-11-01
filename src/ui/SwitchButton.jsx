import { useState } from "react";
import styled from "styled-components";

const StyledSwitchButton = styled.button`
    background-color: ${(props) => (props.enabled ? "var(--color-red-500)" : "var(--color-neutral-300)")};
    height: 2.6rem;
    width: 4.5rem;
    border: none;
    border-radius: 2rem;

    display: flex;
    align-items: center;

    & div {
        transition: transform 0.3s;
        transform: translateX(${(props) => (props.enabled ? "101%" : "11%")});
    }
`;

const Ball = styled.div`
    line-height: 0;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 50%;
    background-color: #fff;
`;

function SwitchButton({ enabled, onClick }) {
    const [isToggled, setIsToggled] = useState(Boolean(enabled));

    function toggleSwitch() {
        setIsToggled((prev) => !prev);
        onClick?.();
    }

    return (
        <StyledSwitchButton onClick={toggleSwitch} enabled={isToggled}>
            <Ball></Ball>
        </StyledSwitchButton>
    );
}

export default SwitchButton;
