import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Divider, Card, Modal, Text, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useJobDetailsContext } from '@/context/JobDetailsContext';

import { InfoBanner } from './InfoBanner';
import { JobActions } from './JobActions';
import { LocationSection } from './LocationSection';
import { ReportSection } from './ReportSection';
import { RequirementsSection } from './RequirementsSection';
import { ShiftsSection } from './ShiftsSection';

const JobDetailsScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const {
    job: { jobTitle, company },
  } = useJobDetailsContext();

  const showModal = (message: string) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalMessage('');
    navigation.navigate('HomeTabs', { screen: 'Home' });
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <Card mode="contained" style={styles.container}>
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
        <JobActions showModal={showModal} />
      </Card>
      <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>{modalMessage}</Text>
        <Button onPress={hideModal}>Close</Button>
      </Modal>
    </SafeAreaView>
  );
};
export default JobDetailsScreen;

const styles = StyleSheet.create({
  container: { margin: 15, borderRadius: 10, backgroundColor: 'white' },
  text: { fontWeight: 'bold' },
  image: { width: '100%', height: 120, borderRadius: 10 },
  modal: { backgroundColor: 'white', padding: 20, margin: 50, borderRadius: 10 }
});
