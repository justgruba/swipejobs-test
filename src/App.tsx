import React from 'react';
import AppStack from './navigation/AppStack';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/client';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStack/>
    </QueryClientProvider>
  );
}
