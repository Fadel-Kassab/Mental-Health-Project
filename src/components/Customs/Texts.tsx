import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export function LightText({
  children,
  textStyle,
  ...props
}: {
  children: string;
  textStyle?: Object;
}) {
  return (
    <Text {...props} style={{...style.light_text, ...textStyle}}>
      {children}
    </Text>
  );
}

export function BoldText({
  children,
  textStyle,
  ...props
}: {
  children: string;
  textStyle?: Object;
}) {
  return (
    <Text {...props} style={{...style.bold_text, ...textStyle}}>
      {children}
    </Text>
  );
}

export function ErrorText({
  children,
  textStyle,
  ...props
}: {
  children: string;
  textStyle?: Object;
}) {
  return (
    <Text {...props} style={{...style.error_text, ...textStyle}}>
      {children}
    </Text>
  );
}

const style = StyleSheet.create({
  light_text: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  bold_text: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 10,
    color: '#28282B',
  },
  error_text: {
    fontSize: 12,
    color: 'red',
    marginTop: 3,
    marginBottom: 10,
    letterSpacing: 0.5,
    fontStyle: 'italic',
    marginLeft: 5,
  },
});
