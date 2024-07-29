import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import Colors from '../../theme/color';

const HeaderRight = () => {
  return (
    <View
      style={{
        flex: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 5,
      }}>
      <Pressable>
        <SearchNormal size={27} color={Colors.BLACK} />
      </Pressable>
      <Text>sdad</Text>
      <Pressable>
        <FilterSearch size={27} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

export default HeaderRight;
