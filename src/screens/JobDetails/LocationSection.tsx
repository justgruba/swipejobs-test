import { View, StyleSheet } from 'react-native';

import { Card, Icon, Text } from 'react-native-paper';

import { ICON_SIZE } from '@/consts';
import { useJobDetailsContext } from '@/context/JobDetailsContext';

export const LocationSection = () => {
  const {
    job: { company, milesToTravel },
  } = useJobDetailsContext();
  return (
    <Card.Title
      title="Location"
      titleStyle={styles.text}
      subtitle={
        <View>
          <Text>{company.address.formattedAddress}</Text>
          <Text variant="labelSmall">{`${milesToTravel.toFixed(2)} miles from your job search location`}</Text>
        </View>
      }
      left={() => <Icon size={ICON_SIZE} source="map-marker" color="black" />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
