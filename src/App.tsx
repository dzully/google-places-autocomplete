import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';
import {
  BrowserRouter,
  Routes,
  Route,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router-dom';
import store from './epics/store';
import Home from './page/Home';
import { BrowserTracing } from '@sentry/tracing';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0E86D4',
      main: '#055C9D',
      dark: '#003060'
    }
  }
});

Sentry.init({
  dsn: 'https://e1e3c70114e04f84971a0e4448ab2d0d@o1106769.ingest.sentry.io/4504535595745280',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      )
    })
  ],
  tracesSampleRate: 1.0
});

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

const App = () => {
  return (
    <div
      data-testid="app"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter basename="/">
            <SentryRoutes>
              <Route index element={<Home />} />
            </SentryRoutes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
};

const AppView = Sentry.withErrorBoundary(App, {
  fallback: <p>an error has occurred</p>
});

export default AppView;
