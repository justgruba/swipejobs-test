import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { queryClient } from '@/api/client';
import { UserProvider } from '@/context/UserContext';
import AppStack from '@/navigation/AppStack';

import { JobDetailsProvider } from './context/JobDetailsContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <JobDetailsProvider>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <AppStack />
          </QueryClientProvider>
        </UserProvider>
      </JobDetailsProvider>
    </SafeAreaProvider>
  );
}
