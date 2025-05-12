import React from 'react';

import { render } from '@testing-library/react-native';

import { RequirementsSection } from '../screens/JobDetails/RequirementsSection';

jest.mock('@/context/JobDetailsContext', () => ({
  useJobDetailsContext: jest.fn(),
}));

jest.mock('@/hooks/useIconSize', () => ({
  useIconSize: () => 24,
}));

describe('<RequirementsSection />', () => {
  it('renders the "No specific skills or tools required" message when no requirements are provided', async () => {
    require('@/context/JobDetailsContext').useJobDetailsContext.mockReturnValue({
      job: { requirements: null },
    });

    const { findByText } = render(<RequirementsSection />);

    const message = await findByText('No specific skills or tools required');
    expect(message).toBeTruthy();
  });

  it('renders the title and list of requirements when requirements are provided', async () => {
    require('@/context/JobDetailsContext').useJobDetailsContext.mockReturnValue({
      job: {
        requirements: ['Tool 1', 'Tool 2'],
      },
    });

    const { findByText } = render(<RequirementsSection />);

    const title = await findByText('Requirements');
    expect(title).toBeTruthy();

    expect(await findByText('- Tool 1')).toBeTruthy();
    expect(await findByText('- Tool 2')).toBeTruthy();
  });
});
