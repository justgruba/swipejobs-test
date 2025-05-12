import { useWindowDimensions } from 'react-native';

export const useIconSize = () => {
  const { width } = useWindowDimensions();
  return width < 768 ? 23 : 28; 
};