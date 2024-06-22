import React, {useEffect, useRef, useState} from 'react';
import {Animated, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Skeleton: React.FC<{height: any; width: any; borderRadius?: number}> = ({
  height,
  width,
  borderRadius,
}) => {
  const [viewWidth, setViewWidth] = useState<number>(-1);
  const skeletonAnimatedValue = useRef(new Animated.Value(0)).current;

  const gradientColorsLight = ['grey', 'white', 'grey'];

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(skeletonAnimatedValue, {
        useNativeDriver: false,
        delay: 1200,
        duration: 750,
        toValue: 1,
      }),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [skeletonAnimatedValue]);

  const onLayoutChange = (event: LayoutChangeEvent) => {
    setViewWidth(event.nativeEvent.layout.width);
  };

  const left = skeletonAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewWidth, viewWidth],
  });

  return (
    <View style={{width, height}}>
      <View
        style={[styles.container, {backgroundColor: 'grey', borderRadius}]}
        onLayout={onLayoutChange}>
        {viewWidth > 0 && (
          <Animated.View style={[styles.animatedView, {left}]}>
            <LinearGradient
              colors={gradientColorsLight}
              start={{x: 0.3, y: 0.2}}
              end={{x: 0.8, y: 0.5}}
              style={styles.gradient}
            />
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  animatedView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  },
  gradient: {
    flex: 1,
  },
});

export default Skeleton;
