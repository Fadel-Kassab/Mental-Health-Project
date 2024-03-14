import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

const CustomTextInput: React.FC<TextInputProps> = ({
  secureTextEntry,
  ...props
}) => {
  const style = StyleSheet.create({
    container: {
      width: '80%',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      height: 45,
      padding: 2,
      marginLeft: 10,
      width: secureTextEntry ? '87%' : '100%',
    },
    Icon: {
      marginRight: 20,
    },
  });

  const [hidden, setHidden] = useState<boolean>(secureTextEntry || false);

  return (
    <View style={style.container}>
      <TextInput style={style.input} secureTextEntry={hidden} {...props} />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setHidden(!hidden)}>
          {/* <Icon style={style.Icon} name={hidden ? "eye" : "eye-off"} size={20} /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
