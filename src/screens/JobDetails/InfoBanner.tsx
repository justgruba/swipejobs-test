import { View, StyleSheet } from 'react-native';

import { Card, Text } from 'react-native-paper';

type InfoBannerType = {
  milesToTravel: number;
  wagePerHourInCents: number;
};

export const InfoBanner = ({ milesToTravel, wagePerHourInCents }: InfoBannerType) => {
  return (
    <Card.Content style={styles.container}>
      <View>
        <Text variant='titleSmall' style={styles.label}>Distance</Text>
        <Text variant='titleLarge' style={styles.value}>{milesToTravel.toFixed(2)} miles</Text>
      </View>
      <View>
        <Text variant='titleSmall'  style={styles.label}>Hourly Rate</Text>
        <View style={{flexDirection: 'row'}}>
            <Text variant='titleSmall'  style={[styles.label, {color:'white'}]}>$</Text>
            <Text variant='titleLarge' style={styles.value}>
            {(wagePerHourInCents / 100).toFixed(2)}
            </Text>
        </View>
      </View>
    </Card.Content>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#30d4ac',
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
  },
  value: {
    color: 'white',
    fontWeight: 'bold',
  },
});
