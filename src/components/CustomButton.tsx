import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator
} from "react-native"
import colors from "../../resources/colors/tailwindExport";

interface CustomButtonProps extends TouchableOpacityProps {
  label: string
  isLoading?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  isLoading,
  ...props
}) => {

  return (
    <TouchableOpacity
      className="bg-secondary flex justify-center items-center w-full h-11 rounded-lg"
      {...props}
    >
      {isLoading ?
        <ActivityIndicator color={colors.white}/>
        :
        <Text className="text-center font-bold text-white">{label}</Text>
      }
    </TouchableOpacity>
  )
}

export default CustomButton
