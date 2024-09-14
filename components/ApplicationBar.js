
import { getHeaderTitle } from '@react-navigation/elements';
import { Appbar } from 'react-native-paper';

export default function ApplicationBar({ navigation, route, options, back }) {

    const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header>
        
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={"MD Nav Demo"} />
      {!back ? (
        <Appbar.Action
          icon="arrow-right" // The icon you want to use for navigation
          onPress={() => navigation.navigate('SecondScreen')}
        />
      ) : null}
    </Appbar.Header>
  );
}

