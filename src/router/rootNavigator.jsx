import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CHARACTERDETAIL,
  FILTERCHARACTERS,
  TABNAVIGATOR,
  SEARCHCHARACTERS,
} from '../utils/route';
import TabNavigator from './tabRouter';
import CharacterDetails from '../screens/characters/characterDetails';
import FilterCharcters from '../screens/characters/filterCharcters';
import SearchCharcters from '../screens/characters/searchCharcters';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetails} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharcters} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharcters} />
    </Stack.Navigator>
  );
}
export default RootNavigator;
