import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
const style = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 27,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9Fafb',
    borderRadius: 100,
    position: 'relative',
  },
  messageNumberContainer: {
    position: 'absolute',
    top: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    alignItems: 'center',
    right: 10,
    backgroundColor: '#f35bac',
  },
  messageNumber: {
    color: 'white',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});
export default style;
