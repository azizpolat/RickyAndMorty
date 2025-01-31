import {Text} from 'react-native';
import genderTypes from '../../utils/constants';
import {Command, Man, Woman} from 'iconsax-react-native';
import Colors from '../../theme/color';
const GenderIcon = (gender, size) => {
  if (gender == genderTypes.MALE) {
    return <Man size={size} color={Colors.BLACK} />;
  }
  if (gender == genderTypes.FEMALE) {
    return <Woman size={size} color={Colors.BLACK} />;
  }
  if (gender == genderTypes.UNKNOWN) {
    return <Command size={size} color={Colors.BLACK} />;
  }
};

export default GenderIcon;
