import { axios } from "./axios";

export const fetchUserProfile = async (userId: string): Promise<any> => {
    const userProfile = await axios.get<any>(`worker/${userId}/profile`);
    return userProfile.data;
};
  
export const fetchMatchedJobs = async (userId: string): Promise<any> => {
    const matchedJobs = await axios.get<any>(`worker/${userId}/matches`);
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
  