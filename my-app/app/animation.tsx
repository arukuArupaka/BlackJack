import { useEffect } from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface CuntInAnimationProps {
  message: string;
  isVisible: boolean;
  onAnimationEnd: () => void;
}

const CutInAnimation: React.FC<CuntInAnimationProps> = ({
  message,
  isVisible,
  onAnimationEnd,
}) => {
  const translateX = useSharedValue(width);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    if (isVisible) {
      translateX.value = withTiming(0, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      });
      const timeout = setTimeout(() => {
        translateX.value = withTiming(-width, {
          duration: 100,
          easing: Easing.inOut(Easing.ease),
        });
        setTimeout(onAnimationEnd, 1000);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, translateX, onAnimationEnd]);
  if (!isVisible) return null;

  return (
    <Animated.View style={[styles.cutInBox, animatedStyle]}>
      <Text style={[styles.text]}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cutInBox: {
    backgroundColor: "#000",
    borderColor: "#ffd700",
    borderWidth: 2,
    padding: 20,
    borderRadius: 15,
    position: "absolute",
    top: "40%",
    width: width * 0.95,
    alignSelf: "center",
    shadowColor: "#ffd700",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    zIndex: 10,
  },
  text: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "ImperialScript-Regular",
  },
});

export default CutInAnimation;
