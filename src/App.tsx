import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
//import Router from './router/Router';
import SearchStudyRoom from './pages/SearchStudyRoom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchStudyRoom />
        {/* <Search /> */}
        {/* <Router /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
