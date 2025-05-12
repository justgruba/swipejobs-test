import { StyleSheet } from 'react-native';

import { ActivityIndicator, Card, Icon, Text } from 'react-native-paper';

import { ErrorState } from '@/components/ErrorState';
import { useIconSize } from '@/hooks/useIconSize';
import { useUserProfile } from '@/hooks/useUserProfile';

function ProfileScreen() {
  const iconSize = useIconSize();
  const { isLoading, data, error, refetch } = useUserProfile();

  if (isLoading) {
    return <ActivityIndicator style={styles.loader} />;
  }

  if (error) {
    return <ErrorState onRetry={refetch} message={error?.message} />;
  }

  return (
    <Card mode="contained" style={styles.container}>
      <Card.Title
        title="Full Name"
        titleStyle={styles.text}
        subtitle={`${data?.firstName} ${data?.lastName}`}
        left={() => <Icon size={iconSize} source="account" />}
      />
      <Card.Title
        title="Email"
        titleStyle={styles.text}
        subtitle={data?.email}
        left={() => <Icon size={iconSize} source="email" />}
      />

      <Card.Title
        title="Address"
        titleStyle={styles.text}
        subtitle={<Text>{data?.address?.formattedAddress}</Text>}
        left={() => <Icon size={iconSize} source="map-marker" />}
      />

      <Card.Title
        title="Job Distance"
        titleStyle={styles.text}
        subtitle={data?.maxJobDistance}
        left={() => <Icon size={iconSize} source="map-marker-distance" />}
      />

      <Card.Title
        title="Phone Number"
        titleStyle={styles.text}
        subtitle={data?.phoneNumber}
        left={() => <Icon size={iconSize} source="phone" />}
      />
    </Card>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
  loader: {
    marginTop: 50,
  },
  container: { margin: 15, borderRadius: 10, backgroundColor: 'white' },
});
