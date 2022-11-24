import Header from './components/header/Header';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import AppContainer from './components/appContainer/AppContainer';
import { RegionProvider } from './context/RegionContext';
import { QueryProvider } from './context/QueryContext';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <RegionProvider>
          <AppContainer>
            <Header />
            <RouterProvider router={router} />
          </AppContainer>
        </RegionProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
