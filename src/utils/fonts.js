import {isIphoneX} from 'react-native-iphone-x-helper';
import {Platform, StatusBar, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const deviceHeight = isIphoneX()
  ? height - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === 'android'
  ? height - Number(StatusBar.currentHeight)
  : height;

export function FontPercentage(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}
export function FontValue(fontSize) {
  // guideline height for standard 5" device screen
  const standardScreenHeight = 680;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export const Fonts = {
  family: {
    nunitoRegular: 'Nunito-Regular',
  },
  size: {
    xxs: FontValue(8),
    xs: FontValue(10),
    s: FontValue(12),
    m: FontValue(14),
    l: FontValue(16),
    xl: FontValue(18),
    xxl: FontValue(20),
    xxxl: FontValue(24),
    title: FontValue(28),
  },
};
