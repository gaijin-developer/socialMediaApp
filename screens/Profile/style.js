import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileImageContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageWrap: {
    borderWidth: 1,
    borderColor: '#0150ec',
    padding: horizontalScale(5),
    borderRadius: 200,
  },
  userName: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(20),
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('Inter', '400'),
    color: '#79869f',
    textAlign: 'center',
    fontSize: scaleFontSize(16),
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(30),
    paddingHorizontal: horizontalScale(40),
    gap: horizontalScale(5),
    borderBottomWidth: 1,
    borderColor: '#e9eff1',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#e9eff1',
  },
});
export default style;
