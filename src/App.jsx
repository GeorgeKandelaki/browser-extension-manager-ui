import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import styled from "styled-components";
import Header from "./components/Header";
import ExtensionList from "./components/ExtensionList";
import Filter from "./ui/Filter";

// Logos
import devlens from "./assets/images/logo-devlens.svg";
import stylespy from "./assets/images/logo-style-spy.svg";
import speedboost from "./assets/images/logo-speed-boost.svg";
import jsonwizard from "./assets/images/logo-json-wizard.svg";
import tabmasterpro from "./assets/images/logo-tab-master-pro.svg";
import viewportbuddy from "./assets/images/logo-viewport-buddy.svg";
import markupnotes from "./assets/images/logo-markup-notes.svg";
import gridguides from "./assets/images/logo-grid-guides.svg";
import palettepicker from "./assets/images/logo-palette-picker.svg";
import linkchecker from "./assets/images/logo-link-checker.svg";
import domsnapshot from "./assets/images/logo-dom-snapshot.svg";
import consoleplus from "./assets/images/logo-console-plus.svg";
import { useState } from "react";

const extensions = [
    {
        logo: devlens,
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true,
    },
    {
        logo: stylespy,
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true,
    },
    {
        logo: speedboost,
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        isActive: false,
    },
    {
        logo: jsonwizard,
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true,
    },
    {
        logo: tabmasterpro,
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true,
    },
    {
        logo: viewportbuddy,
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser.",
        isActive: false,
    },
    {
        logo: markupnotes,
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        isActive: true,
    },
    {
        logo: gridguides,
        name: "GridGuides",
        description: "Overlay customizable grids and alignment guides on any webpage.",
        isActive: false,
    },
    {
        logo: palettepicker,
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        isActive: true,
    },
    {
        logo: linkchecker,
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        isActive: true,
    },
    {
        logo: domsnapshot,
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        isActive: false,
    },
    {
        logo: consoleplus,
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging.",
        isActive: true,
    },
];

const StyledApp = styled.div`
    margin: 4.8rem 12.8rem;
`;

const ExtensionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 0 4rem 0;
`;

const Heading = styled.h1`
    color: var(--color-text-light);
`;

function App() {
    const [filter, setFilter] = useState("all");

    return (
        <>
            <DarkModeProvider>
                <GlobalStyles />
                <StyledApp>
                    <Header />
                    <div>
                        <ExtensionsHeader>
                            <Heading>Extensions List</Heading>
                            <Filter
                                options={[
                                    { label: "All", value: "all" },
                                    { label: "Active", value: "active" },
                                    { label: "Inactive", value: "inactive" },
                                ]}
                                onChangeFilter={setFilter}
                                currentFilter={filter}
                            />
                        </ExtensionsHeader>
                        <ExtensionList extensions={extensions} />
                    </div>
                </StyledApp>
            </DarkModeProvider>
        </>
    );
}

export default App;
