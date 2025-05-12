import { StyleSheet } from 'react-native';

import { Card, Icon } from 'react-native-paper';

import { ICON_SIZE } from '@/consts';
import { useJobDetailsContext } from '@/context/JobDetailsContext';

export const ReportSection = () => {
  const {
    job: { branch, branchPhoneNumber },
  } = useJobDetailsContext();

  return (
    <Card.Title
      title="Report To"
      titleStyle={styles.text}
      subtitle={`${branch} ${branchPhoneNumber}`}
      left={() => <Icon size={ICON_SIZE} source="account-circle" />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
