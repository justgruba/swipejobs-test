import { View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import { fetchMatchedJobs } from '../api/worker';
import { JobCard } from '../components/JobCard';
import { useUserContext } from '../context/UserContext';

function HomeScreen() {
  const {userId} = useUserContext();
  const navigation = useNavigation();
  const { data } = useQuery({
    queryKey: ['matched-jobs'],
    queryFn: () => fetchMatchedJobs(userId),
  });

  return (
    <View style={{ flex: 1 }}>
      {data?.map((job) => (
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          key={job.jobId}
          onPress={() => navigation.navigate('JobDetails', { job })}
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
