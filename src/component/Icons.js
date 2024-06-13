import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

export const Ionicon = ({size, color, name, onPress}) => (
  <Icons
    name={name}
    size={size ? size : 23}
    color={color ? color : 'black'}
    onPress={onPress}
  />
);
