import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import DarkModeToggle from "../ui/DarkModeToggle";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 1.4rem;
    border-radius: 1.5rem;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.15);
    background-color: var(--color-neutral-0);
    line-height: 0;
`;

function Header() {
    return (
        <StyledHeader>
            <div>
                <img src={logo} alt="logo" />
            </div>

            <DarkModeToggle />
        </StyledHeader>
    );
}

export default Header;
