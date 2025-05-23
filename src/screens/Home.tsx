import { useCallback } from 'react';
import { TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, Text } from 'react-native-paper';

import type { JobDetails } from '@/api/types';
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
    queryKey: ['matched-jobs', userId],
    queryFn: () => fetchMatchedJobs(userId),
  });

  const handlePress = useCallback(
    (job: JobDetails) => {
      setJob(job);
      navigation.navigate('JobDetails');
    },
    [setJob, navigation],
  );

  if (isLoading) {
    return <ActivityIndicator style={styles.loader} />;
  }

  if (error) {
    return <ErrorState onRetry={refetch} message={error?.message} />;
  }

  return (
    <FlatList
      data={data ?? []}
      keyExtractor={(item: JobDetails) => item.jobId.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => handlePress(item)}>
          <JobCard
            jobName={item.jobTitle.name}
            image={item.jobTitle.imageUrl}
            companyName={item.company.name}
            address={item.company.address.formattedAddress}
            wagePerHour={item.wagePerHourInCents}
            milesToTravel={item.milesToTravel}
          />
        </TouchableOpacity>
      )}
      ListEmptyComponent={<Text>List is empty</Text>}
      onRefresh={refetch}
      refreshing={isLoading}
    />
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  loader: {
    marginTop: 50,
  },
});
