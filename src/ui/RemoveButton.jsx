import styled from "styled-components";

const RemoveButton = styled.button`
    background-color: inherit;
    border: 1px solid var(--color-neutral-300);
    border-radius: 3rem;
    padding: 0.7rem 2rem;
    color: var(--color-text-light);

    &:hover {
        background-color: var(--color-red-500);
        color: var(--color-text-dark);
    }
`;

export default RemoveButton;
