import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
    return (
        <>
            <DarkModeProvider>
                <GlobalStyles />
                <div></div>
            </DarkModeProvider>
        </>
    );
}

export default App;
