import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './api/client';
import { UserProvider } from './context/UserContext';
import AppStack from './navigation/AppStack';

export default function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <AppStack />
      </QueryClientProvider>
    </UserProvider>
  );
}
