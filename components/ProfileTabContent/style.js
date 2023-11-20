import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  profileTabcontentcontainer: {
    color: '#022150',
    padding: 10,
  },
  imageContainer: {
    marginHorizontal: horizontalScale(5),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(90),
    marginTop: verticalScale(11),
  },
});

export default style;
