import styled from "styled-components";
import ExtensionItem from "./ExtensionItem";

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center;
    gap: 1.3rem;

    @media screen and (max-width: 65em) {
        & {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 50em) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;

function ExtensionList({ extensions, onDelete, onToggle }) {
    return (
        <List>
            {extensions.map((extension) => (
                <ExtensionItem extension={extension} key={extension.name} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </List>
    );
}

export default ExtensionList;
