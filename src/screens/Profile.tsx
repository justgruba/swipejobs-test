import { View, Text } from 'react-native';

import { useQuery } from '@tanstack/react-query';

import { fetchUserProfile } from '../api/worker';
import { useUserContext } from '../context/UserContext';

function ProfileScreen() {
  const {userId} = useUserContext();
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserProfile(userId),
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default ProfileScreen;
