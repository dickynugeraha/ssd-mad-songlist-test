import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  LayoutRectangle,
  Modal,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
  ViewStyle,
  findNodeHandle,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface PopoverProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  targetRef: React.RefObject<View>;
  style?: ViewStyle;
  position?: 'left' | 'right';
}

const Popover: React.FC<PopoverProps> = ({
  isVisible,
  onClose,
  children,
  targetRef,
  style,
  position = 'right',
}) => {
  const [popoverPosition, setPopoverPosition] =
    useState<LayoutRectangle | null>(null);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(10);
  const screen = Dimensions.get('window');

  useEffect(() => {
    if (isVisible && targetRef.current) {
      const handle = findNodeHandle(targetRef.current);
      if (handle) {
        UIManager.measureInWindow(handle, (pageX, pageY, width, height) => {
          let newX = pageX;
          let newY = pageY + height + 10;

          // Adjust the popover position based on the chosen position
          switch (position) {
            case 'left':
              newX = pageX - width - 40;
              newY = pageY + height + 10;
              break;
            case 'right':
            default:
              newY = pageY + height + 10;
              break;
          }

          // Adjust the popover position if it goes beyond the screen
          if (newX + width > screen.width) {
            newX = screen.width - width - 10; // add some margin
          }
          if (newY + height > screen.height) {
            newY = screen.height - height - 10; // add some margin
          }
          if (newX < 0) {
            newX = 10; // add some margin
          }
          if (newY < 0) {
            newY = 10; // add some margin
          }

          setPopoverPosition({
            x: newX,
            y: newY,
            width,
            height,
          });
        });
      }

      // Animate popover in
      opacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
      translateY.value = withTiming(0, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      // Animate popover out
      opacity.value = withTiming(0, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
      translateY.value = withTiming(10, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isVisible, targetRef, opacity, translateY, position]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={0.7}
        onPress={onClose}>
        {popoverPosition && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {}}
            style={[
              styles.container,
              {
                top: popoverPosition.y,
                left: popoverPosition.x,
              },
            ]}>
            <Animated.View style={[styles.popover, style, animatedStyle]}>
              {children}
            </Animated.View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  popover: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default Popover;
