import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator } from 'react-native-paper';

import { fetchMatchedJobs } from '@/api/worker';
import { ErrorState } from '@/components/ErrorState';
import { JobCard } from '@/components/JobCard';
import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useUserContext } from '@/context/UserContext';

function HomeScreen() {
  const { userId } = useUserContext();
  const navigation = useNavigation();
  const { setJob } = useJobDetailsContext();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['matched-jobs'],
    queryFn: () => fetchMatchedJobs(userId),
  });

  if (isLoading) {
    return <ActivityIndicator style={styles.loader} />;
  }

  if (error) {
    return <ErrorState onRetry={refetch} message={error?.message} />;
  }

  return (
    <View style={{ flex: 1 }}>
      {data?.map((job) => (
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          key={job.jobId}
          onPress={() => {
            setJob(job);
            navigation.navigate('JobDetails');
          }}
        >
          <JobCard
            jobName={job.jobTitle.name}
            image={job.jobTitle.imageUrl}
            companyName={job.company.name}
            address={job.company.address.formattedAddress}
            wagePerHour={job.wagePerHourInCents}
            milesToTravel={job.milesToTravel}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  loader: {
    marginTop: 50,
  },
});
