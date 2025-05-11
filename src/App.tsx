import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './api/client';
import AppStack from './navigation/AppStack';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStack />
    </QueryClientProvider>
  );
}
