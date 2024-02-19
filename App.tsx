import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {Router} from './src/router';

const queryClient = new QueryClient();

const AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#191a23',
  },
};

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={AppTheme}>
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
