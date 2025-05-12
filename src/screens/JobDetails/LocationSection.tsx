import { View, StyleSheet } from 'react-native';

import { Card, Icon, Text } from 'react-native-paper';

import RightArrowIcon from '@/assets/right-arrow.svg';
import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useIconSize } from '@/hooks/useIconSize';

export const LocationSection = () => {
  const iconSize = useIconSize();
  const {
    job: { company, milesToTravel },
  } = useJobDetailsContext();

  return (
    <Card.Title
      title="Location"
      titleStyle={styles.text}
      subtitle={
        <View>
          <Text variant="bodyMedium" numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
            {company.address.formattedAddress}
          </Text>
          <Text
            variant="bodySmall"
            numberOfLines={1}
            adjustsFontSizeToFit
          >{`${milesToTravel.toFixed(2)} miles from your job search location`}</Text>
        </View>
      }
      left={() => <Icon size={iconSize} source="map-marker" color="black" />}
      right={() => <RightArrowIcon width={iconSize} height={iconSize} />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
