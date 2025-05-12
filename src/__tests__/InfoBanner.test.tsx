import React from 'react';

import { render } from '@testing-library/react-native';

import { InfoBanner } from '../screens/JobDetails/InfoBanner';

jest.mock('@/context/JobDetailsContext', () => ({
  useJobDetailsContext: () => ({
    job: {
      milesToTravel: 5.25555,
      wagePerHourInCents: 1500,
    },
  }),
}));

describe('<InfoBanner />', () => {
  it('render info banner', () => {
    const { getByText } = render(<InfoBanner />);

    getByText('Distance');
    getByText('5.26 miles');
    getByText('Hourly Rate');
    getByText('15.00');
  });
});
