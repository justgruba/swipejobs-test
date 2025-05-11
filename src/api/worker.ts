import { axios } from './axios';
import { JobListing } from './types';

export const fetchUserProfile = async (userId: string): Promise<any> => {
  const userProfile = await axios.get<any>(`worker/${userId}/profile`);
  return userProfile.data;
};

export const fetchMatchedJobs = async (userId: string): Promise<JobListing[]> => {
  const matchedJobs = await axios.get<JobListing[]>(`worker/${userId}/matches`);
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
