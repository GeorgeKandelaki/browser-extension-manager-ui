import styled from "styled-components";
import ExtensionItem from "./ExtensionItem";

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.3rem;
`;

function ExtensionList({ extensions }) {
    return (
        <List>
            {extensions.map((extension) => (
                <ExtensionItem extension={extension} key={extension.name} />
            ))}
        </List>
    );
}

export default ExtensionList;
