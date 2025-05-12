import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';

import { JobActions } from '../screens/JobDetails/JobActions';

jest.mock('@/context/UserContext', () => ({
  useUserContext: () => ({
    userId: 'user-123',
  }),
}));

jest.mock('@/context/JobDetailsContext', () => ({
  useJobDetailsContext: () => ({
    job: {
      jobId: 'job-456',
    },
  }),
}));

jest.mock('@/api/worker', () => ({
  fetchAcceptJob: jest.fn(() => Promise.resolve({ message: 'Accepted!' })),
  fetchRejectJob: jest.fn(() => Promise.resolve({ message: 'Rejected!' })),
}));

describe('<JobActions />', () => {
  it('renders both buttons', () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <JobActions showModal={jest.fn()} />
      </QueryClientProvider>,
    );

    getByText('No Thanks');
    getByText("I'll Take it");
  });
});
