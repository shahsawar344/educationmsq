import {TouchableOpacity, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

export const CustomButton = ({
  text,
  onPress,
  style,
  styleText,
  bgColor,
  IconName,
  disabled,
  color,
  IconNameLock,
}) => (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor ? bgColor : 'gray',
          paddingVertical: responsiveHeight(1),
          borderRadius: responsiveWidth(2),
          marginVertical: 4,
        },
        style,
      ]}>
      <Text style={[{color: 'white'}, styleText]}>{text}</Text>
      {IconNameLock && (
        <Icon
          style={{marginLeft: responsiveWidth(3)}}
          name={IconName ? IconName : 'lock-closed'}
          size={23}
          color={color ? color : 'yellow'}
        />
      )}
    </TouchableOpacity>
);
