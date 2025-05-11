import { Button, Card } from 'react-native-paper';

type JobActionsType = {
  handleReject(): void;
  handleAccept(): void;
};

export const JobActions = ({ handleReject, handleAccept }: JobActionsType) => {
  return (
    <Card.Actions style={{ justifyContent: 'space-between'}}>
      <Button
        mode="outlined"
        textColor="grey"
        buttonColor="white"
        style={{ borderRadius: 'none', minWidth: 60 }}
        onPress={handleReject}
      >
        No Thanks
      </Button>
      <Button
        mode="contained"
        buttonColor="black"
        style={{ borderRadius: 'none', minWidth: 60 }}
        onPress={handleAccept}
      >
        I'll Take it
      </Button>
    </Card.Actions>
  );
};
