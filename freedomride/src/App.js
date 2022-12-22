// import PrimaryButton from './components/Buttons/PrimaryButton';
// import SecondaryButton from './components/Buttons/SecondaryButton';
import theme from './styles/Theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          {/* <PrimaryButton
            disabled={false}
            loading={false}
            submit={() => {}}
            icon
            iconRight
            text={'hello'}
            width={100}
          />
          <SecondaryButton
            disabled={false}
            loading={false}
            submit={() => {}}
            icon
            iconRight
            text={'hello'}
          /> */}
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
