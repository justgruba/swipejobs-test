import { StyleSheet } from 'react-native';

import { Divider, Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useJobDetailsContext } from '@/context/JobDetailsContext';

import { InfoBanner } from './InfoBanner';
import { JobActions } from './JobActions';
import { LocationSection } from './LocationSection';
import { ReportSection } from './ReportSection';
import { RequirementsSection } from './RequirementsSection';
import { ShiftsSection } from './ShiftsSection';

const JobDetailsScreen = () => {
  const {
    job: { jobTitle, company },
  } = useJobDetailsContext();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <Card
        mode="contained"
        style={{ elevation: 0, margin: 15, borderRadius: 10, backgroundColor: 'white' }}
      >
        <Card.Cover source={{ uri: jobTitle.imageUrl }} style={styles.image} />
        <Card.Title
          title={jobTitle.name}
          titleVariant="titleLarge"
          titleStyle={styles.text}
          subtitle={company.name}
          subtitleVariant="titleMedium"
          subtitleStyle={styles.text}
        />
        <InfoBanner />
        <ShiftsSection />
        <Divider />
        <LocationSection />
        <Divider />
        <RequirementsSection />
        <Divider />
        <ReportSection />
        <Divider />
        <JobActions />
      </Card>
    </SafeAreaView>
  );
};
export default JobDetailsScreen;

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
  image: { width: '100%', height: 120, borderRadius: 10 },
});
