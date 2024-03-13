import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native"

interface CustomButtonProps extends TouchableOpacityProps {
  label: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  ...props
}) => {

  const style = StyleSheet.create({
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      height: 40,
      borderRadius: 4,
      backgroundColor: "#5F6F52"
    },
    label: {
      textAlign: "center",
      color: "white",
      fontWeight: "700"
    }
  })

  return (
    <TouchableOpacity style={style.button} {...props}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export const CustomTextButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  const style = StyleSheet.create({
    text: {
      fontWeight: "700",
      color: "#5F6F52",
    }
  })
  return <TouchableOpacity {...props}>
    <Text style={style.text}>{label}</Text>
  </TouchableOpacity>

}

export default CustomButton