import React from 'react';
import Router from './routers/Routers.router';
import GlobalStyles from './styles/GlobalStyles.style';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router />
    </div>
  );
}

export default App;
