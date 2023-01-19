import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './epics/store';
import Home from './page/Home';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0E86D4',
      main: '#055C9D',
      dark: '#003060'
    }
  }
});

const App = () => {
  return (
    <div
      data-testid="app"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter basename="/">
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
