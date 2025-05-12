import { View, StyleSheet } from 'react-native';

import { Card, Icon, Text } from 'react-native-paper';

import { useJobDetailsContext } from '@/context/JobDetailsContext';
import { useIconSize } from '@/hooks/useIconSize';

export const RequirementsSection = () => {
  const  iconSize  = useIconSize();
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
      left={() => <Icon size={iconSize} source="tools" color="black" />}
    />
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
