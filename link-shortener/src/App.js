import { Grid } from '@material-ui/core';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <Grid 
      className="App" 
      container 
      direction='column' 
      justify='center' 
      alignItems='center'
    >
      <Search/>
    </Grid>
  );
}

export default App;
