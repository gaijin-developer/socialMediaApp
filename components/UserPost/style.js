import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#eff2f6',
  },
  userContainer: {flexDirection: 'row'},
  userTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  userPostTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
  },
  locationStyle: {
    color: '#79869f',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
    textAlign: 'left',
  },
  postImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostStats: {
    marginLeft: 10,
    flexDirection: 'row',
    //   justifyContent: 'space-between',
  },
  statText: {marginLeft: 5, color: '#79869f'},
  userPostStatContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    alignItems: 'center',
  },
  userPostStatButtonStart: {flexDirection: 'row', alignItems: 'center'},
});
export default style;
