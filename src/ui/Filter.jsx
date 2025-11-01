import styled from "styled-components";

const StyledFilter = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

const FilterButton = styled.button`
    padding: 1rem 1.5rem;
    border-radius: 3rem;
    border: 1px solid var(--color-neutral-300);
    background-color: ${(props) => (props.active ? "var(--color-red-400)" : "var(--color-neutral-0)")};
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.05);
    color: ${(props) => (props.active ? "var(--color-text-dark)" : "var(--color-text-light)")};
    transition: opacity 0.3s, background-color 0.3s;

    &:hover {
        ${(props) => (props.active ? "opacity: 0.5;" : "background-color: var(--color-neutral-300);")};
    }
`;

function Filter({ options, currentFilter, onChangeFilter }) {
    return (
        <StyledFilter>
            {options.map((option) => (
                <FilterButton
                    key={option.label}
                    active={currentFilter === option.value}
                    onClick={() => onChangeFilter(option.value)}
                >
                    {option.label}
                </FilterButton>
            ))}
        </StyledFilter>
    );
}

export default Filter;
