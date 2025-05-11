import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import { fetchMatchedJobs } from '../api/worker';
import { Card } from '../components/Card';

function HomeScreen() {
  const navigation = useNavigation();
  const { data } = useQuery({
    queryKey: ['matched-jobs'],
    queryFn: () => fetchMatchedJobs('7f90df6e-b832-44e2-b624-3143d428001f'),
  });

  return (
    <View style={{ flex: 1 }}>
      {data?.map((job) => (
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          key={job.jobId}
          onPress={() => navigation.navigate('JobDetails', { job })}
        >
          <Card
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
