import { useWindowDimensions } from 'react-native';

export const useIconSize = () => {
  const { width } = useWindowDimensions();
  
  if (width < 360) {
    return 23;
  } else if (width >= 360 && width < 768) {
    return 28;
  } else {
    return 32;
  }
};
