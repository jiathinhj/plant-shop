import { CssBaseline } from '@mui/material';
import './App.css';
import Router from './Router';
import ToggleColorMode from './Theme/ToggleColorMode';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ToggleColorMode>
        <Router />
      </ToggleColorMode>
    </div>
  );
}

export default App;
