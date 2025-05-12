import { View, StyleSheet } from 'react-native';

import { Card, Icon, Text } from 'react-native-paper';


import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useIconSize } from '@/hooks/useIconSize';

export const LocationSection = () => {
  const  iconSize  = useIconSize();
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
      left={() => <Icon size={iconSize} source="map-marker" color="black" />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
