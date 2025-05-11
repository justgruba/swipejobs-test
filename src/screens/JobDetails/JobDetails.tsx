import { View, StyleSheet } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { format, toZonedTime } from 'date-fns-tz';
import { Text, Button, Divider, Card, Icon } from 'react-native-paper';

import { fetchAcceptJob, fetchRejectJob } from '@/api/worker';
import { useUserContext } from '@/context/UserContext';
import { RootStackParamList } from '@/navigation/AppStack';

import { InfoBanner } from './InfoBanner';
import { JobActions } from './JobActions';
import { SafeAreaView } from 'react-native-safe-area-context';

function formatEvent(zoneId: string, startDate: string, endDate: string) {
  const start = toZonedTime(new Date(startDate), zoneId);
  const end = toZonedTime(new Date(endDate), zoneId);

  const formatStr = 'MMM d, EEE h:mm a';
  const startFormatted = format(start, formatStr, { timeZone: zoneId });
  const endFormatted = format(end, formatStr, { timeZone: zoneId });

  return `${startFormatted} - ${endFormatted} PDT`;
}

const ICON_SIZE = 23;

const JobDetailsScreen = () => {
  const navigation = useNavigation();
  const { userId } = useUserContext();
  const route = useRoute<RouteProp<RootStackParamList, 'JobDetails'>>();
  const {
    job: {
      jobId,
      jobTitle,
      company,
      milesToTravel,
      wagePerHourInCents,
      shifts,
      requirements,
      branch,
      branchPhoneNumber,
    },
  } = route.params;

  const { data: acceptJob, mutate: mutateAccept } = useMutation({
    mutationFn: () => fetchAcceptJob(userId, jobId),
  });

  const { data: rejectJob, mutate: mutateReject } = useMutation({
    mutationFn: () => fetchRejectJob(userId, jobId),
  });

  const handleReject = () => {
    mutateReject();
    navigation.navigate('HomeTabs', { screen: 'Home' });
  };

  const handleAccept = () => {
    mutateAccept();
    navigation.navigate('HomeTabs', { screen: 'Home' });
  };

  return (
    <SafeAreaView style={{flex: 1}} edges={['left', 'right']}>
      <Card mode='contained' style={{elevation:0,  margin: 15 , borderRadius: 10, backgroundColor: 'white'}}>
        <Card.Cover source={{ uri: jobTitle.imageUrl }} style={styles.image} />
        <Card.Title
          title={jobTitle.name}
          titleVariant="titleLarge"
          titleStyle={styles.text}
          subtitle={company.name}
          subtitleVariant="titleMedium"
          subtitleStyle={styles.text}
        />
        <InfoBanner milesToTravel={milesToTravel} wagePerHourInCents={wagePerHourInCents} />
        <Card.Title
          title="Shift Dates"
          titleStyle={styles.text}
          subtitle={
            <View>
              {shifts.map((shift, index) => (
                <Text key={index} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
                  {formatEvent(company.address.zoneId, shift.startDate, shift.endDate)}
                </Text>
              ))}
            </View>
          }
          left={() => <Icon source="calendar-month" size={ICON_SIZE} color="black" />}
        />
        <Divider />
        <Card.Title
          title="Location"
          titleStyle={styles.text}
          subtitle={
            <View>
              <Text>{company.address.formattedAddress}</Text>
              <Text>{`${milesToTravel.toFixed(2)} miles from your job search location`}</Text>
            </View>
          }
          left={() => <Icon size={ICON_SIZE} source="map-marker" color="black" />}
        />
        <Divider />
        <Card.Title
          title="Requirements"
          titleStyle={styles.text}
          subtitle={
            <View>
              {requirements ? (
                requirements.map((tool, index) => <Text key={index}>- {tool}</Text>)
              ) : (
                <Text style={{ fontStyle: 'italic', color: 'gray' }}>
                  No specific skills or tools required
                </Text>
              )}
            </View>
          }
          left={() => <Icon size={ICON_SIZE} source="tools" color="black" />}
        />
        <Divider />
        <Card.Title
          title="Report To"
          titleStyle={styles.text}
          subtitle={`${branch} ${branchPhoneNumber}`}
          left={() => <Icon size={ICON_SIZE} source="account-circle" />}
        />
        <JobActions handleReject={handleReject} handleAccept={handleAccept} />
      </Card>
    </SafeAreaView>
  );
};
export default JobDetailsScreen;

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
  image: { width: '100%', height: 120, borderRadius: 10 },
});
