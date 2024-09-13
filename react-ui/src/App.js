import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import DefaultButton from "./components/buttons/default-button";
import Card from "./components/cards/default-card";
import CodeBox from "./components/codebox/CodeBox";
import InputSpeechField from "./components/inputfield/input-speech-field";
import NavBar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import baseTheme from "./styles/base-theme";
import darkTheme from "./styles/dark-theme";
import { GlobalStyles } from "./styles/global-styles";
import {default as BaseContainer} from "./components/container/container";
import AdvancedInputField from "./components/inputfield/AdvancedInput";
// import {BaseContainer} from 'react-simple-components';

const codeText = `
const baseTheme = {
  // Color Palette
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#6c757d',
    gray700: '#495057',
    gray800: '#343a40',
    gray900: '#212529',
  },
};
`;

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(
    theme === "light" ? baseTheme : darkTheme
  );
  const [visibleSidebars, setVisibleSidebars] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const toggleSidebar = (position) => {
    setVisibleSidebars((prev) => ({ ...prev, [position]: !prev[position] }));
  };

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme();
    setCurrentTheme(newTheme === "light" ? baseTheme : darkTheme);
  };

  const handleDocsClick = () => {
    // Handle docs button click
  };

  const handleFeedbackClick = () => {
    // Handle feedback button click
  };

  const handleUserClick = () => {
    // Handle user button click
  };

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <div>
        <NavBar
          title="ANTHROP\\C"
          onDocsClick={handleDocsClick}
          onFeedbackClick={handleFeedbackClick}
          onUserClick={handleUserClick}
        />
      </div>
      <BaseContainer
        sx={{ backgroundColor: currentTheme.colors.background }}
        rounding="none"
      >
        <BaseContainer>
          <h1>Components Showcase</h1>

          <section>
            <h2>Buttons</h2>
            <DefaultButton onClick={switchTheme} size="small" margin="sm">
              Toggle {theme === "light" ? "Dark" : "Light"} Theme
            </DefaultButton>
            <DefaultButton 
            onClick={ () => console.log('secondary Button Clicked') }
            color="secondary" size="small">
              Secondary Button
            </DefaultButton>
          </section>

          <section>
            <h2>Input Field with Speech Recognition</h2>
            <InputSpeechField />
          </section>
          <section>
            <h2>Advanced Input Field with Speech Recognition</h2>
            <AdvancedInputField  />
          </section>
          <section>
            <h2>Cards in Grid Format</h2>
            <BaseContainer elevation="none" layout="grid">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Card key={num}>
                  <h3>Card {num}</h3>
                  <p>This is a sample card in grid format.</p>
                </Card>
              ))}
            </BaseContainer>
          </section>
          <section>
            <h2>Cards in Horizontal List</h2>
            <BaseContainer elevation="none" layout="column">
              {[1, 2, 3, 4, 5].map((num) => (
                <Card key={num} sx={{ minWidth: "200px" }}>
                  <h3>Card {num}</h3>
                  <p>This is a sample card in a horizontal list.</p>
                </Card>
              ))}
            </BaseContainer>
          </section>

          <section>
            <h2>Clickable Icons for Sidebars</h2>
            <BaseContainer sx={{ display: "flex", justifyContent: "space-around" }}>
              {["left", "right", "top", "bottom"].map((position) => (
                <DefaultButton
                  key={position}
                  onClick={() => toggleSidebar(position)}
                  size="small"
                >
                  Toggle {position} sidebar
                </DefaultButton>
              ))}
            </BaseContainer>
          </section>

          <section>
            <h2>Code Box</h2>
            <CodeBox text={codeText} lang="javascript" />
          </section>
        </BaseContainer>
        <BaseContainer>
        {Object.entries(visibleSidebars).map(
          ([position, isVisible]) =>
            isVisible && (
              <Sidebar
                rounding="sm"
                position={position}
                width={
                  position === "left" || position === "right" ? "250px" : "auto"
                }
                height={
                  position === "top" || position === "bottom" ? "200px" : "auto"
                }
                onClose={() => toggleSidebar(position)}
                isOpen={isVisible}
              >
                <h3>
                  {position.charAt(0).toUpperCase() + position.slice(1)} Sidebar
                </h3>
                <p>This is a sample sidebar content.</p>
                <DefaultButton
                  onClick={() => toggleSidebar(position)}
                  size="small"
                >
                  Close Sidebar
                </DefaultButton>
              </Sidebar>
            )
        )}
        </BaseContainer>

      </BaseContainer>
    </StyledThemeProvider>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
