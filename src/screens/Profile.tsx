

import { useQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import { fetchUserProfile } from '@/api/worker';
import { useUserContext } from '@/context/UserContext';
import { Card, Icon } from 'react-native-paper';

function ProfileScreen() {
  const { userId } = useUserContext();
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserProfile(userId),
  });


  return (
    <Card mode='contained' style={{ margin: 15 , borderRadius: 10, backgroundColor: 'white'}}>
      <Card.Title
  title="Full Name"
  titleStyle={styles.text}
  subtitle={`${data?.firstName} ${data?.lastName}`}
  left={() => <Icon size={23} source="account" />}
 />
        <Card.Title
          title="Last Name"
          titleStyle={styles.text}
          subtitle={data?.lastName}
          left={() => <Icon size={23} source="account-circle" />}
        />
       <Card.Title
  title="Email"
  titleStyle={styles.text}
  subtitle={data?.email}
  left={() => <Icon size={23} source="email" />}
/>

<Card.Title
  title="Address"
  titleStyle={styles.text}
  subtitle={data?.address?.formattedAddress}
  left={() => <Icon size={23} source="map-marker" />}
/>

<Card.Title
  title="Job Distance"
  titleStyle={styles.text}
  subtitle={data?.maxJobDistance}
  left={() => <Icon size={23} source="map-marker-distance" />} 
/>

<Card.Title
  title="Phone Number"
  titleStyle={styles.text}
  subtitle={data?.phoneNumber}
  left={() => <Icon size={23} source="phone" />} 
/>
    </Card>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  text: { fontWeight: 'bold' },
});
