import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { renderHook, act } from '@testing-library/react-native';

import { fetchMatchedJobs } from '@/api/worker';

const exampleData = [{ jobId: '123', jobTitle: { name: 'Software Engineer' } }];

jest.mock('@/api/worker', () => ({
  fetchMatchedJobs: jest.fn(() =>
    Promise.resolve(exampleData),
  ),
}));

describe('useQuery - fetchMatchedJobs', () => {
  it('fetches and returns job data', async () => {
    const queryClient = new QueryClient();
    const userID = '7f90df6e-b832-44e2-b624-3143d428001f';

    const { result } = renderHook(
      () =>
        useQuery({ queryKey: ['matched-jobs', userID], queryFn: () => fetchMatchedJobs(userID) }),
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        ),
      },
    );

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.isSuccess).toBe(true);

    expect(fetchMatchedJobs).toHaveBeenCalledWith(userID);

    expect(result.current.data).toEqual(exampleData);
  });
});
