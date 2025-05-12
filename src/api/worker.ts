import { axios } from './axios';
import type { JobDetails, Worker } from './types';

export const fetchUserProfile = async (userId: string): Promise<Worker> => {
  const userProfile = await axios.get<Worker>(`worker/${userId}/profile`);
  return userProfile.data;
};

export const fetchMatchedJobs = async (userId: string): Promise<JobDetails[]> => {
  const matchedJobs = await axios.get<JobDetails[]>(`worker/${userId}/matches`);
  return matchedJobs.data;
};

export const fetchAcceptJob = async (userId: string, jobId: string): Promise<any> => {
  const acceptedJob = await axios.get<any>(`worker/${userId}/job/${jobId}/accept`);
  return acceptedJob.data;
};

export const fetchRejectJob = async (userId: string, jobId: string): Promise<any> => {
  const rejectedJob = await axios.get<any>(`worker/${userId}/job/${jobId}/reject`);
  return rejectedJob.data;
};
