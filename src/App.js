import React from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div>
      <CssBaseline/>
      <Typography style={{ marginTop: '60px' }} variant="h3" align='center' color="textPrimary">
         
         URL Shortener
      </Typography>
      <Grid style={{ marginTop: '50px' }} className="App" container direction='column' alignItems='center'>
        <Search/>
      </Grid>
    </div>
  );
}

export default App;
