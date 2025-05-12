import { StyleSheet } from 'react-native';

import { Card, Icon } from 'react-native-paper';
import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useIconSize } from '@/hooks/useIconSize';

export const ReportSection = () => {
  const  iconSize  = useIconSize();
  const {
    job: { branch, branchPhoneNumber },
  } = useJobDetailsContext();

  return (
    <Card.Title
      title="Report To"
      titleStyle={styles.text}
      subtitle={`${branch} ${branchPhoneNumber}`}
      left={() => <Icon size={iconSize} source="account-circle" />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
