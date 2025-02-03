import React, {memo, PropsWithChildren} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface GradientProps {
  height?: number;
  style?: ViewStyle;
}

const BlackGradient = memo((props:PropsWithChildren<GradientProps>) => {
  const {height, style, ...attr} = props;
  return (
    <LinearGradient
      {...attr}
      colors={['transparent', '#000000']}
      start={{x: 0.5, y: 0.7}}
      end={{x: 0.5, y: 0.9}}
      style={{
        ...gradientStyle.container,
        // height: height ? height : screenHeight * 0.065,
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
        // height: height ? height : screenHeight * 0.065,
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
    zIndex: 0,
    position: 'absolute',
    bottom: 0,
  },
});

export default BlackGradient;
export {DetailsGradient};
