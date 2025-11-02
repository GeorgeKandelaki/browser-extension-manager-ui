import styled from "styled-components";
import RemoveButton from "./../ui/RemoveButton";
import SwitchButton from "./../ui/SwitchButton";

const Item = styled.li`
    background-color: var(--color-neutral-0);
    padding: 1.8rem 2rem;
    border-radius: 1.5rem;
    border: 1px solid var(--color-neutral-300);

    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    flex-grow: 1;
`;

const ExtensionInfo = styled.div`
    display: flex;
    align-items: top;
    gap: 1.6rem;
    flex-grow: 1;
`;

const ExtensionName = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-light);
`;
const ExtensionDescription = styled.p`
    color: var(--color-text-neutral);
    font-weight: 400;
`;

const ExtensionLogo = styled.div``;

const ExtensionActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function ExtensionItem({ extension, onDelete, onToggle }) {
    return (
        <Item>
            <ExtensionInfo>
                <ExtensionLogo>
                    <img src={extension.logo} alt="image of the logo" />
                </ExtensionLogo>

                <div>
                    <ExtensionName>{extension.name}</ExtensionName>
                    <ExtensionDescription>{extension.description}</ExtensionDescription>
                </div>
            </ExtensionInfo>
            <ExtensionActions>
                <RemoveButton onClick={() => onDelete?.(extension.name)}>Remove</RemoveButton>
                <SwitchButton enabled={extension.isActive} onClick={() => onToggle?.(extension.name)} />
            </ExtensionActions>
        </Item>
    );
}

export default ExtensionItem;
