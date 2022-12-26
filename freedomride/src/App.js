import { ErrorBoundaryModal } from './components/Modals';

import theme from './styles/Theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">hello</header>
        <ErrorBoundaryModal modalState={true} modalClose={() => {}} />
      </ThemeProvider>
    </div>
  );
}

export default App;
