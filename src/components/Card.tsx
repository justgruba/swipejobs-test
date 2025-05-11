import { StyleSheet, View, Text } from 'react-native';

import { Image } from 'expo-image';

type CardType = {
  jobName: string;
  image: string;
  companyName: string;
  address: string;
  wagePerHour: number;
  milesToTravel: number;
};

export const Card = ({
  jobName,
  image,
  companyName,
  address,
  wagePerHour,
  milesToTravel,
}: CardType) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8} style={styles.jobName}>
          {jobName}
        </Text>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.wage}>£{wagePerHour}</Text>
          <Text style={styles.distance}>{milesToTravel} mi</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    minHeight: 150,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    marginLeft: 12,
    flex: 1,
  },
  jobName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  companyName: {
    fontSize: 16,
    color: '#444',
    marginTop: 4,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  wage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  distance: {
    fontSize: 14,
    color: '#3498db',
  },
});
