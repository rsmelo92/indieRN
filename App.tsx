import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

import React from 'react';
import {Home} from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
