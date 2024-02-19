import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient();

import React from 'react';
import {Router} from './src/router';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
