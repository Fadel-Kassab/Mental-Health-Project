import React, { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface CustomTextInputProps extends TextInputProps {
  containerClassName?: string
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  secureTextEntry,
  containerClassName,
  ...props
}) => {

  const [hidden, setHidden] = useState<boolean>(secureTextEntry || false);

  return (
    <View className={`px-2 w-full rounded-lg border-2 border-green-700 flex-row items-center ${containerClassName}`}>
      <TextInput className={`${secureTextEntry ? "w-11/12" : "w-full"}`} secureTextEntry={hidden} {...props} />
      {secureTextEntry && (
        <TouchableOpacity className="w-1/12 items-center justify-center" onPress={() => setHidden(!hidden)}>
          <Icon name={hidden ? "eye" : "eye-off"} size={22} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
