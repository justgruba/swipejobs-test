import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../navigation/AppStack';

export type JobListing = {
  jobId: string;
  jobTitle: {
    name: string;
    imageUrl: string;
  };
  company: {
    name: string;
    address: {
      formattedAddress: string;
      zoneId: string;
    };
    reportTo: {
      name: string;
      phone?: string;
    };
  };
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: {
    startDate: string; // ISO string
    endDate: string;
  }[];
  branch: string;
  branchPhoneNumber: string;
  requirements?: string[];
};
