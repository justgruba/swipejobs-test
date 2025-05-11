import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './api/client';
import AppStack from './navigation/AppStack';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <AppStack />
      </QueryClientProvider>
    </UserProvider>
  );
}
