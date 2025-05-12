import React, { createContext, useState, ReactNode, useContext } from 'react';

import type { JobDetails } from '@/api/types';

const defaultJob: JobDetails = {
  jobId: '',
  jobTitle: {
    name: '',
    imageUrl: '',
  },
  company: {
    name: '',
    address: {
      formattedAddress: '',
      zoneId: '',
    },
    reportTo: {
      name: '',
      phone: '',
    },
  },
  wagePerHourInCents: 0,
  milesToTravel: 0,
  shifts: [],
  branch: '',
  branchPhoneNumber: '',
  requirements: [],
};

const JobDetailsContext = createContext<{
  job: JobDetails;
  setJob: (job: JobDetails) => void;
}>({
  job: defaultJob,
  setJob: () => {},
});

export const useJobDetailsContext = () => useContext(JobDetailsContext);

export const JobDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [job, setJob] = useState<JobDetails>(defaultJob);

  return (
    <JobDetailsContext.Provider value={{ job, setJob }}>{children}</JobDetailsContext.Provider>
  );
};
