import styled from "styled-components";

const StyledFilter = styled.div``;
const FilterButton = styled.button``;

function Filter({ options }) {
    return (
        <StyledFilter>
            {options.map((option) => (
                <FilterButton>{options.label}</FilterButton>
            ))}
        </StyledFilter>
    );
}

export default Filter;
