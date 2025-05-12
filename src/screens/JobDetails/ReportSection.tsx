import { StyleSheet } from 'react-native';

import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { Card, Icon } from 'react-native-paper';

import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useIconSize } from '@/hooks/useIconSize';

export const ReportSection = () => {
  const iconSize = useIconSize();
  const {
    job: { branch, branchPhoneNumber },
  } = useJobDetailsContext();

  const phoneNumber = branchPhoneNumber
    ? parsePhoneNumberFromString(branchPhoneNumber, 'US')
    : null;

  return (
    <Card.Title
      title="Report To"
      titleStyle={styles.text}
      subtitle={`${branch}  ${phoneNumber?.formatNational() ?? ''}`}
      left={() => <Icon size={iconSize} source="account-circle" />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
