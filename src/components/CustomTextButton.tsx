import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native"

interface CustomTextButtonProps extends TouchableOpacityProps {
  label: string
}

const CustomTextButton: React.FC<CustomTextButtonProps> = ({
  label,
  ...props
}) => {

  return (
    <TouchableOpacity {...props}>
      <Text className="text-secondary font-bold">{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomTextButton
