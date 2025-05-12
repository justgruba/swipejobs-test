import { View, StyleSheet } from 'react-native';

import { Card, Icon, Text } from 'react-native-paper';

import { ICON_SIZE } from '@/consts';
import { useJobDetailsContext } from '@/context/JobDetailsContext';

export const RequirementsSection = () => {
  const {
    job: { requirements },
  } = useJobDetailsContext();
  return (
    <Card.Title
      title="Requirements"
      titleStyle={styles.text}
      subtitle={
        <View>
          {requirements ? (
            requirements.map((tool, index) => <Text key={index}>- {tool}</Text>)
          ) : (
            <Text style={{ fontStyle: 'italic', color: 'gray' }}>
              No specific skills or tools required
            </Text>
          )}
        </View>
      }
      left={() => <Icon size={ICON_SIZE} source="tools" color="black" />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
