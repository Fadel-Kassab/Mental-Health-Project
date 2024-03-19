import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
  buttonStyle?: object;
  labelStyle?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  buttonStyle,
  labelStyle,
  ...props
}) => {
  const style = StyleSheet.create({
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '65%',
      height: 50,
      borderRadius: 8,
      backgroundColor: '#5F6F52',
      elevation: 5,
    },
    label: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '700',
    },
  });

  return (
    <TouchableOpacity style={{...style.button, ...buttonStyle}} {...props}>
      <Text style={{...style.label, ...labelStyle}}>{label}</Text>
    </TouchableOpacity>
  );
};

export const CustomTextButton: React.FC<CustomButtonProps> = ({
  label,
  ...props
}) => {
  const style = StyleSheet.create({
    text: {
      fontWeight: '700',
      color: '#5F6F52',
    },
  });
  return (
    <TouchableOpacity {...props}>
      <Text style={style.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
