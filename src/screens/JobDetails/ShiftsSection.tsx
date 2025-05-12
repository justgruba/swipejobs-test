import { TouchableOpacity, StyleSheet } from 'react-native';

import { toZonedTime, format } from 'date-fns-tz';
import { Card, Icon, Text } from 'react-native-paper';

import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useIconSize } from '@/hooks/useIconSize';

function formatEvent(zoneId: string, startDate: string, endDate: string) {
  const start = toZonedTime(new Date(startDate), zoneId);
  const end = toZonedTime(new Date(endDate), zoneId);

  const formatStr = 'MMM d, EEE h:mm a';
  const startFormatted = format(start, formatStr, { timeZone: zoneId });
  const endFormatted = format(end, formatStr, { timeZone: zoneId });

  return `${startFormatted} - ${endFormatted} PDT`;
}

export const ShiftsSection = () => {
  const iconSize = useIconSize();
  const {
    job: { shifts, company },
  } = useJobDetailsContext();
  return (
    <Card.Title
      title="Shift Dates"
      titleStyle={styles.text}
      subtitle={
        <TouchableOpacity onPress={() => console.log('Open modal')}>
          {shifts.slice(0, 2).map((shift, index) => (
            <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8} key={index}>
              {formatEvent(company.address.zoneId, shift.startDate, shift.endDate)}
            </Text>
          ))}
          {shifts.length > 2 && (
            <Text variant="bodySmall" style={styles.showMore}>
              Show {shifts.length - 2} More
            </Text>
          )}
        </TouchableOpacity>
      }
      left={() => <Icon source="calendar-month" size={iconSize} color="black" />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
  showMore: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 2,
  },
});
