import React, {memo, PropsWithChildren} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface GradientProps {
  height?: number;
  style?: ViewStyle;
}

const BlackGradient = memo((props: PropsWithChildren<GradientProps>) => {
  const {height, style, ...attr} = props;
  return (
    <LinearGradient
      {...attr}
      colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
      start={{x: 0.5, y: 0.5}}
      end={{x: 0.5, y: 1}}
      style={{
        ...gradientStyle.container,
        height: height ? height : '100%',
        ...style,
      }}>
      {props.children}
    </LinearGradient>
  );
});
const DetailsGradient = memo((props: PropsWithChildren<GradientProps>) => {
  const {height, style, ...attr} = props;
  return (
    <LinearGradient
      {...attr}
      colors={['transparent', '#000000']}
      start={{x: 0.5, y: 0.65}}
      end={{x: 0.5, y: 0.95}}
      style={{
        ...gradientStyle.container,
        height: height ? height : '100%',
        ...style,
      }}>
      {props.children}
    </LinearGradient>
  );
});

const gradientStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default BlackGradient;
export {DetailsGradient};
