import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { selectActiveTheme } from "./shared/store/ducks/theme/selectors";
import { AdminPage, ContactsPage, HomePage, NewsPage, SingleNewsPage } from "./pages";
import { MainLayout } from "./shared/ui/templates";
import { GlobalStyle } from "./shared/ui/theme/global";

function App() {
    const activeTheme = useSelector(selectActiveTheme);

    return (
        <ThemeProvider theme={activeTheme}>
            <GlobalStyle />
            <Router>
                <div className="App">
                    <MainLayout>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/news" component={NewsPage} />
                        <Route path="/news/:id" component={SingleNewsPage} />
                        <Route path="/contacts" component={ContactsPage} />
                        <Route path="/admin" component={AdminPage} />
                    </MainLayout>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
